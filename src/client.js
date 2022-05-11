var path = require("path");
var fs = require("fs");

// const filename = path.resolve(__dirname, "data.json");
// var file_content = fs.readFileSync(filename);
// var content = JSON.parse(file_content);


// async function getSettings(){
//   var api_key = await settings.get('api_key')
//   var background = await settings.get('background')
//   localStorage.setItem("api_key", api_key);
//   localStorage.setItem("background", background);
// }
//console.log(content)

function setClientLunar(){
  const os = require("os");
  //content.client = "lunar"
  
  // check the available memory
  const userHomeDir = os.homedir();
  console.log(userHomeDir)
  var isWin = process.platform === "win32";
  console.log(isWin)
  console.log(process.platform)
  //C:\Users\simon\.lunarclient\offline\1.8\logs
  if(isWin){
    fs.access(userHomeDir+"\\.lunarclient\\offline\\1.8\\logs", function(error) {
      if (error) {
        console.log("Directory does not exist.")
      } else {
        console.log("Directory exists.")
        localStorage.setItem("log_path", userHomeDir+"\\.lunarclient\\offline\\1.8\\logs\\latest.log");
        //window.location.href = "bedwars.html";
      }
    });
  }else{
    fs.access(userHomeDir+"/.lunarclient/offline/1.8/logs", function(error) {
      if (error) {
        console.log("Directory does not exist.")
      } else {
        console.log("Directory exists.")
        localStorage.setItem("log_path", userHomeDir+"/.lunarclient/offline/1.8/logs/latest.log");
        
      }
    })
  }

  
}

function setClientBadlion(){
  const os = require("os");
  //content.client = "badlion"
  // check the available memory
  const userHomeDir = os.homedir();
  console.log(userHomeDir)
  var isWin = process.platform === "win32";
  if(isWin){
    fs.access(userHomeDir+"\\AppData\\Roaming\\.minecraft\\logs", function(error) {
      if (error) {
        console.log("Directory does not exist.")
      } else {
        console.log("Directory exists.")
        localStorage.setItem("log_path", userHomeDir+"\\AppData\\Roaming\\.minecraft\\logs\\latest.log");
      }
    });
  }else{
    fs.access(userHomeDir+"/Library/Application Support/minecraft/logs", function(error) {
      if (error) {
        console.log("Directory does not exist.")
      } else {
        console.log("Directory exists.")
        localStorage.setItem("log_path", userHomeDir+"/Library/Application Support/minecraft/logs/latest.log");

      }
    })
  }
}

function setClientForge(){
  const os = require("os");
  //content.client = "forge"
  // check the available memory
  const userHomeDir = os.homedir();
  console.log(userHomeDir)
  var isWin = process.platform === "win32";
  if(isWin){
    fs.access(userHomeDir+"\\AppData\\Roaming\\.minecraft\\logs", function(error) {
      if (error) {
        console.log("Directory does not exist.")
      } else {
        console.log("Directory exists.")
        localStorage.setItem("log_path", userHomeDir+"\\AppData\\Roaming\\.minecraft\\logs\\latest.log");
        //window.location.href = "bedwars.html";
      }
    });
  }else{
    fs.access(userHomeDir+"/Library/Application Support/minecraft/logs", function(error) {
      if (error) {
        console.log("Directory does not exist.")
      } else {
        console.log("Directory exists.")
        localStorage.setItem("log_path", userHomeDir+"/Library/Application Support/minecraft/logs/latest.log");
        //window.location.href = "bedwars.html";

      }
    })
  }
}

