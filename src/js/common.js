$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		menu_timeout:'',
		org_street: 179,
		alpha: 0,
		street_alpha: 0,
		street_ctrl: true
	};
	$('.street').clone().appendTo('.street_all');

	//AddListener
	$('.street_all').each(street_all);
	$('.iknow_btn').on('click',iknow_click);
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
	function street_all(){
		var _this = $(this),
			og_left = 0,
			drag_left = 0,
			tmp_org_street;

		_this.on('touchstart', function(e){
			e.preventDefault();
			if(device.mobile()){e = e.originalEvent.touches[0];}
			tmp_org_street = o.org_street;
            og_left = e.pageX;
			o.street_ctrl = false;
			_this.bind('touchmove', _touchmove);
		});
		_this.on('touchend', function(){
			o.street_ctrl = true;
			_this.unbind('touchmove', _touchmove);
		});

		function _touchmove(e){
			if(device.mobile()){e = e.originalEvent.touches[0];}
            drag_left = e.pageX - og_left;
			o.org_street = tmp_org_street - drag_left / $(window).width() * 120;
			if(device.mobile()){
				if(o.org_street < 0) o.org_street = o.org_street + 360;
				else if(o.org_street > 360) o.org_street = o.org_street -360;
			}else{
				if(o.org_street < -180) o.org_street= o.org_street + 360;
				else if(o.org_street > 180) o.org_street = o.org_street -360;
			}
			street_move();
		}
	}
	function iknow_click(){
		$('.tip_box').fadeOut();
	}
	function menubtn_click(){
		if($(this).hasClass('on')){
			$('.menuDom').removeClass('on');
			$('.menu').addClass('off').removeClass('on');
			o.menu_timeout = setTimeout(function() {
				o.street_ctrl = true;
				$('.menu').removeClass('off');
			}, 1000);
		}
		else{
			o.street_ctrl = false;
			$('.menuDom').addClass('on');
			clearTimeout(o.menu_timeout);
			$('.menu').removeClass('off').addClass('on');
		}
	}
	function window_deviceorientation(e) {
		if(o.alpha == 0) o.street_alpha = e.alpha;
		else o.street_alpha = e.alpha - o.alpha;
		if(o.street_ctrl) street_move();
	}
	function street_move(){
		var dis = Math.floor(o.street_width / 360 * Math.floor( o.street_alpha - o.org_street) + $(window).width());
		$('.street_all').css('left',dis);
	}
	
})//ready end  
