$(document).ready(function(){
	track_pg('Loading','正在載入');
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		frist:true,
		dis: 0,
		dis_tmp:0,
		loading_num: 0,
		menu_timeout:'',
		event_box_timeout:'',
		iknow_timeout:'',
		iknow_click:false,
		event_box_bg_stage_play: false,
		org_street: 110,
		street_alpha: 0,
		street_ctrl: true,
		street_deg:0,
		now_event:0,
		tip_box_stage_play: false,
		event_popup_2_stage_play: false,
		event_popup_3_stage_play: false,
		event_popup_4_stage_play: false,
		has_auto_play_pop:[]
	};
	$('.street').clone().appendTo('.street_all_in');
	creatjs_loading();
	

	//AddListener
	$('#event_popup_4_ani').on('click',event_popup_4_ani_click);
	$('#event_popup_3_ani').on('click',event_popup_3_ani_click);
	$('.event_line .icon').on('click',event_line_icon_click);
	$('.menu_link').on('click',menu_link_click);
	$('.gotobuy_btn').click(function(){
		window.open('http://www.ehaoyao.com/product-15527.html','blank');
	});
	$('.getsecret_btn').click(function(){
		popup_ani_play(false);
		$('.event_popup .popup').hide();
		o.now_event = 4;
		popup_ani_play(true);
		$('.event_popup .popup').eq(o.now_event - 1).fadeIn(300,function(){
			$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
		});
	});
	$('.unlock_btn').click(function(){
		popup_ani_play(false);
		$('.event_popup .popup').hide();
		o.now_event = 4;
		popup_ani_play(true);
		$('.event_popup .popup').eq(o.now_event - 1).fadeIn(300,function(){
			$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
		});
	});
	$('.share_btn').click(function(){
		popup_ani_play(false);
		$('.event_popup .popup').hide();
		o.now_event = 5;
		$('.event_popup .popup').eq(o.now_event - 1).fadeIn(300,function(){
			$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
			popup_ani_play(true);
		});
	});
	$('.more_msg_btn').click(function(){
		window.open('http://www.coclife.com','blank');
	});
	$('.sound_btn').click(sound_btn_click);
	$('.event_point').click(event_point_click);
	$('.event_popup .closebtn').click(function(){ show_pop(false); })
	$('.event_popup_1_videobtn').click( playvideo );
	$('.street_all').each(street_all);
	$('.iknow_btn').on('click',iknow_click);
	$('.menubtn').click(menubtn_click);
	$(window).load(window_load);
	function window_load(){
		o.street_width = $('.street_all_in').width() / 2;
		o.loading_num +=1;
		creatjs_tip_box();
	}
	function check_loading(){
		if(o.loading_num >=2){
			setTimeout(function(){
				window.addEventListener('deviceorientation', function(e){
					window_deviceorientation(e);
				});
				street_move();
				o.tip_box_stage_play = true;
				o.iknow_timeout = setTimeout(function(){ iknow_click(false);},5300);
				o.loading.fadeOut(300,function(){ o.loading.remove(); o.loading_stage = false;});
			},500);
		}
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
		}
	}
	function creatjs_tip_box(){
		images = images||{};
		ss = ss||{};

		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadFile({src:"images/tip_box_ani_atlas_.json", type:"spritesheet", id:"tip_box_ani_atlas_"}, true);
		loader.loadManifest(lib4.properties.manifest);
		
		function handleFileLoad(evt) {
			if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
		}

		function handleComplete(evt) {
			var queue = evt.target;
			ss["tip_box_ani_atlas_"] = queue.getResult("tip_box_ani_atlas_");
			o.tip_box_stage = new createjs.Stage(document.getElementById("tip_box"));
			o.tip_box_stage.addChild(new lib4.tip_box_ani());
			o.tip_box_stage.update();
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
			o.event_popup_4_ani = o.event_popup_4_stage.addChild(new lib3.event04());
			o.event_popup_4_ani.gotoAndStop(0);
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

			o.event_popup_2_stage = new createjs.Stage(document.getElementById("event_popup_2_ani"));
			o.event_popup_2_ani = o.event_popup_2_stage.addChild(new lib.event02());
			o.event_popup_2_ani.setTransform(375,667).gotoAndStop(0);
			o.event_popup_2_stage.update();

			o.event_popup_3_stage = new createjs.Stage(document.getElementById("event_popup_3_ani"));
			o.event_popup_3_ani = o.event_popup_3_stage.addChild(new lib.event01());
			o.event_popup_3_ani.setTransform(45,100).gotoAndStop(0);
			o.event_popup_3_ani2 = o.event_popup_3_stage.addChild(new lib.talk_box01());
			o.event_popup_3_ani2.setTransform(45,770).gotoAndStop(0);
			o.event_popup_3_stage.update();

			o.loading_num+=1;
			check_loading();
		}
	}

	//Event
	function event_popup_4_ani_click(){
		if(o.event_popup_4_ani.currentFrame>33 && o.event_popup_4_ani.currentFrame<154) o.event_popup_4_ani.gotoAndPlay(155);
		else if(o.event_popup_4_ani.currentFrame>184 && o.event_popup_4_ani.currentFrame<328) o.event_popup_4_ani.gotoAndPlay(339);
		else if(o.event_popup_4_ani.currentFrame>339) o.event_popup_4_ani.gotoAndPlay(184);
	}
	function event_popup_3_ani_click(){
		if(o.event_popup_3_ani.currentFrame>20 && o.event_popup_3_ani.currentFrame<119)
		{
			o.event_popup_3_ani.gotoAndPlay(120);
			o.event_popup_3_ani2.gotoAndPlay(120);
		}
		else if(o.event_popup_3_ani.currentFrame>120 && o.event_popup_3_ani.currentFrame<269) 
		{
			o.event_popup_3_ani.gotoAndPlay(270);
			o.event_popup_3_ani2.gotoAndPlay(270);
		}
		else if(o.event_popup_3_ani.currentFrame>270 && o.event_popup_3_ani.currentFrame<385) 
		{
			o.event_popup_3_ani.gotoAndPlay(386);
			o.event_popup_3_ani2.gotoAndPlay(386);
		}
	}
	function event_line_icon_click(){
		var _index = $(this).index();
		if(o.street_alpha>180) o.street_alpha= o.street_alpha-360;

		if(_index == 0) o.org_street = (o.street_alpha - 50) * -1;
		else if(_index == 1) o.org_street = (o.street_alpha - 110) * -1;
		else if(_index == 2) o.org_street = (o.street_alpha - 180) * -1;
		else if(_index == 3) o.org_street = (o.street_alpha - 210) * -1;
		else if(_index == 4) o.org_street = (o.street_alpha - 290) * -1;

		street_move();
	}
	function menu_link_click(){
		var _index = $(this).index();
		if(_index == 0) $('.menubtn').trigger('click');
		else if(_index == 1){
			$('.menubtn').trigger('click');
			o.now_event = 1;
			show_pop(true);
		}
		else if(_index == 2) {
			$('.menubtn').trigger('click');
			o.now_event = 4;
			show_pop(true);
		}
	}
	function StageListenter(){
		if(o.event_box_bg_stage_play) o.event_box_bg_stage.update();
		if(o.loading_stage) o.loading_stage.update();
		if(o.tip_box_stage_play) o.tip_box_stage.update();

		if(o.event_popup_2_stage_play) o.event_popup_2_stage.update();
		if(o.event_popup_3_stage_play) o.event_popup_3_stage.update();
		if(o.event_popup_4_stage_play){
			o.event_popup_4_stage.update();
			if(o.event_popup_4_ani.currentFrame >= 198) event_popup_4_ani_complete();
		}
	}
	function event_popup_4_ani_complete(){
		$('.event4 .btn_box').fadeIn();
	}
	function sound_btn_click(){
		if($('.sound_btn').hasClass('off')){
			$('#bgm')[0].play();
			$('.sound_btn').removeClass('off');
		}else{
			$('#bgm')[0].pause();
			$('.sound_btn').addClass('off');
		}
	}
	function playvideo(_t){
		if(_t){
			$('.event_popup_1_videobtn').fadeOut();
			$('#event_popup_1_video')[0].play();
			$('#bgm')[0].pause();
			$('.sound_btn').addClass('off');
		}else{
			$('.event_popup_1_videobtn').fadeIn();
			$('#event_popup_1_video')[0].pause();
		}
	}
	function show_pop(_t){
		if(_t){
			o.street_ctrl = false;
			popup_ani_play(true);
			$('.menubtn').addClass('off');
			o.has_auto_play_pop.push( o.now_event );
			$('.event_popup .popup').eq(o.now_event - 1).show();
			if(o.now_event == 5) $('.event_popup .closebtn').addClass('on');
			else $('.event_popup .closebtn').removeClass('on');
			$('.event_popup').fadeIn(300,event_popup_start);
			function event_popup_start(){ 
				$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
				// popup_ani_play(true);
			}
		}else{
			popup_ani_play(false);
			$('.event_popup').fadeOut(300,event_popup_end);
			function event_popup_end(){
				$('.event_popup .popup').removeClass('on').hide();
				$('.menubtn').removeClass('off');
				o.street_ctrl = true; 
			}
		}
	}
	function popup_ani_play(_t){
		if(_t){
			if(o.now_event == 3){
				o.event_popup_2_ani.gotoAndPlay(1);
				o.event_popup_2_stage_play = true;
				o.event_popup_3_stage_play = false;
				o.event_popup_4_stage_play = false;
			}
			else if(o.now_event == 2){
				o.event_popup_3_ani.gotoAndPlay(1);
				o.event_popup_3_ani2.gotoAndPlay(1);
				o.event_popup_3_stage_play = true;
				o.event_popup_2_stage_play = false;
				o.event_popup_4_stage_play = false;
			}
			else if(o.now_event == 4){
				o.event_popup_4_ani.gotoAndPlay(1);
				o.event_popup_4_stage_play = true;
				o.event_popup_3_stage_play = false;
				o.event_popup_2_stage_play = false;
			}

			//tracker
			// if(o.now_event==1){
			// 	track_pg('電影院',)
			// }
		}else{
			o.event_popup_2_stage_play = false;
			o.event_popup_3_stage_play = false;
			o.event_popup_4_stage_play = false;
			if(o.now_event == 2){
				o.event_popup_3_ani.gotoAndStop(1);
				o.event_popup_3_ani2.gotoAndStop(1);
			}
			else if(o.now_event == 1){
				playvideo(false);
			}
			else if(o.now_event == 3){
				o.event_popup_2_ani.gotoAndStop(1);
			}
			else if(o.now_event == 4){
				o.event_popup_4_ani.gotoAndStop(1);
				$('.event4 .btn_box').hide();
			}
		}
	}
	function event_point_click(){
		clearTimeout(o.event_box_timeout);
		o.now_event = $(this).index() + 1;
		show_pop(true);
	}
	function play_event_box(_t,_n){
		if(!o.iknow_click) return;
		if(_t){
			if(o.now_event == _n) return;
			else o.now_event = _n;
			if(!o.event_box_bg_stage) return;
			o.event_box_bg_stage.removeAllChildren();
			o.event_box_bg_stage_play = true;
			o.event_box_bg_mc = o.event_box_bg_stage.addChild(new createjs.Sprite(o.event_box_bg_spriteSheet, "show"));
			o.event_box_bg_mc.addEventListener("animationend", event_box_bg_complete);
			$('.event_box').addClass('on');
			$('.event_box').find('span').removeClass('on').eq(_n).addClass('on');
			$('.event_line').find('.icon').removeClass('on').eq( _n - 1).addClass('on');
			o.event_box_timeout = setTimeout(function(){ 
				var _has = false;
				for(var i = 0 ; i<o.has_auto_play_pop.length; i++){
					if(o.now_event == o.has_auto_play_pop[i]) _has = true;
				}
				if(!_has){
					show_pop(true);
				}
			},4000);
		}else{
			if(o.now_event == 0) return;
			else o.now_event = 0;
			clearTimeout(o.event_box_timeout);
			o.event_box_bg_stage.removeAllChildren();
			o.event_box_bg_stage_play = true;
			o.event_box_bg_mc = o.event_box_bg_stage.addChild(new createjs.Sprite(o.event_box_bg_spriteSheet, "backshow"));
			o.event_box_bg_mc.addEventListener("animationend", event_box_bg_complete);
			$('.event_box').removeClass('on');
			$('.event_box').find('span').removeClass('on');
			$('.event_line').find('.icon').removeClass('on')
		}
	}
	function event_box_bg_complete(){
		o.event_box_bg_mc.stop();
		o.event_box_bg_stage_play = false;
	}
	function street_all(){
		var _this = $(this),
			_img = _this.find('.street').find('img'),
			og_left = 0,
			drag_left = 0,
			tmp_org_street;

		_img.on('touchstart', function(e){
			e.preventDefault();
			if(device.mobile()){e = e.originalEvent.touches[0];}
			og_left = e.pageX;
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
			_this.addClass('move');
            drag_left = e.pageX - og_left;
			o.org_street = tmp_org_street - drag_left / $(window).width() * 60;
			if(o.org_street < 0) o.org_street = o.org_street + 360;
			else if(o.org_street > 360) o.org_street = o.org_street -360;
			street_move();
		}
	}
	function iknow_click(_t){
		if(_t) sound_btn_click();
		clearTimeout(o.iknow_timeout);
		o.tip_box_stage_play = false; 
		o.iknow_click = true;
		$('.tip_box').fadeOut();
	}
	function menubtn_click(){
		track_btn('主選單',1);
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
			clearTimeout(o.event_box_timeout);
			$('.menu').removeClass('off').addClass('on');
		}
	}
	function window_deviceorientation(e) {
		// o.street_alpha = Math.round(e.alpha / 10) *10;
		o.street_alpha = e.alpha;
		if(o.street_ctrl) street_move();
	}
	function street_move(){
		if(o.street_alpha>180) o.street_alpha= o.street_alpha-360;
		if(o.frist){
			if(o.street_alpha!=0) o.org_street = o.org_street + o.street_alpha;
			o.frist = false; 
		}
		o.street_deg = o.street_alpha - o.org_street;
		
		if(o.street_deg >= -62 && o.street_deg <= -42) play_event_box(true,1);
		else if(o.street_deg >= -120 && o.street_deg <= -100) play_event_box(true,2);
		else if(o.street_deg >= -190 && o.street_deg <= -170) play_event_box(true,3);
		else if(o.street_deg >= 170 && o.street_deg <= 190) play_event_box(true,3);
		else if(o.street_deg >= -220 && o.street_deg <= -200) play_event_box(true,4);
		else if(o.street_deg >= 140 && o.street_deg <= 160) play_event_box(true,4);
		else if(o.street_deg >= -300 && o.street_deg <= -280) play_event_box(true,5);
		else if(o.street_deg >= 60 && o.street_deg <= 80) play_event_box(true,5);
		else play_event_box(false);
		// $('.pop').html(o.street_deg);
		o.dis = Math.floor(o.street_width / 360 * o.street_deg + $(window).width());
		// o.dis = Math.floor(o.street_width / 360 * o.street_deg);		
		$('.street_all').css('left',o.dis);
	}

	function track_btn(btnName,value){
		window._CiQ11709 = window._CiQ11709 || [];
		window._CiQ11709.push(['_trackEvent', {
			type: 1,
			labels:[
				{'按钮名称':btnName}
			],
			values: [
				{'数量':value}
			]
		}]);
		window.CClickiV3 && window.CClickiV3[11709] && window.CClickiV3[11709]._flushObserver(function(){});
	}
	function track_pg(page,pgTitle){
		window._CiQ11709 = window._CiQ11709 || [];
		window._CiQ11709.push(['_trackPageView', {
			'urlPath': page,
			'pageTitle': pgTitle
		}]);
		window.CClickiV3 && window.CClickiV3[11709] && window.CClickiV3[11709]._flushObserver(function(){});
	}


})//ready end  
