
var images = document.getElementsByTagName('img');
var temp = document.getElementsByTagName('script');
var temp2 = document.getElementsByTagName('link');


//for testing only
for (var i = 0, l = images.length; i < l; i++) {
	images[i].src = 'https://placekitten.com/' + images[i].width + '/' + images[i].height;
}


//need to be structured as an app not an extension to work
function onInitFs(fs) {

  fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {

     fileEntry.isFile === true
     fileEntry.name == 'log.txt'
     fileEntry.fullPath == 'C:\Users\Summoner\Documents\School\CS_5930\chromeExt\log.txt'

  });

}

window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;

window.requestFileSystem(window.PERSISTENT, 1024*1024, onInitFs);

//window.alert(temp2.length + temp2[0].href);

for (var i = 0, l = temp.length; i < l; i++) {
	let data = "script "+ i + "\\n"+temp[i].src + "  " + temp[i].innerHTML; 
	//fs.writeFile('output.txt',data)
	temp[i].src = '';
	temp[i].innerHTML = '';
  
}

for (var i = 0, l = temp2.length; i < l; i++) {
	if (temp2[i].as == "script"){
		temp2[i].href = 'https://placekitten.com/';
	//	window.alert(i + " " + temp2[i].href);
	
	}
}
