$(document).ready(function(){
		//setInterval() 方法会不停地调用函数,直到 clearInterval() 被调用或窗口被关闭
	setInterval(function () {
	var now = new Date();
	var h = now.getHours();
	var m = now.getMinutes();
	var s = now.getSeconds();
	var hdeg = (h/12)*360+(m/60/12)*360+(s/3600/12)*360;
	var mdeg = (m/60)*360+(s/3600)*360;
	var sdeg = (s/60)*360;
	$("#clock-hour").css("transform","rotate("+hdeg+"deg)");
	$("#clock-hour").css("-webkit-transform","rotate("+hdeg+"deg)");
    $("#clock-hour").css("-moz-transform","rotate("+hdeg+"deg)");
	
	$("#clock-minute").css("transform","rotate("+mdeg+"deg)");
	$("#clock-minute").css("-webkit-transform","rotate("+mdeg+"deg)");
	$("#clock-minute").css("-moz-transform","rotate("+mdeg+"deg)");
	
	$("#clock-second").css("transform","rotate("+sdeg+"deg)");
	$("#clock-second").css("-webkit-transform","rotate("+sdeg+"deg)");
	$("#clock-second").css("-moz-transform","rotate("+sdeg+"deg)");
	
  },1000);

});
	