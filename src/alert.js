
function showAlert(text, type){
	alertText = document.getElementById("alertText")
	alertText.textContent = text;
	alert = document.getElementById("alert")
	icon = document.getElementById("icon")
	alert.classList.remove("hidden");
	if (type == "positive"){
		console.log("pos")
		alert.classList.add("positive")
		icon.classList.add("fa-check")
	}
	if (type == "negative"){
		alert.classList.add("negative")
		icon.classList.add("fa-exclamation-circle")
	}
	alert.classList.add("show");
	setTimeout(function () {
        alert.className = "alert";
        alert.classList.add("hidden")
        icon.className = "fa"
    }, 5000);
}


function removeAlert(){
	alert = document.getElementById("alert")
	icon = document.getElementById("icon")
	alert.className = "alert";
	alert.classList.add("hidden")
	icon.className = "fa"
}