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
			navigator.notification.beep(2);
		});//tap beep
		
		$('#p1beep').tap(function(){
			navigator.notification.beep(3);
		});//tap beep
		
		
	},false);//deviceready
});//ready
	