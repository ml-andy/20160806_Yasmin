$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading')
	};

	//AddListener
	$(window).load(window_load);
	function window_load(){
		o.loading.fadeOut();
	}
	window.addEventListener('deviceorientation', window_deviceorientation);


	//Event
	function window_deviceorientation(e) {
		$('.tip_box').html(e.alpha);

		// $('.street').css('left',)
	}
	
	
})//ready end  
