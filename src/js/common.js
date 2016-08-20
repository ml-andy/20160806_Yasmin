﻿$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		street_width: $('.street').width()
	};
	console.log(o.street_width);

	//AddListener
	$(window).load(window_load);
	function window_load(){
		o.loading.fadeOut();
	}
	window.addEventListener('deviceorientation', window_deviceorientation);


	//Event
	function window_deviceorientation(e) {
		$('.tip_box').html(Math.Round(e.alpha));
		var dis = o.street_width / 360 * Math.Round(e.alpha) * -1;
		$('.street').css('left',dis);
	}
	
	
})//ready end  
