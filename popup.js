var theImg = new Image();
var xmlhttp = new XMLHttpRequest();
var url = "http://xkcd.com/info.0.json";
xmlhttp.open("GET", url, false);
var theJSON;
xmlhttp.addEventListener("load", function(e) {
	theJSON = JSON.parse(xmlhttp.responseText);
}, false)


xmlhttp.send(null);
theTitle.innerHTML = theJSON.safe_title;
theImg.src = theJSON.img;
img_home.appendChild(theImg);
text.innerHTML = theJSON.alt;
download.innerHTML = "<a href=\"" + theJSON.img + "\" download=\"\" title=\"Download today's XKCD\"><img src=\"download.png\" alt=\"ImageName\"></a>";