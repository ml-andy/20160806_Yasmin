$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		menu_timeout:''
	};


	//AddListener
	$('.menubtn').click(menubtn_click);
	$(window).load(window_load);
	function window_load(){
		o.loading.fadeOut();
		o.street_width = $('.street').eq(0).width();
		$('.street').eq(1).css('left',o.street_width);
		$('.street_all').css('margin-left',o.street_width*-1);
		window.addEventListener('deviceorientation', function(e){
			window_deviceorientation(e);
		});
	}


	//Event
	function menubtn_click(){
		if($(this).hasClass('on')){
			$('.menuDom').removeClass('on');
			$('.menu').addClass('off').removeClass('on');
			o.menu_timeout = setTimeout(function() {
				$('.menu').removeClass('off');
			}, 1000);
		}
		else{
			$('.menuDom').addClass('on');
			clearTimeout(o.menu_timeout);
			$('.menu').removeClass('off').addClass('on');
		}
	}
	function window_deviceorientation(e) {
		var dis = Math.floor(o.street_width / 360 * Math.floor(e.alpha - 180)) * -1;
		$('.street_all').css('left',dis);
	}
	
	
})//ready end  
