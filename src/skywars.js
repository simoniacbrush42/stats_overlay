previousTeamLines = []

function getData(name) {
    //console.log(name)
    var key = localStorage.getItem("api_key");
    let uid = ''
    fetch('https://api.mojang.com/users/profiles/minecraft/' + name + '?at=')
        .then(result => {
            //console.log(result.json())
            return result.json()
        })

        .then(({
            id
        }) => {
            //console.log(id)
            // Log the player's username
            uid = id;
            fetch("https://api.hypixel.net/player?key="+key+"&uuid=" +
                uid)
                .then(result => result.json())
                .then(({
                    player
                }) => {
                    stats = []
                    //console.log(player)
                    // Log the player's username
                    /*
                    ws wlr kdr
                    kills?
                    lvl
                    */
                    
                    
                    let name = player.displayname
                    console.log(name)

                    let last_login = player.lastLogin
                    let sw_exp = player.stats.SkyWars.skywars_experience
                    let sw_lvl;
                    if (sw_exp){
                        sw_lvl = sw_xp_to_lvl(sw_exp).toFixed(0)
                    } else {
                        sw_lvl = 1
                    }
                    let ws = player.stats.SkyWars.win_streak
                    let wins = player.stats.SkyWars.wins
                    let losses = player.stats.SkyWars.losses
                    let wlr;

                    if (wins && losses){
                        wlr = (wins/losses).toFixed(2)
                    }else if (wins && !losses){
                        wlr = wins
                    }else{
                        wlr = 0
                    }
                    if (!ws){
                        ws = 0
                    }
                    
                    let kills = player.stats.SkyWars.kills
                    if (!kills){
                        kills = 0
                    }
                    let deaths = player.stats.SkyWars.deaths
                    let kdr;
                    if (kills && deaths){
                        kdr = (kills/deaths).toFixed(2)
                    }else if (kills && !deaths){
                        kdr = kills
                    }else{
                        kdr = 0
                    }
                    time = new Date(Date.now());
                    //console.log(time)
                    //console.log(last_login)
                    var login = new Date(last_login);
                    const diffTime = Math.abs(time - login);
                    var diffInMins = (diffTime/60000).toFixed(0);
                    //console.log(login)
                    if (!diffInMins){
                        diffInMins = "X"
                    }
                    const table_body = document.querySelector('tbody');
                    let rank;
                    let rank_color;
                    if (player.rank) {
                        rank = player.rank;
                        if (rank == "YOUTUBER") {
                            rank = "[YOUTUBE]"
                            rank_color = "#FF5555"

                        } else if (rank == "ADMIN") {
                            rank = "[ADMIN]"
                        }
                    } else {
                        if (player.monthlyPackageRank) {
                            rank = player.monthlyPackageRank
                            if (player.monthlyPackageRank == "SUPERSTAR") {
                                rank = "[MVP++]"
                                rank_color = player.monthlyRankColor
                                if (rank_color == "GOLD") {
                                    rank_color = "rgb(255,170,0)"
                                } else {
                                    rank_color = "rgb(85,255,255)"
                                }
                            } else {
                                new_pckg = player.newPackageRank
                                if (new_pckg) {
                                    //console.log("bo")
                                    rank = new_pckg
                                    //console.log(rank)
                                    if (rank == "MVP_PLUS") {
                                        rank = "[MVP+]"
                                        rank_color = "rgb(85,255,255)"
                                    } else if (rank == "MVP") {
                                        rank = "[MVP]"
                                        rank_color = "rgb(85,255,255)"
                                    } else if (rank == "VIP_PLUS") {
                                        rank = "[VIP+]"
                                        rank_color = "rgb(85,255,85)"

                                    } else if (rank == "VIP") {
                                        //console.log("vip")
                                        rank = "[VIP]"
                                        rank_color = "rgb(85,255,85)"
                                    }
                                } else {
                                    rank = "NONE"
                                }

                            }
                        } else if (player.newPackageRank) {
                            new_pckg = player.newPackageRank
                            if (new_pckg) {
                                //console.log("new")
                                rank = new_pckg
                                if (rank == "MVP_PLUS") {
                                    //console.log('smell')
                                    rank = "[MVP+]"
                                    rank_color = "rgb(85,255,255)"
                                } else if (rank == "MVP") {
                                    rank = "[MVP]"
                                    rank_color = "rgb(85,255,255)"
                                } else if (rank == "VIP_PLUS") {
                                    rank = "[VIP+]"
                                    rank_color = "rgb(85,255,85)"
                                } else if (rank == "VIP") {
                                    rank = "[VIP]"
                                    rank_color = "rgb(85,255,85)"
                                }
                            } else {
                                rank = "NONE"
                            }
                        } else {
                            //console.log('test')
                            new_pckg = player.packageRank
                            //console.log(new_pckg)
                            if (new_pckg) {
                                rank = new_pckg
                                //console.log(rank)
                                if (rank == "MVP_PLUS") {
                                    console.log('smell')
                                    rank = "[MVP+]"
                                } else if (rank == "MVP") {
                                    rank = "[MVP]"
                                } else if (rank == "VIP_PLUS") {
                                    rank = "[VIP+]"
                                } else if (rank == "VIP") {
                                    //console.log("vip")
                                    rank = "[VIP]"
                                }
                            } else {
                                rank = "NONE"
                            }

                        }
                    }

                    let plusColor;

                    if (player.rankPlusColor) {
                        plusColor = player.rankPlusColor
                    } else {
                        plusColor = ""
                    }


                    let plus;
                    let p1;
                    let p2;
                    let plusFound = false;
                    //console.log(rank)
                    if (rank != "NONE") {
                        name = rank + " " + name
                    } else {
                        console.log(name, "non")
                        rank_color = "#AAAAAA"
                    }
                    if (rank == "[YOUTUBE]") {
                        //console.log("youtuber")
                        p1 = name.substring(0, 1)
                        plus = name.substring(1, 8)
                        p2 = name.substring(8)
                    } else {
                        //console.log("normal")
                        for (var i = 0; i < name.length; i++) {
                            if (name[i] == "+") {
                                plusFound = true;
                                p1 = name.substring(0, i)
                                if (name[i + 1] == "+") {
                                    plus = name.substring(i, i + 2)
                                    p2 = name.substring((i + 2));

                                } else {
                                    plus = name.substring(i, i + 1)
                                    p2 = name.substring(i + 1);
                                }
                                { break; }
                            }
                        }
                    }

                    if (!plusFound && rank != "[YOUTUBE]") {
                        p1 = name.substring(0, 5)
                        p2 = name.substring(5)
                    }

                    let span = document.createElement("span");

                    span.textContent = plus
                    if (rank == "[YOUTUBE]") {
                        plusc = "#E0E0E0"
                    } else if(rank == "[VIP+]"){
                        plusc = "#FFAA00"
                    } else if(rank != ""){
                        if (plusColor != ""){
                            plusc = plus_to_color(plusColor)
                        }else{
                           plusc = "#FF5555" 
                        }
                        
                    }

                    let ign = document.createElement("td")
                    //ign.style.objectPosition = "center top"
                    ign.classList.add("names");
                    let im_span = document.createElement("span")
                    im_span.style.paddingRight = "5px"
                    let im = document.createElement("img")
                    im.src = "https://crafatar.com/avatars/" + uid +
                        "?size=15&default=MHF_Steve&overlay"
                    im_span.appendChild(im)
                    span.style.float = "none"
                    span.style.color = plusc
                    ign.style.color = rank_color
                    star_span = document.createElement("span")
                    star_span.appendChild(getSkyWarsPrestigeItems(sw_lvl))
                    ign.appendChild(im_span)
                    ign.appendChild(star_span)
                    ign.appendChild(document.createTextNode(p1))
                    ign.appendChild(span)
                    ign.appendChild(document.createTextNode(p2))


                    const tr = document.createElement("tr");
                    tr.style.paddingBottom = "100px"
                    //ign.style.textAlign = 'left';
                    tr.appendChild(ign)

                    
        
                   
                    if (wlr < 0.1){
                        c = "rgb(102,255,102)"
                    }else if (wlr < 0.2){
                        c = "orange"
                    }else if (wlr < 0.5){
                        c = "#EF6C6C"
                    }else{
                        c = "red"
                    }
                    
                    


                    ws_elem = document.createElement("td");
                    ws_elem.style.position = "absolute";
                    ws_elem.style.left = '271px';
                    ws_elem.classList.add("ws")
                    ws_elem.style.color = c
                    if (!ws && ws != 0){
                        ws = "X"
                    }
                    ws_elem.innerHTML = ws
                    tr.appendChild(ws_elem)

                    kills_elem = document.createElement("td");
                    kills_elem.style.position = "absolute";
                    kills_elem.style.left = '361px';
                    kills_elem.style.color = c
                    kills_elem.innerHTML = kills
                    tr.appendChild(kills_elem)

                    kdr_elem = document.createElement("td");
                    kdr_elem.style.position = "absolute";
                    kdr_elem.style.left = '474px';
                    kdr_elem.style.color = c
                    kdr_elem.innerHTML = kdr
                    tr.appendChild(kdr_elem)

                    wlr_elem = document.createElement("td");
                    wlr_elem.style.position = "absolute";
                    wlr_elem.style.left = '582px';
                    wlr_elem.style.color = c
                    wlr_elem.innerHTML = wlr
                    tr.appendChild(wlr_elem)

                    diffInMins_elem = document.createElement("td");
                    diffInMins_elem.style.position = "absolute";
                    diffInMins_elem.style.left = '707px';
                    diffInMins_elem.paddingLeft = "35px"
                    diffInMins_elem.style.color = c
                    if (!last_login){
                        diffInMins = "X"
                    }
                    diffInMins_elem.innerHTML = diffInMins
                    tr.appendChild(diffInMins_elem)

                    /*
                    for (i in stats) {
                        //console.log(i)
                        //console.log(stats[i])
                        const data = document.createElement("td");

                        if (i == 0) {
                            const im = document.createElement("img")
                            const par = document.createElement("p")
                            parts = stats[i].split(" ")
                            im.src = parts[0]
                            im.style.paddingRight = "5px";
                            data.appendChild(im)
                            par.innerHTML = "  " + parts[1] + " " + parts[2];
                            data.style.paddingRight = "40px"
                            data.appendChild(par)
                            data.style.display = "flex";
                        } else if (i == 4) {
                            data.style.paddingRight = "30px"
                            data.style.paddingLeft = "30px"
                        } else if (i == 8) {
                            data.style.paddingRight = "0px"
                        }
                        if (i != 0) {
                            data.innerHTML = stats[i]
                        }
                        tr.appendChild(data)
                    }
                    */
                    table_body.appendChild(tr)
                    
                    const table = document.getElementById("statsTable")
                    let tableArray = table_to_array("statsTable")
                    const tBody = table.tBodies[0]
                    tableArray.sort( function( a, b )
                    {
                      if ( parseFloat(a[4]) == parseFloat(b[4]) ) return 0;
                      return parseFloat(a[4]) > parseFloat(b[4]) ? -1 : 1;
                    });
                    let trArr = Array.from(tBody.querySelectorAll("tr"))
                    table_body.innerHTML = ""
                    for (i = 0; i < tableArray.length; i++){
                        for (j = 0; j < trArr.length; j++){
                            console.log(tableArray[i][0], typeof trArr[j].innerText, "bob")
                            if ((trArr[j].innerText).includes(tableArray[i][0])){
                                console.log("mathc")
                                table_body.appendChild(trArr[j])
                            }
                        }
                    }
                    
                    //console.log(trArr[0].innerText)

                    


                })
                .catch((error) => {
                    rank_color = "#AAAAAA"
                    const table_body = document.querySelector('tbody');
                    let ign = document.createElement("td")
                    //ign.style.objectPosition = "center top"
                    ign.classList.add("names");
                    let im_span = document.createElement("span")
                    im_span.style.paddingRight = "5px"
                    let im = document.createElement("img")
                    //im.src = "/images/warning.png"
                    im.src = "./images/warningimg.png"
                    im.width = "15"
                    im.length = "15"
                    im_span.appendChild(im)
                    //span.style.float = "none"
                    ign_span = document.createElement("span")
                    ign_span.textContent = name
                    ign_span.style.color = "#AAAAAA"
                    
                    ign.appendChild(im_span)
                    ign.appendChild(ign_span)
                    


                    const tr = table_body.insertRow(-1)
                    tr.style.paddingBottom = "100px"
                    ign.style.textAlign = 'left';
                    tr.appendChild(ign)
                    nicked_elem = document.createElement("td");
                    nicked_elem.style.position = "absolute";
                    nicked_elem.style.left = '272px';
                    nicked_elem.classList.add("ws")
                    nicked_elem.style.color = "red"
                    
                    nicked_elem.innerHTML = "Invalid API Key. Please Run /api new"
                    tr.appendChild(nicked_elem)

                    fkdr_elem = document.createElement("td");
                    fkdr_elem.innerHTML = "Infinity"
                    fkdr_elem.style.display = "none";

                    tr.appendChild(fkdr_elem)

                    finals_elem = document.createElement("td");
                    finals_elem.innerHTML = "Infinity"
                    finals_elem.style.display = "none";
                    tr.appendChild(finals_elem)

                    index_elem = document.createElement("td");
                    index_elem.innerHTML = "Infinity"
                    index_elem.style.display = "none";
                    tr.appendChild(index_elem)
                })
        })
        .catch((error) => {
            rank_color = "#AAAAAA"
            const table_body = document.querySelector('tbody');
            let ign = document.createElement("td")
            //ign.style.objectPosition = "center top"
            ign.classList.add("names");
            let im_span = document.createElement("span")
            im_span.style.paddingRight = "5px"
            let im = document.createElement("img")
            //im.src = "/images/warning.png"
            im.src = "./images/warningimg.png"
            im.width = "15"
            im.length = "15"
            im_span.appendChild(im)
            //span.style.float = "none"
            ign_span = document.createElement("span")
            ign_span.textContent = name
            ign_span.style.color = "#AAAAAA"
            
            ign.appendChild(im_span)
            ign.appendChild(ign_span)
            


            const tr = table_body.insertRow(-1)
            tr.style.paddingBottom = "100px"
            ign.style.textAlign = 'left';
            tr.appendChild(ign)
            nicked_elem = document.createElement("td");
            nicked_elem.style.position = "absolute";
            nicked_elem.style.left = '272px';
            nicked_elem.classList.add("ws")
            nicked_elem.style.color = "red"
            
            nicked_elem.innerHTML = "NICKED"
            tr.appendChild(nicked_elem)

            fkdr_elem = document.createElement("td");
            fkdr_elem.innerHTML = "Infinity"
            fkdr_elem.style.display = "none";

            tr.appendChild(fkdr_elem)

            finals_elem = document.createElement("td");
            finals_elem.innerHTML = "Infinity"
            finals_elem.style.display = "none";
            tr.appendChild(finals_elem)

            index_elem = document.createElement("td");
            index_elem.innerHTML = "Infinity"
            index_elem.style.display = "none";
            tr.appendChild(index_elem)
            //console.log('err')
            /*stats.push(name, 'NICKED', 'NICKED', 'NICKED', 'NICKED', "NICKED",
                'NICKED', 'NICKED', 'NICKED'
            )
            */
        })
        .finally(() => {
            //console.log("poo")
            //console.log(stats)
            //sortArr()
            return
        });





}

function removePlayer(ign){
    const table = document.getElementById("statsTable")
    const tBody = table.tBodies[0]
    let trArr = Array.from(tBody.querySelectorAll("tr"))
    //console.log(trArr)
    for (j = 0; j < trArr.length; j++){
        console.log(trArr[j])
        if ((trArr[j].innerText).includes(ign)){
            trArr[j].remove()
        }
    }
}

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



function sw_xp_to_lvl(xp) {
    var xps = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000];
    if(xp >= 15000) {
        return (xp - 15000) / 10000 + 12;
    } else {
        for(i = 0; i < xps.length; i++) {
            if(xp < xps[i]) {
                return i + (xp - xps[i-1]) / (xps[i] - xps[i-1]);
            }
        }
    }
}




        