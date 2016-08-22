$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		loading_num: 0,
		menu_timeout:'',
		iknow_timeout:'',
		org_street: 179,
		street_alpha: 0,
		street_ctrl: true,
		street_deg:0,
		now_event:0
	};
	$('.street').clone().appendTo('.street_all_in');

	

	//AddListener
	$('.event_point').click(event_point_click);
	$('.event_popup .closebtn').click(function(){ show_pop(false); })
	$('.event_popup_1_videobtn').click( playvideo );
	$('.street_all').each(street_all);
	$('.iknow_btn').on('click',iknow_click);
	$('.menubtn').click(menubtn_click);
	$(window).load(window_load);
	function window_load(){
		o.street_width = $('.street').eq(0).width();
		$('.street').eq(1).css('left',o.street_width);
		$('.street_all').css('margin-left',o.street_width*-1);
		o.iknow_timeout = setTimeout(function(){ iknow_click();},5300);
		window.addEventListener('deviceorientation', function(e){
			window_deviceorientation(e);
		});
		o.loading_num +=1;
		creatjs_loading();
		// createjs_event04();
		// creatjs_start();
	}
	function check_loading(){
		if(o.loading_num >=2) o.loading.fadeOut(300,function(){ o.loading.remove(); });
	}
	function creatjs_loading(){
		var canvas, exportRoot;
		canvas = document.getElementById("loading");
		images = images||{};
		ss = ss||{};

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadFile({src:"images/loading_ani_atlas_.json", type:"spritesheet", id:"loading_ani_atlas_"}, true);
		loader.loadManifest(lib2.properties.manifest);
		
		function handleFileLoad(evt) {
			if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
		}

		function handleComplete(evt) {
			var queue = evt.target;
			ss["loading_ani_atlas_"] = queue.getResult("loading_ani_atlas_");
			exportRoot = new lib2.loading_ani();

			o.loading_stage = new createjs.Stage(canvas);
			o.loading_stage.addChild(exportRoot);
			o.loading_stage.update();
			createjs.Ticker.setFPS(30);
			createjs.Ticker.addEventListener("tick", StageListenter);
			// creatjs_start();
			createjs_event04();
		}
	}
	function createjs_event04(){
		var canvas, exportRoot;
		canvas = document.getElementById("loading");
		images = images||{};
		ss = ss||{};

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadFile({src:"images/event04_atlas_.json", type:"spritesheet", id:"event04_atlas_"}, true);
		loader.loadManifest(lib3.properties.manifest);
		
		function handleFileLoad(evt) {
			if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
		}

		function handleComplete(evt) {
			var queue = evt.target;
			ss["event04_atlas_"] = queue.getResult("event04_atlas_");

			o.event_popup_4_stage = new createjs.Stage(document.getElementById("event_popup_4_ani"));
			o.event_popup_4_ani = o.event_popup_4_stage.addChild(new lib3.event04_1());
			o.event_popup_4_ani.setTransform(375,667).gotoAndStop(0);
			o.event_popup_4_stage.update();

			creatjs_start();
		}
	}
	function creatjs_start(){
		//createjs
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
		o.event_box_bg_canvas = document.getElementById("event_box_bg");
		o.event_box_bg_stage = new createjs.Stage(o.event_box_bg_canvas);

		images = images||{};
		ss = ss||{};

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadFile({src:"images/event_popup_atlas_.json", type:"spritesheet", id:"event_popup_atlas_"}, true);
		loader.loadManifest(lib.properties.manifest);
		
		function handleFileLoad(evt) {
			if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
		}

		function handleComplete(evt) {
			var queue = evt.target;
			ss["event_popup_atlas_"] = queue.getResult("event_popup_atlas_");

			// o.loading_stage = new createjs.Stage(document.getElementById("loading"));
			// o.loading_ani = o.loading_stage.addChild(new lib.loading());
			// o.loading_ani.setTransform(375,667).gotoAndStop(0);
			// o.loading_stage.update();

			o.event_popup_2_stage = new createjs.Stage(document.getElementById("event_popup_2_ani"));
			o.event_popup_2_ani = o.event_popup_2_stage.addChild(new lib.event02());
			o.event_popup_2_ani.setTransform(375,667).gotoAndStop(0);
			o.event_popup_2_stage.update();

			o.event_popup_3_stage = new createjs.Stage(document.getElementById("event_popup_3_ani"));
			o.event_popup_3_ani = o.event_popup_3_stage.addChild(new lib.event01());
			o.event_popup_3_ani.setTransform(45,180).gotoAndStop(0);
			o.event_popup_3_ani2 = o.event_popup_3_stage.addChild(new lib.talk_box01());
			o.event_popup_3_ani2.setTransform(45,850).gotoAndStop(0);
			o.event_popup_3_stage.update();

			// o.event_popup_4_stage = new createjs.Stage(document.getElementById("event_popup_4_ani"));
			// o.event_popup_4_ani = o.event_popup_4_stage.addChild(new lib.event04());
			// o.event_popup_4_ani.setTransform(375,667).gotoAndStop(0);
			// o.event_popup_4_stage.update();

			o.loading_num+=1;
			check_loading();
		}
	}

	//Event
	function StageListenter(){
		if(o.street_deg >= -62 && o.street_deg <= -42) play_event_box(true,1);
		else if(o.street_deg >= -120 && o.street_deg <= -100) play_event_box(true,2);
		else if(o.street_deg >= -180 && o.street_deg <= -170) play_event_box(true,3);
		else if(o.street_deg >= 170 && o.street_deg <= 180) play_event_box(true,3);
		else if(o.street_deg >= -218 && o.street_deg <= -198) play_event_box(true,4);
		else if(o.street_deg >= 140 && o.street_deg <= 160) play_event_box(true,4);
		else if(o.street_deg >= -297 && o.street_deg <= -277) play_event_box(true,5);
		else if(o.street_deg >= 60 && o.street_deg <= 80) play_event_box(true,5);
		else play_event_box(false);

		if(o.event_box_bg_stage) o.event_box_bg_stage.update();
		if(o.loading_stage) o.loading_stage.update();
		if(o.event_popup_2_stage) o.event_popup_2_stage.update();
		if(o.event_popup_3_stage) o.event_popup_3_stage.update();
		if(o.event_popup_4_stage) o.event_popup_4_stage.update();
	}
	function playvideo(){
		$('.event_popup_1_videobtn').fadeOut();
		$('#event_popup_1_video')[0].play();
	}
	function show_pop(_t){
		if(_t){
			$('.event_popup .popup').eq(o.now_event - 1).show();
			$('.event_popup').fadeIn(300,event_popup_start);
			function event_popup_start(){ 
				$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
				popup_ani_play(true);
			}
		}else $('.event_popup').fadeOut(300,function(){
												$('.event_popup .popup').hide();
												o.street_ctrl = true; 
											});
	}
	function popup_ani_play(_t){
		if(_t){
			if(o.now_event == 3) o.event_popup_2_ani.play();
			else if(o.now_event == 2){
				o.event_popup_3_ani.play();
				o.event_popup_3_ani2.play();
			}
			else if(o.now_event == 4) o.event_popup_4_ani.play();
		}else{
			if(o.now_event == 2) o.event_popup_2_ani.gotoAndStop(0);
			else if(o.now_event == 3){
				o.event_popup_3_ani.gotoAndStop(0);
				o.event_popup_3_ani2.gotoAndStop(0);
			}
			else if(o.now_event == 4) o.event_popup_4_ani.gotoAndStop(0);
		}
	}
	function event_point_click(){
		o.street_ctrl = false;
		o.now_event = $(this).index() + 1;
		console.log(o.now_event);
		show_pop(true);
	}
	function play_event_box(_t,_n){
		if(_t){
			if(o.now_event == _n) return;
			else o.now_event = _n;
			if(!o.event_box_bg_stage) return;
			o.event_box_bg_stage.removeAllChildren();
			o.event_box_bg_mc = o.event_box_bg_stage.addChild(new createjs.Sprite(o.event_box_bg_spriteSheet, "show"));
			o.event_box_bg_mc.addEventListener("animationend", event_box_bg_complete);
			$('.event_box').addClass('on');
			$('.event_box').find('span').removeClass('on').eq(_n).addClass('on');
			$('.event_line').find('.icon').removeClass('on').eq( _n - 1).addClass('on');
		}else{
			if(o.now_event == 0) return;
			else o.now_event = 0;
			o.event_box_bg_stage.removeAllChildren();
			o.event_box_bg_mc = o.event_box_bg_stage.addChild(new createjs.Sprite(o.event_box_bg_spriteSheet, "backshow"));
			o.event_box_bg_mc.addEventListener("animationend", event_box_bg_complete);
			$('.event_box').removeClass('on');
			$('.event_box').find('span').removeClass('on');
			$('.event_line').find('.icon').removeClass('on')
		}
	}
	function event_box_bg_complete(){
		o.event_box_bg_mc.stop();
	}
	function street_all(){
		var _this = $(this),
			og_left = 0,
			drag_left = 0,
			tmp_org_street;

		_this.on('touchstart', function(e){
			// e.preventDefault();
			if(device.mobile()){e = e.originalEvent.touches[0];}
			og_left = e.pageX;
			_this.addClass('move');
			o.street_ctrl = false;
			tmp_org_street = o.org_street;
			_this.bind('touchmove', _touchmove);
		});
		_this.on('touchend', function(){
			// e.preventDefault();
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
		// $('.pop').html(o.street_deg);
		var dis = Math.floor(o.street_width / 360 * o.street_deg + $(window).width());
		$('.street_all').css('left',dis);
	}
	
})//ready end  
