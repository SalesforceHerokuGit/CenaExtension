// VARIABLES----------------------------------------------------------------
var assets = ["/media/jhon.webm", "/media/jhon2.webm"]




//cena abajo izquierda-----------------------------------------------------------------------------
var videoEl = document.querySelector('.shia-do-it .shia-do-it--container video');
if (videoEl == null) {
	var videoCount = 0;
	var div = document.createElement('div');
	document.body.appendChild(div);
	div.className = 'shia-do-it';
	div.style.cssText = ('position: fixed; bottom: -100px; z-index: 99999; right: 600px; height: 530px; width: 720px; pointer-events: none;');
	div.innerHTML = '<div class="shia-do-it--container" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="650" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
}
var video = document.querySelector('.shia-do-it .shia-do-it--container video');
video.style.opacity = "0";
video.style.cssText = ('transition: opacity 200ms;');
video.src = chrome.extension.getURL(assets[0]);

//cena abajo derecha--------------------------------------------------------------------------------
var videoEl2 = document.querySelector('.shia-do-it2 .shia-do-it--container2 video');
if (videoEl2 == null) {
	var videoCount = 0;
	var div2 = document.createElement('div2');
	document.body.appendChild(div2);
	div2.className = 'shia-do-it2';
	div2.style.cssText = ('position: fixed; bottom: -100px; z-index: 99999; right: -20px; height: 530px; width: 720px; pointer-events: none;');
	div2.innerHTML = '<div class="shia-do-it--container2" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="650" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
}
var video2 = document.querySelector('.shia-do-it2 .shia-do-it--container2 video');
video2.style.opacity = "0";
video2.style.cssText = ('transition: opacity 200ms;');
video2.src = chrome.extension.getURL(assets[0]);
//cena arriba izquierda--------------------------------------------------------------------------------
var videoEl3 = document.querySelector('.shia-do-it3 .shia-do-it--container3 video');
if (videoEl3 == null) {
	var videoCount = 0;
	var div3 = document.createElement('div3');
	document.body.appendChild(div3);
	div3.className = 'shia-do-it3';
	div3.style.cssText = ('position: fixed; bottom: 200px; z-index: 99999; right: 600px; height: 530px; width: 720px; pointer-events: none;');
	div3.innerHTML = '<div class="shia-do-it--container3" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="650" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
}
var video3 = document.querySelector('.shia-do-it3 .shia-do-it--container3 video');
video3.style.opacity = "0";
video3.style.cssText = ('transition: opacity 200ms;');
video3.src = chrome.extension.getURL(assets[0]);
//cena arriba derecha----------------------------------------------------------------------------------------
var videoEl4 = document.querySelector('.shia-do-it4 .shia-do-it--container4 video');
if (videoEl4 == null) {
	var videoCount = 0;
	var div4 = document.createElement('div4');
	document.body.appendChild(div4);
	div4.className = 'shia-do-it4';
	div4.style.cssText = ('position: fixed; bottom: 200px; z-index: 99999; right: -20px; height: 530px; width: 720px; pointer-events: none;');
	div4.innerHTML = '<div class="shia-do-it--container4" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="650" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
}
var video4 = document.querySelector('.shia-do-it4 .shia-do-it--container4 video');
video4.style.opacity = "0";
video4.style.cssText = ('transition: opacity 200ms;');
video4.src = chrome.extension.getURL(assets[0]);
//------------------------------------------------------------------------------------
// cena spitting right
var videoEl6 = document.querySelector('.shia-do-it6 .shia-do-it--container6 video');
if (videoEl6 == null) {
	var videoCount = 0;
	var div6 = document.createElement('div6');
	document.body.appendChild(div6);
	div6.className = 'shia-do-it6';
	div6.style.cssText = ('position: fixed; bottom: 50px; z-index: 99999; right: -20px; height: 530px; width: 720px; pointer-events: none;');
	div6.innerHTML = '<div class="shia-do-it--container6" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="650" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
}
var video6 = document.querySelector('.shia-do-it6 .shia-do-it--container6 video');
video6.style.opacity = "0";
video6.style.cssText = ('transition: opacity 200ms;');
video6.src = chrome.extension.getURL(assets[1]);
//cena spitting left
var videoEl7 = document.querySelector('.shia-do-it7 .shia-do-it--container7 video');
if (videoEl7 == null) {
	var videoCount = 0;
	var div7 = document.createElement('div7');
	document.body.appendChild(div7);
	div7.className = 'shia-do-it7';
	div7.style.cssText = ('position: fixed; bottom: 50px; z-index: 99999; right: 600px; height: 530px; width: 720px; pointer-events: none;');
	div7.innerHTML = '<div class="shia-do-it--container7" style="width: 720px; overflow:hidden; display:block; height: 535px;"><video width="650" height="540" style="margin-top: -5px; max-width: none; padding: 0;" name="media"><source type="video/webm"></video></div>';
}
var video7 = document.querySelector('.shia-do-it7 .shia-do-it--container7 video');
video7.style.opacity = "0";
video7.style.cssText = ('transition: opacity 200ms;');
video7.src = chrome.extension.getURL(assets[1]);
//------------------------------------------------------------------------------------



reproductor(video, video2,video3,video4,video6,video7)



//FUNCTION TO REPRODUCE THE VIDEOS----------------------------------------------------------------------------------

function reproductor(video, video2,video3,video4,video6,video7){

	video6.style.opacity = "0";
	video7.style.opacity = "0";

	video.load();
	video2.load();
	video3.load();
	video4.load();

	video.addEventListener('loadeddata', function() {
		video.currentTime = 0;
		video.style.opacity = "1";
		video.play();

		video2.currentTime = 0;
		video2.style.opacity = "1";
		video2.play(); 

		
		video3.currentTime = 0;
		video3.style.opacity = "1";
		video3.play();

	
		video4.currentTime = 0;
		video4.style.opacity = "1";
		video4.play();	 })				

	var i = 0;
	var x = 0;
	var y = 0;
	var z = 0;
	var v = 0;
	var w = 0;
	var times=0;
	var cadena=0;

	video.onended = function() {		
		if (i < times){
			i++;
			video.play(); 
		}else{ 
			video.style.opacity = "0";
			video2.style.opacity = "0";
			video3.style.opacity = "0";
			video4.style.opacity = "0";

			video6.load();
			video7.load();
	
			video6.currentTime = 0;
			video6.style.opacity = "1";
			video6.play()

			video7.currentTime = 0;
			video7.style.opacity = "1";
			video7.play()
	
		}
	};
	video7.onended = function() {
		video7.currentTime = 0;
		video6.currentTime = 0;
		video6.style.opacity = "0";
		video7.style.opacity = "0";
	};

	video.onerror = function() {
		alert("Chrome blocks Shia on this page:( Try on another one!");
	};
}
//---------------------------------------------------------------------------------------------