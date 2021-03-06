/*
[0✫] Stone prestige: §7[**✫] Hex Code: #AAAAAA[**✫]

[100✫] Iron Prestige: §f[***✫] Hex Code: #FFFFFF[***✫]

[200✫] Gold prestige: §6[***✫] Hex Code: #FFAA00[***✫]

[300✫] Diamond Prestige: §b[***✫] Hex Code: #55FFFF[***✫]

[400✫] Emerald Prestige: §2[***✫] Hex Code: #00AA00[***✫]

[500✫] Sapphire Prestige: §3[***✫] Hex Code: #00AAAA[***✫]

[600✫] Ruby Prestige: §4[***✫] Hex Code: #AA0000[***✫]

[700✫] Crystal Prestige: §d[***✫] Hex Code: #FF55FF[***✫]

[800✫] Opal Prestige: §9[***✫] Hex Code: #5555FF[***✫]

[900✫] Amethyst Prestige: §5[***✫] Hex Code: #AA00AA[***✫]

[1000✫] Rainbow Prestige: §c[§6*§e*§a*§b*§d✫§5]
Hex Code: #FF5555[#FFAA00*#FFFF55*#55FF55*#55FFFF*#FF55FF✫#AA00AA]

[1100✪] Iron Prime Prestige §7[§f****§7✪]
Hex Code: #AAAAAA[#FFFFFF****#AAAAAA✪]

[1200✪] Gold Prime Prestige: §7[§e****§6✪§7]
Hex Code: #AAAAAA[#FFFF55****#FFAA00✪#AAAAAA]

[1300✪] Diamond Prime Prestige: §7[§b****§3✪§7]
Hex Code: #AAAAAA[#55FFFF****#00AAAA✪#AAAAAA]

[1400✪] Emerald Prime Prestige: §7[§a****§2✪§7]
Hex Code: #AAAAAA[#55FF55****#00AA00✪#AAAAAA]

[1500✪] Sapphire Prime Prestige: §7[§3****§9✪§7]
Hex Code: #AAAAAA[#00AAAA****#5555FF✪#AAAAAA]

[1600✪] Ruby Prime Prestige: §7[§c****§4✪§7]
Hex Code: #AAAAAA[#FF5555****#AA0000✪#AAAAAA]

[1700✪] Crystal Prime Prestige: §7[§d****§5✪§7]
Hex Code: #AAAAAA[#FF55FF****#AA00AA✪#AAAAAA]

[1800✪] Opal Prime Prestige: §7[§9****§1✪§7]
Hex Code: #AAAAAA[#5555FF****#0000AA✪#AAAAAA]

[1900✪] Amethyst Prime Prestige: §7[§5****§8✪§7]
Hex Code: #AAAAAA[#AA00AA****#FF55FF✪#AAAAAA]

[2000✪] Mirror Prestige: §8[§7*§f**§7*✪§8]
Hex Code: #555555[#AAAAAA*#FFFFFF**#AAAAAA*✪#555555]

[2100❀] Light Prestige: §f[*§e**§6*❀]
Hex Code: #FFFFFF[*#FFFF55**#FFAA00*❀]

[2200❀] Dawn Prestige: §6[*§f**§b*§3❀]
[2300❀] Dusk Prestige: §5[*§d**§6*§e❀]
[2400❀] Air Prestige: §b[*§f**§7*❀§8]
[2500❀] Wind Prestige: §f[*§a**§2*❀]
[2600❀] Nebula Prestige: §4[*§c**§d*❀§5]
[2700❀] Thunder Prestige: §e[*§f**§8*❀]
[2800❀] Earth Prestige: §a[*§2**§6*❀§e]
[2900❀] Water Prestige: §b[*§3**§9*❀§1]
[3000❀] Fire Prestige: §e[*§6**§c*❀§4]

Black §0 #000000
Dark Blue §1 #0000AA
Dark Green §2 #00AA00
Dark Aqua §3 #00AAAA
Dark Red §4 #AA0000
Purple §5 #AA00AA
Orange/Gold §6 #FFAA00
Light Gray §7 #AAAAAA
Gray §8 #555555
Blue §9 #5555FF
Green §a #55FF55
Aqua #b #55FFFF
Red §c #FF5555
Pink §d #FF55FF
Yellow §e #FFFF55
White §f #FFFFFF

*/

function getPrestigeItems(star){
	let icon = document.createElement("span");
	let startBracket = document.createElement("span");
	let endBracket = document.createElement("span");
	startBracket.textContent = "["
	endBracket.textContent = "]"
	if (star < 1100){
		icon.textContent = "✫"
	} else if (star >= 1100 && star < 2100){
		icon.textContent = "✪"
	} else if (star >= 2100 && star < 3100){
		icon.textContent = "✫"
	}
	let c0;
	let c1;
	let c2;
	let c3;
	let c4;
	let c5;
	let c6;
	if (star < 100) {
		c0 = "rgb(170, 170, 170)"
		c1 = "rgb(170, 170, 170)"
		c2 = "rgb(170, 170, 170)"
		c3 = "rgb(170, 170, 170)"
		c4 = "rgb(170, 170, 170)"
		c5 = "rgb(170, 170, 170)"
		c6 = "rgb(170, 170, 170)"
	}else if (star < 200) {
		c0 = "rgb(239, 239, 239)"
		c1 = "rgb(239, 239, 239)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(239, 239, 239)"
		c5 = "rgb(239, 239, 239)"
		c6 = "rgb(239, 239, 239)"
	}else if (star < 300) {
		c0 = "rgb(255, 170, 0)"
		c1 = "rgb(255, 170, 0)"
		c2 = "rgb(255, 170, 0)"
		c3 = "rgb(255, 170, 0)"
		c4 = "rgb(255, 170, 0)"
		c5 = "rgb(255, 170, 0)"
		c6 = "rgb(255, 170, 0)"
	}else if (star < 400) {
		c0 = "rgb(0, 255, 255)"
		c1 = "rgb(0, 255, 255)"
		c2 = "rgb(0, 255, 255)"
		c3 = "rgb(0, 255, 255)"
		c4 = "rgb(0, 255, 255)"
		c5 = "rgb(0, 255, 255)"
		c6 = "rgb(0, 255, 255)"
	}else if (star < 500) {
		c0 = "rgb(0, 170, 0)"
		c1 = "rgb(0, 170, 0)"
		c2 = "rgb(0, 170, 0)"
		c3 = "rgb(0, 170, 0)"
		c4 = "rgb(0, 170, 0)"
		c5 = "rgb(0, 170, 0)"
		c6 = "rgb(0, 170, 0)"
	}else if (star < 600) {
		c0 = "rgb(0, 170, 170)"
		c1 = "rgb(0, 170, 170)"
		c2 = "rgb(0, 170, 170)"
		c3 = "rgb(0, 170, 170)"
		c4 = "rgb(0, 170, 170)"
		c5 = "rgb(0, 170, 170)"
		c6 = "rgb(0, 170, 170)"
	}else if (star < 700) {
		c0 = "rgb(170, 0, 0)"
		c1 = "rgb(170, 0, 0)"
		c2 = "rgb(170, 0, 0)"
		c3 = "rgb(170, 0, 0)"
		c4 = "rgb(170, 0, 0)"
		c5 = "rgb(170, 0, 0)"
		c6 = "rgb(170, 0, 0)"
	}else if (star < 800) {
		c0 = "rgb(255, 85, 255)"
		c1 = "rgb(255, 85, 255)"
		c2 = "rgb(255, 85, 255)"
		c3 = "rgb(255, 85, 255)"
		c4 = "rgb(255, 85, 255)"
		c5 = "rgb(255, 85, 255)"
		c6 = "rgb(255, 85, 255)"
	}else if (star < 900) {
		c0 = "rgb(85, 85, 255)"
		c1 = "rgb(85, 85, 255)"
		c2 = "rgb(85, 85, 255)"
		c3 = "rgb(85, 85, 255)"
		c4 = "rgb(85, 85, 255)"
		c5 = "rgb(85, 85, 255)"
		c6 = "rgb(85, 85, 255)"
	}else if (star < 1000) {
		c0 = "rgb(170, 0, 170)"
		c1 = "rgb(170, 0, 170)"
		c2 = "rgb(170, 0, 170)"
		c3 = "rgb(170, 0, 170)"
		c4 = "rgb(170, 0, 170)"
		c5 = "rgb(170, 0, 170)"
		c6 = "rgb(170, 0, 170)"
	}else if (star < 1100) {
		c0 = "rgb(255,85,85)"
		c1 = "rgb(255, 170, 0)"
		c2 = "rgb(255, 255, 85)"
		c3 = "rgb(85, 255, 85)"
		c4 = "rgb(85, 255, 255)"
		c5 = "rgb(255, 85, 255)"
		c6 = "rgb(170,0,170)"
	}else if (star < 1200) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(239, 239, 239)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(239, 239, 239)"
		c5 = "rgb(170, 170, 170)"
		c6 = "rgb(170,170,170)"
	}else if (star < 1300) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(255, 255, 85)"
		c2 = "rgb(255, 255, 85)"
		c3 = "rgb(255, 255, 85)"
		c4 = "rgb(255, 255, 85)"
		c5 = "rgb(255, 170, 0)"
		c6 = "rgb(170,170,170)"
	}else if (star < 1400) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(85, 255, 255)"
		c2 = "rgb(85, 255, 255)"
		c3 = "rgb(85, 255, 255)"
		c4 = "rgb(85, 255, 255)"
		c5 = "rgb(0, 170, 170)"
		c6 = "rgb(170,170,170)"
	}else if (star < 1500) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(85, 255, 85)"
		c2 = "rgb(85, 255, 85)"
		c3 = "rgb(85, 255, 85)"
		c4 = "rgb(85, 255, 85)"
		c5 = "rgb(0, 170, 0)"
		c6 = "rgb(170,170,170)"	
	}else if (star < 1600) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(0, 170, 170)"
		c2 = "rgb(0, 170, 170)"
		c3 = "rgb(0, 170, 170)"
		c4 = "rgb(0, 170, 170)"
		c5 = "rgb(85, 85, 255)"
		c6 = "rgb(170,170,170)"
	}else if (star < 1700) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(255, 85, 85)"
		c2 = "rgb(255, 85, 85)"
		c3 = "rgb(255, 85, 85)"
		c4 = "rgb(255, 85, 85)"
		c5 = "rgb(255, 0, 0)"
		c6 = "rgb(170,170,170)"
	}else if (star < 1800) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(255, 85, 255)"
		c2 = "rgb(255, 85, 255)"
		c3 = "rgb(255, 85, 255)"
		c4 = "rgb(255, 85, 255)"
		c5 = "rgb(170, 0, 170)"
		c6 = "rgb(170,170,170)"
	}else if (star < 1900) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(85, 85, 255)"
		c2 = "rgb(85, 85, 255)"
		c3 = "rgb(85, 85, 255)"
		c4 = "rgb(85, 85, 255)"
		c5 = "rgb(0, 0, 170)"
		c6 = "rgb(170,170,170)"
	}else if (star < 2000) {
		c0 = "rgb(170,170,170)"
		c1 = "rgb(170, 0, 170)"
		c2 = "rgb(170, 0, 170)"
		c3 = "rgb(170, 0, 170)"
		c4 = "rgb(170, 0, 170)"
		c5 = "rgb(85, 85, 85)"
		c6 = "rgb(170,170,170)"
	}else if (star < 2100){
		c0 = "rgb(85,85,85)"
		c1 = "rgb(170, 170, 170)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(170, 170, 170)"
		c5 = "rgb(85, 85, 85)"
		c6 = "rgb(85,85,85)"
	}else if (star < 2200) {
		c0 = "rgb(239, 239, 239)"
		c1 = "rgb(239, 239, 239)"
		c2 = "rgb(255, 255, 85)"
		c3 = "rgb(255, 255, 85)"
		c4 = "rgb(255, 170, 170)"
		c5 = "rgb(255, 170, 170)"
		c6 = "rgb(239, 239, 239)"
	}else if (star < 2300) {
		c0 = "rgb(255, 170, 0)"
		c1 = "rgb(255, 170, 0)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(85, 255, 255)"
		c5 = "rgb(0, 170, 170)"
		c6 = "rgb(255, 170, 0)"
	}else if (star < 2400) {
		c0 = "rgb(170, 0, 170)"
		c1 = "rgb(170, 0, 170)"
		c2 = "rgb(255, 85, 255)"
		c3 = "rgb(255, 85, 255)"
		c4 = "rgb(255, 170, 0)"
		c5 = "rgb(255, 255, 85)"
		c6 = "rgb(170, 0, 170)"
	}else if (star < 2500) {
		c0 = "rgb(85, 255, 255)"
		c1 = "rgb(85, 255, 255)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(170, 170, 170)"
		c5 = "rgb(170, 170, 170)"
		c6 = "rgb(85, 85, 85)"
	}else if (star < 2600) {
		c0 = "rgb(239, 239, 239)"
		c1 = "rgb(239, 239, 239)"
		c2 = "rgb(85, 255, 85)"
		c3 = "rgb(85, 255, 85)"
		c4 = "rgb(0, 170, 0)"
		c5 = "rgb(0, 170, 0)"
		c6 = "rgb(239, 239, 239)"
	}else if (star < 2700) {
		c0 = "rgb(170, 0, 0)" 
		c1 = "rgb(170, 0, 0)"
		c2 = "rgb(255, 85, 85)"
		c3 = "rgb(255, 85, 85)"
		c4 = "rgb(255, 85, 255)"
		c5 = "rgb(255, 85, 255)"
		c6 = "rgb(170, 0, 170)"
	}else if (star < 2800) {
		c0 = "rgb(255, 255, 85)"
		c1 = "rgb(255, 255, 85)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(85, 85, 85)"
		c5 = "rgb(85, 85, 85)"
		c6 = "rgb(85, 85, 85)"
	}else if (star < 2900) {
		c0 = "rgb(85, 255, 85)"
		c1 = "rgb(85, 255, 85)"
		c2 = "rgb(0, 170, 0)"
		c3 = "rgb(0, 170, 0)"
		c4 = "rgb(255, 170, 0)"
		c5 = "rgb(255, 170, 0)"
		c6 = "rgb(255, 255, 85)"
	}else if (star < 3000) {
		c1 = "rgb(85, 255, 255)"
		c2 = "rgb(0, 170, 170)"
		c3 = "rgb(0, 170, 170)"
		c4 = "rgb(85, 85, 255)"
		c5 = "rgb(85, 85, 255)"
		c6 = "rgb(0,0,170)"
	}else if (star < 3100) {
		c1 = "rgb(255, 255, 85)"
		c2 = "rgb(255, 170, 0)"
		c3 = "rgb(255, 170, 0)"
		c4 = "rgb(255, 85, 85)"
		c5 = "rgb(255, 85, 85)"
		c6 = "rgb(170,0,0)"
	}
	

	icon.style.color = c5
	let strStar = star.toString()
	let div = document.createElement("span")
	startBracket.style.color = c0
	div.appendChild(startBracket)
	let n1 = document.createElement("span")
	n1.textContent = strStar[0]
	n1.style.color = c1
	div.appendChild(n1)

	if (strStar[1]){
		let n2 = document.createElement("span")
		n2.textContent = strStar[1]
		n2.style.color = c2
		div.appendChild(n2)
	}
	
	if (strStar[2]){
		let n3 = document.createElement("span")
		n3.textContent = strStar[2]
		n3.style.color = c3
		div.appendChild(n3)
	}
	
	if (strStar[3]){
		n4 = document.createElement("span")
		n4.textContent = strStar[3] 
		n4.style.color = c4
		div.appendChild(n4)
	}
	
	div.appendChild(icon)
	endBracket.style.color = c6
	div.appendChild(endBracket)
	div.style.paddingRight = "5px"
	//console.log("dumb")
	return div

}

/*
0-5
5-9: Iron Prestige (White)
10-14: Gold Prestige (Gold)
15-19: Diamond Prestige (Aqua)
20-24: Emerald Prestige (Green)
25-29: Sapphire Prestige (Dark Aqua)
30-34: Ruby Prestige (Dark Red)
35-39: Crystal Prestige (Light Purple)
40-44: Opal Prestige (Blue)
45-49: Amethyst Prestige (Dark Purple)
50-59: Rainbow Prestige (Rainbow)
60: Mythic Prestige (Obfuscated Brackets)
*/
function getSkyWarsPrestigeItems(star){
	let icon = document.createElement("span");
	let c0;
	let c1;
	let c2;
	let c3;
	let c4;
	let c5;
	let c6;
	let c7;
	let iconColor;
	let startBracket = document.createElement("span");
	let endBracket = document.createElement("span");
	startBracket.textContent = "["
	endBracket.textContent = "]"
	if (star < 5) {
		c0 = "rgb(128, 128, 128)"
		c1 = "rgb(128, 128, 128)"
		c2 = "rgb(128, 128, 128)"
		icon.textContent = "\u22c6"
		icon.style.color = "rgb(128, 128, 128)"
	}else if (star < 10) {
		c0 = "rgb(209, 213, 216)" 
		c1 = "rgb(209, 213, 216)"
		c2 = "rgb(209, 213, 216)"
		icon.textContent = "\u2719"
		icon.style.color = "rgb(209, 213, 216)"
	}else if (star < 15) {
		c0 = "rgb(251, 160, 38)"
		c1 = "rgb(251, 160, 38)"
		c2 = "rgb(251, 160, 38)"
		c3 = "rgb(251, 160, 38)"
		icon.textContent = "\u2764"
		icon.style.color = "rgb(251, 160, 38)"
	}else if (star < 20) {
		c0 = "rgb(0, 236, 255)"
		c1 = "rgb(0, 236, 255)"
		c2 = "rgb(0, 236, 255)"
		c3 = "rgb(0, 236, 255)"
		icon.textContent = "\u2620"
		icon.style.color = "rgb(0, 236, 255)"
	}else if (star < 25) {
		c0 = "rgb(30, 161, 0)"
		c1 = "rgb(30, 161, 0)"
		c2 = "rgb(30, 161, 0)"
		c3 = "rgb(30, 161, 0)"
		icon.textContent = "\u2726"
		icon.style.color = "rgb(30, 161, 0)"
	}else if (star < 30) {
		c0 = "rgb(0, 163, 167)"
		c1 = "rgb(0, 163, 167)"
		c2 = "rgb(0, 163, 167)"
		c3 = "rgb(0, 163, 167)"
		icon.style.color = "transparent"
		icon.textContent = "\u270c"
		icon.style.textShadow = "0 0 0 rgb(0, 163, 167)"
	}else if (star < 35) {
		c0 = "rgb(184, 49, 47)"
		c1 = "rgb(184, 49, 47)"
		c2 = "rgb(184, 49, 47)"
		c3 = "rgb(184, 49, 47)"
		icon.textContent = "\u2766"
		icon.style.color = "rgb(184, 49, 47)"
	}else if (star < 40) {
		c0 = "rgb(236, 84, 255)"
		c1 = "rgb(236, 84, 255)"
		c2 = "rgb(236, 84, 255)"
		c3 = "rgb(236, 84, 255)"
		icon.textContent = "\u2735"
		icon.style.color = "rgb(236, 84, 255)"
	}else if (star < 45) {
		c0 = "rgb(84, 113, 255)"
		c1 = "rgb(84, 113, 255)"
		c2 = "rgb(84, 113, 255)"
		c3 = "rgb(84, 113, 255)"
		icon.textContent = "\u2763"
		icon.style.color = "rgb(84, 113, 255)"
	}else if (star < 50) {
		c0 = "rgb(88, 0, 201)"
		c1 = "rgb(88, 0, 201)"
		c2 = "rgb(88, 0, 201)"
		c3 = "rgb(88, 0, 201)"
		icon.textContent = "\u262f"
		icon.style.color = "rgb(88, 0, 201)"
	}else if (star < 60) {
		c0 = "rgb(226, 80, 65)"
		c1 = "rgb(255, 129, 0)"
		c2 = "rgb(250, 197, 28)"
		c3 = "rgb(0, 255, 236)"
		icon.textContent = "\u273a"
		icon.style.color = "rgb(113, 255, 99)"
	}else{
		c0 = "rgb(209, 72, 65)"
		c1 = "rgb(255, 129, 0)"
		c2 = "rgb(250, 197, 28)"
		c3 = "rgb(100, 0, 156)"
		let p1 = document.createElement("span")
		p1.textContent = "\u0ca0"
		p1.style.color = "rgb(159, 255, 110)"
		let p2 = document.createElement("span")
		p2.textContent = "_"
		p2.style.color = "rgb(0, 223, 255)"
		let p3 = document.createElement("span")
		p3.textContent = "\u0ca0"
		p3.style.color = "rgb(253, 0, 255)"
		icon.appendChild(p1)
		icon.appendChild(p2)
		icon.appendChild(p3)
	}
	let strStar = star.toString()
	let div = document.createElement("span")
	startBracket.style.color = c0
	div.appendChild(startBracket)
	let n1 = document.createElement("span")
	n1.textContent = strStar[0]
	n1.style.color = c1
	div.appendChild(n1)

	if (strStar[1]){
		let n2 = document.createElement("span")
		n2.textContent = strStar[1]
		n2.style.color = c2
		div.appendChild(n2)
	}
	
	if (strStar[2]){
		let n3 = document.createElement("span")
		n3.textContent = strStar[2]
		n3.style.color = c3
		div.appendChild(n3)
	}
	
	if (strStar[3]){
		n4 = document.createElement("span")
		n4.textContent = strStar[3] 
		n4.style.color = c4
		div.appendChild(n4)
	}
	
	div.appendChild(icon)
	if (star < 10){
		endBracket.style.color = c2
	}else{
		endBracket.style.color = c3
	}
	div.appendChild(endBracket)
	div.style.paddingRight = "5px"
	//console.log("dumb")
	return div

}


