function rank(player){
    let rank;
    let rank_color;
    let name = player.displayname
    if (player.rank){
        rank = player.rank;
        if (rank == "YOUTUBER"){
            rank = "[YOUTUBE]"
            rank_color = "#FF5555"

        }else if (rank == "ADMIN"){
            rank = "[ADMIN]"
        }
    } else {
        if (player.monthlyPackageRank){
            rank = player.monthlyPackageRank
            if (player.monthlyPackageRank == "SUPERSTAR"){
                rank = "[MVP++]"
                rank_color = player.monthlyRankColor
                if (rank_color == "GOLD"){
                    rank_color = "rgb(255,170,0)"
                } else {
                    rank_color = "rgb(85,255,255)"
                }
            } else{
                new_pckg = player.newPackageRank
                if (new_pckg){
                    console.log("bo")
                    rank = new_pckg
                    console.log(rank)
                    if (rank == "MVP_PLUS"){
                        rank = "[MVP+]"
                        rank_color = "rgb(85,255,255)"
                    } else if (rank == "MVP"){
                        rank = "[MVP]"
                        rank_color = "rgb(85,255,255)"
                    } else if (rank == "VIP_PLUS"){
                        rank = "[VIP+]"
                        rank_color = "rgb(85,255,85)"
                    } else if (rank == "VIP"){
                        console.log("vip")
                        rank = "[VIP]"
                        rank_color = "rgb(85,255,85)"
                    }
                } else{
                    rank = ""
                }
                
            }
        } else if (player.newPackageRank){
                new_pckg = player.newPackageRank
                if (new_pckg){
                    console.log("new")
                    rank = new_pckg
                    if (rank == "MVP_PLUS"){
                        console.log('smell')
                        rank = "[MVP+]"
                        rank_color = "rgb(85,255,255)"
                    } else if (rank == "MVP"){
                        rank = "[MVP]"
                        rank_color = "rgb(85,255,255)"
                    } else if (rank == "VIP_PLUS"){
                        rank = "[VIP+]"
                        rank_color = "rgb(85,255,85)"
                    } else if (rank == "VIP"){
                        rank = "[VIP]"
                        rank_color = "rgb(85,255,85)"
                    }
                } else{
                    rank = ""
                }
        } else{
            console.log('test')
            new_pckg = player.packageRank
            console.log(new_pckg)
            if (new_pckg){
                rank = new_pckg
                console.log(rank)
                if (rank == "MVP_PLUS"){
                    console.log('smell')
                    rank = "[MVP+]"
                } else if (rank == "MVP"){
                    rank = "[MVP]"
                } else if (rank == "VIP_PLUS"){
                    rank = "[VIP+]"
                } else if (rank == "VIP"){
                    console.log("vip")
                    rank = "[VIP]"
                }
            } else{
                rank = ""
            }
                
        }
    }
    
    let plusColor;

    if (player.rankPlusColor){
        plusColor = player.rankPlusColor
    } else{
        plusColor = ""
    }
    return plusColor, rank, rank_color
}
