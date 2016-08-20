$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		street_width: $('.street').width()
	};
	$('.street').eq(1).css('left',o.street_width);
	$('.street_all').css('margin-left',o.street_width*-1);


	//AddListener
	$(window).load(window_load);
	function window_load(){
		o.loading.fadeOut();
		o.street_width = $('.street').eq(0).width();
		window.addEventListener('deviceorientation', function(e){
			window_deviceorientation(e);
		});
	}
	


	//Event
	function window_deviceorientation(e) {
		var dis = Math.floor(o.street_width / 360 * Math.floor(e.alpha - 180)) * -1;
		$('.tip_box').html(Math.floor(e.alpha - 180) + 'dis6:' + dis);
		$('.street_all').css('left',dis);
	}
	
	
})//ready end  
