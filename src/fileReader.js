const electron = require('electron');
const readLastLines = require('read-last-lines');
var fs = require('fs');
const path = require('path');
const Tail = require('tail').Tail



//const log_timestamp = require('log-timestamp');

const buttonPressesLogFile = localStorage.getItem('log_path');
console.log(buttonPressesLogFile)

console.log(`Watching for file changes on ${buttonPressesLogFile}`);
let previousNames = [];
var sw_going = false;



tail = new Tail(buttonPressesLogFile);
console.log(tail)
fs.watchFile(buttonPressesLogFile, { interval: 1}, (curr, prev) => {
    console.log(`${buttonPressesLogFile} file Changed`);
    });

tail.on("line", function(data) {
    console.log(data.split(' '));
    line_parts = data.split(' ')
    //[12:08:04] [Client thread/INFO]: [CHAT] Your new API key is 23375d4a-288e-4fad-8941-c8513bc0924d
    if (line_parts[6]){
        //console.log(line_parts[4]+line_parts[5]+line_parts[6])
        if (line_parts[4]+line_parts[5]+line_parts[6] == "YournewAPI"){
            //set api key
            console.log("API")
            console.log((line_parts[9]+line_parts[10]))
            setAPIKey(line_parts[9])
        } 
    }
    

    if (line_parts[4] == "ONLINE:") {
        let stats = []
        let names = line_parts.slice(5);
        //console.log(names)
        const table_body = document.querySelector('tbody');
        //console.log("poo");
        table_body.innerHTML = "";
        for (ind in names) {
            let name = names[ind].replace(",", "");
            getData(name);
            console.log("checking" + name)
            //console.log(arr)
            //stats.push(arr)
        }
        //getData("dragondoodler222")
        //console.log(stats)

        //FINALLYt
    }

    if (line_parts[8]){
        if((line_parts[7]+line_parts[8][0]) == "thel"){
            //console.log("bob")
            const table_body = document.querySelector('tbody');
            table_body.innerHTML = "";
        }
    }
    if (line_parts[7]){
       if((line_parts[5]+line_parts[6]+line_parts[7][0]) == "hasjoined("){
            if (window.location != "bridge.html"){
                getData(line_parts[4])
            }
        }
    }
    // console.log((line_parts[5]+line_parts[6]) == "hasquit!")
    // console.log((line_parts[5]+line_parts[6]))
    if (line_parts[6]){
        if ((line_parts[5]+line_parts[6][0]) == "hasq"){
            removePlayer(line_parts[4])
        }
    }
    
    //BRIDGE
    let names = [];
    let teams = [];
      //console.log("f")
    console.log(data)
    if ((line_parts[4]) == "Teams:") {
        statsDiv = document.getElementById("tbody")
        statsDiv.innerHTML = ""
        setTimeout(function(){
            readLastLines.read(localStorage.getItem('log_path'), 4)
            .then((lines) => {
                // console.log("going")
                console.log(lines)
                var individual_lines = lines.split("\n")
                console.log(individual_lines)
                var teamsReached = false;
                var j = 1
                while (!teamsReached){
                    var line = individual_lines[(individual_lines.length)-j]
                    console.log(line)
                    var split_line = line.split(" ")
                    console.log(split_line[4])
                    if (split_line[4]){
                        if (split_line[4] == "Teams:"){
                            modeReached = true
                            console.log("REACHED")
                        }
                    }
                    if (split_line[7]){
                       if ((split_line[4]+split_line[5][0]) == "Team#"){
                            console.log(split_line[7])
                            if (split_line[7]){
                                for (let i = 7; i < split_line.length; i++){
                                    let name = split_line[i].replace(/[\[\]']+/g,'');
                                    console.log(name)
                                    name = name.replace(",", "");
                                    //getData(name)
                                    getData(name)
                                }
                            } 
                        } 
                    }
                    
                    
                    j += 1
                }

            }) 
        }, 200);















        // console.log(line_parts[5])
          
        // teams.push(line_parts[5]);
        // for (let i = 7; i < line_parts.length; i++){
        //     let name = line_parts[i].replace(/[\[\]']+/g,'');
        //     console.log(name)
        //     name = name.replace(",", "");
        //     //getData(name)
        //     if (!(names.includes(name))){
        //         names.push(name)
        //     }
        // }
        // if (previousNames){
        //     console.log("dashieoll")
        //     console.log(teams)
        //     console.log(names)
        //     if (!(names == previousNames) && (teams.includes("#1"))){
        //         let stats = document.getElementById("sections")
        //         stats.innerHTML = ""
        //         for (ind in names) {
        //             let name = names[ind].replace(",", "");
        //             getData(name);
        //         }
        //     }
        // }else{
        //     console.log("not")
        //     console.log(teams)
        //     console.log(names)
        //     if (teams.includes("#1")){

        //         let stats = document.getElementById("sections")
        //         stats.innerHTML = ""
        //         for (ind in names) {
        //             let name = names[ind].replace(",", "");
        //             getData(name);
        //         }
        //     }
        // }
  
        // console.log(names)
        // const table_body = document.querySelector('tbody');
    }
    
    // console.log(teams)
    // console.log(names)
    // console.log(previousNames)
    // console.log(names)
    
    previousNames = names

    //SW
   if (!sw_going){
    if (line_parts[6]){
        if ((line_parts[3]+line_parts[4]+line_parts[5][0])=="[CHAT]Team#"){
            setTimeout(function(){
                readLastLines.read(localStorage.getItem('log_path'), 20)
                .then((lines) => {
                    console.log("going")
                    console.log(lines)
                    sw_going = true
                    var individual_lines = lines.split("\n")
                    var modeReached = false;
                    var i = 1
                    team_lines = []
                    while (!modeReached){
                        var line = individual_lines[(individual_lines.length)-i]
                        console.log(line)
                        split_line = line.split(" ")
                        console.log(split_line[4])
                        if (split_line[4]){
                            if (split_line[4] == "Mode:"){
                                modeReached = true
                            }
                        }
                        if (split_line[5]){
                            if ((split_line[3]+split_line[4]+split_line[5][0])=="[CHAT]Team#"){
                                team_lines.push(line)
                            } 
                        }
                        i += 1
                    }
                    console.log(team_lines)
                    fromTeamLines(team_lines)
                    sw_going = false;
                

                }) 
            }, 500);
        }
    
    } 
    }
    
});

tail.on("error", function(error) {
  console.log('ERROR: ', error);
});


function setAPIKey(key){
    console.log(key);
    var path = require("path")
    const filename = path.resolve(__dirname, "data.json");
    var file_content = fs.readFileSync(filename);
    var content = JSON.parse(file_content);
    console.log(content)
    content.api_key = key

    fs.writeFile(filename, JSON.stringify(content), function writeJSON(err) {
      if (err) return console.log(err);
    });
    localStorage.setItem("api_key", key)
    showAlert("API Key Updated!", "positive")
}
previousTeamLines = []

function fromTeamLines(team_lines){
    if (arrayEquals(previousTeamLines, team_lines)){
        return;
    }
    const table_body = document.querySelector('tbody');
    console.log(team_lines)
    let names_list = []
    table_body.innerHTML = "";
    for (ind in team_lines){
        line_parts = team_lines[ind].split(' ')
        if (line_parts[4]){
            console.log(line_parts)
            console.log(line_parts[4]+line_parts[5])
            
            if ((line_parts[4]+line_parts[5]).includes("Team#")) {
                stats = []
                names = line_parts.slice(6);
                for (ind in names) {
                    let name = names[ind].replace(",", "");
                    
                    getData(name)
                }
            } 
        }
        
    }
    previousTeamLines = team_lines
}
function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


