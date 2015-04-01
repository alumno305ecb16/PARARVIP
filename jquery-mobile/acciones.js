// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){
			navigator.notification.beep(1);
		});//tap beep
		
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(1000);
		});//tap vibrar
		
		$('#pbeep').tap(function(){
			navigator.notification.beep(0);
		});//tap beep
		
		$('#pvibrar').tap(function(){
			navigator.notification.vibrate(0);
		});//tap vibrar
		
		
	},false);//deviceready
});//ready
	