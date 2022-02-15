function getTitle(wins){
    let title;
    let color;
    if (wins >= 28000){
        title = "Godlike X"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 26000){
        title = "Godlike IX"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 24000){
        title = "Godlike VIII"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 22000){
        title = "Godlike VII"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 20000){
        title = "Godlike VI"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 18000){
        title = "Godlike V"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 16000){
        title = "Godlike IV"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 14000){
        title = "Godlike III"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 12000){
        title = "Godlike II"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 10000){
        title = "Godlike"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 9000){
        title = "Grandmaster V"
        color = "rgb(247, 218, 100)"
    }
    else if (wins >= 8000){
        title = "Grandmaster IV"
        color = "rgb(247, 218, 100)"
    }
    else if (wins >= 7000){
        title = "Grandmaster III"
        color = "rgb(247, 218, 100)"
    }
    else if (wins >= 6000){
        title = "Grandmaster II"
        color = "rgb(247, 218, 100)"
    }
    else if (wins >= 5000){
        title = "Grandmaster"
        color = "rgb(247, 218, 100)"
    }
    else if (wins >= 4400){
        title = "Legend V"
        color = "rgb(184, 49, 47)"
    }
    else if (wins >= 3800){
        title = "Legend IV"
        color = "rgb(184, 49, 47)"
    }
    else if (wins >= 3200){
        title = "Legend III"
        color = "rgb(184, 49, 47)"
    }
    else if (wins >= 2600){
        title = "Legend II"
        color = "rgb(184, 49, 47)"
    }
    else if (wins >= 2000){
        title = "Legend"
        color = "rgb(184, 49, 47)"
    }
    else if (wins >= 1800){
        title = "Master V"
        color = "rgb(65, 168, 95)"
    }
    else if (wins >= 1600){
        title = "Master IV"
        color = "rgb(65, 168, 95)"
    }
    else if (wins >= 1400){
        title = "Master III"
        color = "rgb(65, 168, 95)"
    }
    else if (wins >= 1200){
        title = "Master II"
        color = "rgb(65, 168, 95)"
    }
    else if (wins >= 1000){
        title = "Master"
        color = "rgb(65, 168, 95)"
    }
    else if (wins >= 900){
        title = "Diamond V"
        color = "rgb(84, 172, 210)"
    }
    else if (wins >= 800){
        title = "Diamond IV"
        color = "rgb(84, 172, 210)"
    }
    else if (wins >= 700){
        title = "Diamond III"
        color = "rgb(84, 172, 210)"
    }
    else if (wins >= 600){
        title = "Diamond II"
        color = "rgb(84, 172, 210)"
    }
    else if (wins >= 500){
        title = "Diamond"
        color = "rgb(84, 172, 210)"
    }
    else if (wins >= 450){
        title = "Gold V"
        color = "rgb(251, 160, 38)"
    }
    else if (wins >= 400){
        title = "Gold IV"
        color = "rgb(251, 160, 38)"
    }
    else if (wins >= 350){
        title = "Gold III"
        color = "rgb(251, 160, 38)"
    }
    else if (wins >= 300){
        title = "Gold II"
        color = "rgb(251, 160, 38)"
    }
    else if (wins >= 250){
        title = "Gold"
        color = "rgb(251, 160, 38)"
    }
    else if (wins >= 220){
        title = "Iron V"
        color = "rgb(204, 204, 204)"
    }
    else if (wins >= 190){
        title = "Iron IV"
        color = "rgb(204, 204, 204)"
    }
    else if (wins >= 160){
        title = "Iron III"
        color = "rgb(204, 204, 204)"
    }
    else if (wins >= 130){
        title = "Iron II"
        color = "rgb(204, 204, 204)"
    }
    else if (wins >= 100){
        title = "Iron"
        color = "rgb(204, 204, 204)"
    }
    else if (wins >= 90){
        title = "Rookie V"
        color = "rgb(128, 128, 128)"
    }
    else if (wins >= 80){
        title = "Rookie IV"
        color = "rgb(128, 128, 128)"
    }
    else if (wins >= 70){
        title = "Rookie III"
        color = "rgb(128, 128, 128)"
    }
    else if (wins >= 60){
        title = "Rookie II"
        color = "rgb(128, 128, 128)"
    }
    else if (wins >= 50){
        title = "Rookie"
        color = "rgb(128, 128, 128)"
    }
    else{
        title = "None"
        color = "rgb(128, 128, 128)"
    }
    return [title, color]
}


function getOverallTitle(wins){
    let title;
    let color;
    if (wins >= 20000){
        title = "Godlike"
        color = "rgb(147, 101, 184)"
    }
    else if (wins >= 10000){
        title = "Grandmaster"
        color = "rgb(247, 218, 100)"
    }
    else if (wins >= 4000){
        title = "Legend"
        color = "rgb(184, 49, 47)"
    }
    else if (wins >= 2000){
        title = "Master"
        color = "rgb(65, 168, 95)"
    }
    else if (wins >= 1000){
        title = "Diamond"
        color = "rgb(84, 172, 210)"
    }
    else if (wins >= 500){
        title = "Gold"
        color = "rgb(251, 160, 38)"
    }
    else if (wins >= 200){
        title = "Iron"
        color = "rgb(204, 204, 204)"
    }
    else{
        title = "Rookie"
        color = "rgb(128, 128, 128)"
    }
    return [title, color]
}
