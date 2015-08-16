var img = new Image();
var theHTML = "";
var tempHTML ="";
var div = document.getElementById('body');
var anotherString = "";
var thirdString = "";

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://xkcd.com/", true);
xmlhttp.send(null);
var truth = true;
setTimeout(function(){
	theHTML = xmlhttp.responseText;
	var lines = theHTML.split('\n');
	for (var i = lines.length - 1; i >= 0; i--) {
		if(lines[i].indexOf("title=") > -1 && truth)
		{
			tempHTML = lines[i];
			var moreLines = tempHTML.split("\"");
			truth = false;
			for (var j = 0; j <= moreLines.length - 1; j++) {
				if(moreLines[j].indexOf("src") > -1)
				{
					thirdString = moreLines[j+1];
					img.src = thirdString;
					img_home.appendChild(img);
				}
				if(moreLines[j].indexOf("title") > -1)
				{
					anotherString = moreLines[j+1];
					if(anotherString.indexOf("&quot") > -1)
					{
						anotherString = anotherString.replace("&quot;", "\"");
						var dammit = anotherString.split("&quot;");
						anotherString = "";
						for(var k = 0; k < dammit.length-1; k++)
						{
							dammit[k] = dammit[k] + "\"";
							anotherString = anotherString + dammit[k]
						}
					}
					if(anotherString.indexOf("&#39;") > -1)
					{
						anotherString = anotherString.replace("&#39;", "\'");
						var dammit = anotherString.split("&#39;");
						anotherString = "";
						for(var k = 0; k < dammit.length-1; k++)
						{
							dammit[k] = dammit[k] + "\'";
							anotherString = anotherString + dammit[k]
						}
					}
					var x = document.createElement("P");
					var t = document.createTextNode(anotherString);
					x.appendChild(t);                           
					document.body.appendChild(x);

					var dic = document.getElementById('download');
					dic.innerHTML =  dic.innerHTML + "<a href=\"" + thirdString + "\" download=\"\" title=\"Download today's XKCD\"><img src=\"download.png\" alt=\"ImageName\"></a>";
				}
				
			};

		}
	};
}, 750);