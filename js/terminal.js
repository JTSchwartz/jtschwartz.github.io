$(function () {
	setInterval(terminalWrite, 625);
	setInterval(cursorDisplay, 425);
});

var terminal = document.getElementById("terminal");
var i = 0;
var j = 0;
var cDisp = true;
var arr = ["Looking for an Internship!"];
// var arr = ["Java", "Kotlin", "Python", "Go", "R", "HTML", "CSS", "JavaScript", "SQL", "Linux", "Windows", "macOS"];

function terminalWrite() {
	var str = $("#terminal").text();

	if (j >= arr.length) {
		j = 0;
	}

	if (i >= 0 && i < arr[j].length) {
		$("#terminal").append(arr[j].charAt(i));
		i++;
	} else if (i < arr[j].length + 3 && i > 0) {
		i++;
	} else if (i >= arr[j].length + 3) {
		str = str.substr(0, str.length - 1);
		$("#terminal").text(str);
		i--;
		i *= -1;
	} else if (i < 0) {
		str = str.substr(0, str.length - 1);
		$("#terminal").text(str);
		i++;
	}

	$("#cursor").css("display", "inline");

	if (i == 0) {
		j++;
	}
}

function cursorDisplay() {
	if (cDisp) {
		$("#cursor").css("display", "none");
	} else {
		$("#cursor").css("display", "inline");
	}

	cDisp = !cDisp;
}