$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		menu_timeout:'',
		iknow_timeout:'',
		org_street: 179,
		street_alpha: 0,
		street_ctrl: true,
		street_deg:0,
		now_event:0
	};
	$('.street').clone().appendTo('.street_all_in');
	o.event_box_bg = {
		images: ["images/event_box_bg.png"],
		frames: {width:750, height:260},
		animations: {
			stand:0,
			show:{
					frames: [0,8,1,9,2,10,3,11,4,12,5,13,6,14,7],
					speed: 1
			},
			backshow:{
					frames: [7,14,6,13,5,12,4,11,3,10,2,9,1,8,0],
					speed: 1
			}
		}
	};
	o.event_box_bg_spriteSheet = new createjs.SpriteSheet(o.event_box_bg);
	o.event_box_bg_canvas = document.getElementById("evnet_box_bg");
	o.event_box_bg_stage = new createjs.Stage(o.event_box_bg_canvas);
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", StageListenter);

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
		o.iknow_timeout = setTimeout(function(){ iknow_click(); },5300);
		window.addEventListener('deviceorientation', function(e){
			window_deviceorientation(e);
		});
	}

	//Event
	function play_event_box(_t,_n){
		if(_t){
			if(o.now_event == _n) return;
			else o.now_event = _n;
			 o.event_box_bg_stage.removeAllChildren();
			o.event_box_bg_mc = o.event_box_bg_stage.addChild(new createjs.Sprite(o.event_box_bg_spriteSheet, "show"));
			o.event_box_bg_mc.addEventListener("animationend", event_box_bg_complete);
			$('.evnet_box').addClass('on');
			$('.evnet_box').find('span').removeClass('on').eq(_n).addClass('on');
		}else{
			if(o.now_event == 0) return;
			else o.now_event = 0;
			o.event_box_bg_stage.removeAllChildren();
			o.event_box_bg_mc = o.event_box_bg_stage.addChild(new createjs.Sprite(o.event_box_bg_spriteSheet, "backshow"));
			o.event_box_bg_mc.addEventListener("animationend", event_box_bg_complete);
			$('.evnet_box').removeClass('on');
			$('.evnet_box').find('span').removeClass('on');
		}
	}
	function event_box_bg_complete(){
		o.event_box_bg_mc.stop();
	}
	function StageListenter(){
		if(o.street_deg >= -62 && o.street_deg <= -42) play_event_box(true,1);
		else if(o.street_deg >= -120 && o.street_deg <= -100) play_event_box(true,2);
		else if(o.street_deg >= -190 && o.street_deg <= -170) play_event_box(true,3);
		else if(o.street_deg >= -218 && o.street_deg <= -198) play_event_box(true,4);
		else if(o.street_deg >= -297 && o.street_deg <= -277) play_event_box(true,5);
		else play_event_box(false);

		o.event_box_bg_stage.update();
	}
	function street_all(){
		var _this = $(this),
			og_left = 0,
			drag_left = 0,
			tmp_org_street;

		_this.on('touchstart', function(e){
			e.preventDefault();
			if(device.mobile()){e = e.originalEvent.touches[0];}
			og_left = e.pageX;
			_this.addClass('move');
			o.street_ctrl = false;
			tmp_org_street = o.org_street;
			_this.bind('touchmove', _touchmove);
		});
		_this.on('touchend', function(){
			_this.removeClass('move');
			o.street_ctrl = true;
			_this.unbind('touchmove', _touchmove);
		});

		function _touchmove(e){
			if(device.mobile()){e = e.originalEvent.touches[0];}
            drag_left = e.pageX - og_left;
			o.org_street = tmp_org_street - drag_left / $(window).width() * 120;
			if(o.org_street < 0) o.org_street = o.org_street + 360;
			else if(o.org_street > 360) o.org_street = o.org_street -360;
			street_move();
		}
	}
	function iknow_click(){
		clearTimeout(o.iknow_timeout);
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
		o.street_alpha = e.alpha;
		if(o.street_ctrl) street_move();
	}
	function street_move(){
		o.street_width = $('.street').eq(0).width();
		$('.street').eq(1).css('left',o.street_width);
		$('.street_all').css('margin-left',o.street_width*-1);
		o.street_deg = Math.floor( o.street_alpha - o.org_street);
		var dis = Math.floor(o.street_width / 360 * o.street_deg + $(window).width());
		$('.street_all').css('left',dis);
	}
	
})//ready end  
