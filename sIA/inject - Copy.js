// VARIABLES----------------------------------------------------------------
var assets = ["/media/jhon.webm", "/media/jhon2.webm"]




//-----------------------------------------------------

var videoEl = document.querySelector('.shia-do-it .shia-do-it--container video');
if (videoEl == null) {
	var videoCount = 0;
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'shia-do-it';
	div.style.cssText = ('position: fixed; bottom: 100px; z-index: 99999; right: 800px; height: 530px; width: 720px; pointer-events: none;');
	div.innerHTML = '<div class="shia-do-it--container" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="960" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
}
var video = document.querySelector('.shia-do-it .shia-do-it--container video');
video.style.opacity = "0";
video.style.cssText = ('transition: opacity 200ms;');
video.src = chrome.extension.getURL(assets[videoCount]);

//------------------------------------------------------------------------------------
var videoEl2 = document.querySelector('.shia-do-it2 .shia-do-it--container2 video');
if (videoEl2 == null) {
	var videoCount = 0;
	var div2 = document.createElement('div2');
	document.body.appendChild(div2);
	div2.className = 'shia-do-it2';
	div2.style.cssText = ('position: fixed; bottom: 100px; z-index: 99999; right: 50px; height: 530px; width: 720px; pointer-events: none;');
	div2.innerHTML = '<div class="shia-do-it--container2" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="960" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
}
var video2 = document.querySelector('.shia-do-it2 .shia-do-it--container2 video');
video2.style.opacity = "0";
video2.style.cssText = ('transition: opacity 200ms;');
video2.src = chrome.extension.getURL(assets[videoCount]);
//------------------------------------------------------------------------------------

if(videoCount < 1) {
	videoCount ++;
} else {
	videoCount = 0;
}

	reproductor(video, video2)



//FUNCTION TO REPRODUCE THE VIDEOS----------------------------------------------------------------------------------

function reproductor(video, video2){
	video.load();
	video2.load();
	video.addEventListener('loadeddata', function() {
		video.currentTime = 0;
		video.style.opacity = "1";
	video.play(); })

		video2.addEventListener('loadeddata', function() {
		video2.currentTime = 0;
		video2.style.opacity = "1";
	video2.play(); 
	})


	video.onended = function() {
		video.currentTime = 0;
		//video.play(); 
		video.style.opacity = "0";
	};
	video2.onended = function() {
		video2.currentTime = 0;
		//video2.play(); 
		video2.style.opacity = "0";
	};
	video.onerror = function() {
		alert("Chrome blocks Shia on this page:( Try on another one!");
	};
}
//---------------------------------------------------------------------------------------------