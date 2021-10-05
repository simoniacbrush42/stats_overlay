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
	if (star < 1100){
		icon.textContent = "✫"
	} else if (star >= 1100 && star < 2100){
		icon.textContent = "✪"
	} else if (star >= 2100 && star < 3100){
		icon.textContent = "⚝"
	}
	let c1;
	let c2;
	let c3;
	let c4;
	let c5;
	if (star < 100) {
		c1 = "rgb(170, 170, 170)"
		c2 = "rgb(170, 170, 170)"
		c3 = "rgb(170, 170, 170)"
		c4 = "rgb(170, 170, 170)"
		c5 = "rgb(170, 170, 170)"
	}else if (star < 200) {
		c1 = "rgb(239, 239, 239)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(239, 239, 239)"
		c5 = "rgb(239, 239, 239)"
	}else if (star < 300) {
		c1 = "rgb(255, 170, 0)"
		c2 = "rgb(255, 170, 0)"
		c3 = "rgb(255, 170, 0)"
		c4 = "rgb(255, 170, 0)"
		c5 = "rgb(255, 170, 0)"
	}else if (star < 400) {
		c1 = "rgb(0, 255, 255)"
		c2 = "rgb(0, 255, 255)"
		c3 = "rgb(0, 255, 255)"
		c4 = "rgb(0, 255, 255)"
		c5 = "rgb(0, 255, 255)"
	}else if (star < 500) {
		c1 = "rgb(0, 170, 0)"
		c2 = "rgb(0, 170, 0)"
		c3 = "rgb(0, 170, 0)"
		c4 = "rgb(0, 170, 0)"
		c5 = "rgb(0, 170, 0)"
	}else if (star < 600) {
		c1 = "rgb(0, 170, 170)"
		c2 = "rgb(0, 170, 170)"
		c3 = "rgb(0, 170, 170)"
		c4 = "rgb(0, 170, 170)"
		c5 = "rgb(0, 170, 170)"
	}else if (star < 700) {
		let c = "rgb(170, 0, 0)"
		c1 = "rgb(170, 0, 0)"
		c2 = "rgb(170, 0, 0)"
		c3 = "rgb(170, 0, 0)"
		c4 = "rgb(170, 0, 0)"
		c5 = "rgb(170, 0, 0)"
	}else if (star < 800) {
		c1 = "rgb(255, 85, 255)"
		c2 = "rgb(255, 85, 255)"
		c3 = "rgb(255, 85, 255)"
		c4 = "rgb(255, 85, 255)"
		c5 = "rgb(255, 85, 255)"
	}else if (star < 900) {
		c1 = "rgb(85, 85, 255)"
		c2 = "rgb(85, 85, 255)"
		c3 = "rgb(85, 85, 255)"
		c4 = "rgb(85, 85, 255)"
		c5 = "rgb(85, 85, 255)"
	}else if (star < 1000) {
		c1 = "rgb(170, 0, 170)"
		c2 = "rgb(170, 0, 170)"
		c3 = "rgb(170, 0, 170)"
		c4 = "rgb(170, 0, 170)"
		c5 = "rgb(170, 0, 170)"
		

		/*
		n4 = document.createElement("span")
		b1.textContent = strStar[3]
		b1.style.color = c
		*/
	}else if (star < 1100) {
		c1 = "rgb(255, 170, 0)"
		c2 = "rgb(255, 255, 85)"
		c3 = "rgb(85, 255, 85)"
		c4 = "rgb(85, 255, 255)"
		c5 = "rgb(255, 85, 255)"
	}else if (star < 1200) {
		c1 = "rgb(239, 239, 239)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(239, 239, 239)"
		c5 = "rgb(170, 170, 170)"
	}else if (star < 1300) {
		c1 = "rgb(255, 255, 85)"
		c2 = "rgb(255, 255, 85)"
		c3 = "rgb(255, 255, 85)"
		c4 = "rgb(255, 255, 85)"
		c5 = "rgb(255, 170, 0)"
	}else if (star < 1400) {
		c1 = "rgb(85, 255, 255)"
		c2 = "rgb(85, 255, 255)"
		c3 = "rgb(85, 255, 255)"
		c4 = "rgb(85, 255, 255)"
		c5 = "rgb(0, 170, 170)"
	}else if (star < 1500) {
		c1 = "rgb(85, 255, 85)"
		c2 = "rgb(85, 255, 85)"
		c3 = "rgb(85, 255, 85)"
		c4 = "rgb(85, 255, 85)"
		c5 = "rgb(0, 170, 0)"
		
	}else if (star < 1600) {
		c1 = "rgb(0, 170, 170)"
		c2 = "rgb(0, 170, 170)"
		c3 = "rgb(0, 170, 170)"
		c4 = "rgb(0, 170, 170)"
		c5 = "rgb(85, 85, 255)"
	}else if (star < 1700) {
		c1 = "rgb(255, 85, 85)"
		c2 = "rgb(255, 85, 85)"
		c3 = "rgb(255, 85, 85)"
		c4 = "rgb(255, 85, 85)"
		c5 = "rgb(255, 0, 0)"
	}else if (star < 1800) {
		c1 = "rgb(255, 85, 255)"
		c2 = "rgb(255, 85, 255)"
		c3 = "rgb(255, 85, 255)"
		c4 = "rgb(255, 85, 255)"
		c5 = "rgb(170, 0, 170)"
	}else if (star < 1900) {
		c1 = "rgb(85, 85, 255)"
		c2 = "rgb(85, 85, 255)"
		c3 = "rgb(85, 85, 255)"
		c4 = "rgb(85, 85, 255)"
		c5 = "rgb(0, 0, 170)"
	}else if (star < 2000) {
		c1 = "rgb(170, 0, 170)"
		c2 = "rgb(170, 0, 170)"
		c3 = "rgb(170, 0, 170)"
		c4 = "rgb(170, 0, 170)"
		c5 = "rgb(85, 85, 85)"
	}else if (star < 2100) {
		c1 = "rgb(170, 170, 170)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(170, 170, 170)"
		c5 = "rgb(85, 85, 85)"
	}else if (star < 2200) {
		c1 = "rgb(239, 239, 239)"
		c2 = "rgb(255, 255, 85)"
		c3 = "rgb(255, 255, 85)"
		c4 = "rgb(255, 170, 170)"
		c5 = "rgb(255, 170, 170)"
	}else if (star < 2300) {
		c1 = "rgb(255, 170, 0)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(85, 255, 255)"
		c5 = "rgb(0, 170, 170)"
	}else if (star < 2400) {
		c1 = "rgb(170, 0, 170)"
		c2 = "rgb(255, 85, 255)"
		c3 = "rgb(255, 85, 255)"
		c4 = "rgb(255, 170, 0)"
		c5 = "rgb(255, 255, 85)"
	}else if (star < 2500) {
		c1 = "rgb(85, 255, 255)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(170, 170, 170)"
		c5 = "rgb(170, 170, 170)"
	}else if (star < 2600) {
		c1 = "rgb(239, 239, 239)"
		c2 = "rgb(85, 255, 85)"
		c3 = "rgb(85, 255, 85)"
		c4 = "rgb(0, 170, 0)"
		c5 = "rgb(0, 170, 0)"
	}else if (star < 2700) {
		c1 = "rgb(170, 0, 0)"
		c2 = "rgb(255, 85, 85)"
		c3 = "rgb(255, 85, 85)"
		c4 = "rgb(255, 85, 255)"
		c5 = "rgb(255, 85, 255)"
	}else if (star < 2800) {
		c1 = "rgb(255, 255, 85)"
		c2 = "rgb(239, 239, 239)"
		c3 = "rgb(239, 239, 239)"
		c4 = "rgb(85, 85, 85)"
		c5 = "rgb(85, 85, 85)"
	}else if (star < 2900) {
		c1 = "rgb(85, 255, 85)"
		c2 = "rgb(0, 170, 0)"
		c3 = "rgb(0, 170, 0)"
		c4 = "rgb(255, 170, 0)"
		c5 = "rgb(255, 170, 0)"
	}else if (star < 3000) {
		c1 = "rgb(85, 255, 255)"
		c2 = "rgb(0, 170, 170)"
		c3 = "rgb(0, 170, 170)"
		c4 = "rgb(85, 85, 255)"
		c5 = "rgb(85, 85, 255)"
	}else if (star < 3100) {
		c1 = "rgb(255, 255, 85)"
		c2 = "rgb(255, 170, 0)"
		c3 = "rgb(255, 170, 0)"
		c4 = "rgb(255, 85, 85)"
		c5 = "rgb(255, 85, 85)"
	}
	

	icon.style.color = c5
	let strStar = star.toString()
	let div = document.createElement("div")
	let n1 = document.createElement("span")
	n1.textContent = strStar[0]
	n1.style.color = c1
	div.appendChild(n1)
	let n2 = document.createElement("span")
	n2.textContent = strStar[1]
	n2.style.color = c2
	div.appendChild(n2)
	let n3 = document.createElement("span")
	n3.textContent = strStar[2]
	n3.style.color = c3
	div.appendChild(n3)
	n4 = document.createElement("span")
	n4.textContent = strStar[3]
	n4.style.color = c4
	div.appendChild(n4)
	div.appendChild(icon)
	console.log("dumb")
	return div

}