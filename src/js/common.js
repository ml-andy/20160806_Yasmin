$(document).ready(function(){
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
		var dis = o.street_width / 360 * Math.floor(e.alpha) - o.street_width;
		$('.tip_box').html(Math.floor(e.alpha) + 'dis:' + dis);
		$('.street').css('left',dis);
	}
	
	
})//ready end  
