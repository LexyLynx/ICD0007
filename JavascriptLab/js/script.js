var ul = document.getElementById("navibar");
var a = ul.getElementsByTagName("li");

for (var i = 0; i < a.length; i++) {
	var li = a[i];
	li.addEventListener("mouseover", function() {
   		this.getElementsByTagName("a")[0].style.backgroundColor = "#FFFFFF";
    	this.getElementsByTagName("a")[0].style.color = "#000000";
	});
	li.addEventListener("mouseout", function() {
		this.getElementsByTagName("a")[0].style.backgroundColor = "#383e4c";
    	this.getElementsByTagName("a")[0].style.color = "#FFFFFF";
	});

}

function display() {
	var name = document.getElementById("name");
	var mail = document.getElementById("mail");
	var subject = document.getElementById("subject");
	var comment = document.getElementById("comment");

	var array = [name, mail, subject, comment];
	var val = [];

	for (var i = 0; i < array.length; i++) {
		var input = array[i];
		if (input.value === "") {
			val.push(" " + input.getAttribute("id"));
		} 
	}
	if (name.value && mail.value && subject.value && comment.value) {
		alert("Name: " + name.value + "   Mail: " + mail.value + "   Subject: " + subject.value + "   Comment: " + comment.value);
	} else {
		alert(val.toString() + " field is empty!");
	}
	
}

function change() {
	document.getElementById("greenButton").innerHTML = "Some Other Text";
	document.getElementById("greenButton").style.backgroundColor = "#1E90FF";
}

function myPage() {
	window.open("https://github.com/LisandraNoor", "_blank");
}
