// JavaScript Document
var currSong="";
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap beep
		
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(1000);
		});//tap vibrar
		
		$('#pbeep').tap(function(){
			 document.getElementById(currSong).pause();
		});//tap beep
		
		
		
	},false);//deviceready
});//ready
	