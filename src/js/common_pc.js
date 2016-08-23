$(document).ready(function(){
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		dis: 0,
		dis_tmp:0,
		loading_num: 0,
		menu_timeout:'',
		event_box_timeout:'',
		iknow_timeout:'',
		iknow_click:false,
		event_box_bg_stage_play: false,
		org_street: 179,
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
	$('.menu_link').on('click',menu_link_click);
	$('.gotobuy_btn').click(function(){

	});
	$('.getsecret_btn').click(function(){

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
	$('.unlock_btn').click(function(){

	});
	$('.more_msg_btn').click(function(){

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
		o.street_width = $('.street').eq(0).width();
		$('.street').eq(1).css('left',o.street_width);
		$('.street_all').css('margin-left',o.street_width*-1);
		o.loading_num +=1;
		creatjs_tip_box();
	}
	function check_loading(){
		if(o.loading_num >=2){
			// setTimeout(function(){
				// window.addEventListener('deviceorientation', function(e){
				// 	window_deviceorientation(e);
				// });
				o.tip_box_stage_play = true;
				o.iknow_timeout = setTimeout(function(){ iknow_click(false);},5300);
				o.loading.fadeOut(300,function(){ o.loading.remove(); o.loading_stage = false;});
			// },2000);
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
		loader.loadFile({src:"images/loading_pc_atlas_.json", type:"spritesheet", id:"loading_pc_atlas_"}, true);
		loader.loadManifest(lib2.properties.manifest);
		
		function handleFileLoad(evt) {
			if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
		}

		function handleComplete(evt) {
			var queue = evt.target;
			ss["loading_pc_atlas_"] = queue.getResult("loading_pc_atlas_");
			exportRoot = new lib2.loading_pc();

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

			o.loading_num+=1;
			check_loading();
		}
	}

	//Event
	function menu_link_click(){
		var _index = $(this).index();
		if(_index == 0) $('.menubtn').trigger('click');
		else if(_index == 1){
			$('.menubtn').trigger('click');
			o.now_event = 1;
			show_pop(true);
		}
		// else if(_index == 2) {}
	}
	function StageListenter(){
		if(o.event_box_bg_stage_play) o.event_box_bg_stage.update();
		if(o.loading_stage) o.loading_stage.update();
		if(o.tip_box_stage_play) o.tip_box_stage.update();

		if(o.event_popup_2_stage_play) o.event_popup_2_stage.update();
		if(o.event_popup_3_stage_play) o.event_popup_3_stage.update();
		if(o.event_popup_4_stage_play){
			o.event_popup_4_stage.update();
			// console.log('o.event_popup_4_ani.currentFrame:'+o.event_popup_4_ani.currentFrame+"/"+'o.event_popup_4_ani.totalFrames:'+o.event_popup_4_ani.totalFrames);
			if(o.event_popup_4_ani.currentFrame == o.event_popup_4_ani.totalFrames - 1) event_popup_4_ani_complete();
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
			o.has_auto_play_pop.push( o.now_event );
			$('.event_popup .popup').eq(o.now_event - 1).show();
			if(o.now_event == 5) $('.event_popup .closebtn').addClass('on');
			else $('.event_popup .closebtn').removeClass('on');
			$('.event_popup').fadeIn(300,event_popup_start);
			function event_popup_start(){ 
				$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
				popup_ani_play(true);
			}
		}else{
			popup_ani_play(false);
			$('.event_popup').fadeOut(300,event_popup_end);
			function event_popup_end(){
				$('.event_popup .popup').hide();
				o.street_ctrl = true; 
			}
		}
	}
	function popup_ani_play(_t){
		if(_t){
			if(o.now_event == 3){
				o.event_popup_2_stage_play = true;
				o.event_popup_2_ani.gotoAndPlay(1);
			}
			else if(o.now_event == 2){
				o.event_popup_3_stage_play = true;
				o.event_popup_3_ani.gotoAndPlay(1);
				o.event_popup_3_ani2.gotoAndPlay(1);
			}
			else if(o.now_event == 4){
				o.event_popup_4_stage_play = true;
				o.event_popup_4_ani.gotoAndPlay(1);
			}
			
		}else{
			if(o.now_event == 2){
				o.event_popup_2_ani.stop();
				o.event_popup_2_stage_play = false;
			}
			else if(o.now_event == 1){
				playvideo(false);
			}
			else if(o.now_event == 3){
				o.event_popup_3_ani.stop();
				o.event_popup_3_ani2.stop();
				o.event_popup_3_stage_play = false;
			}
			else if(o.now_event == 4){
				o.event_popup_4_ani.stop();
				$('.event4 .btn_box').hide();
				o.event_popup_4_stage_play = false;
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
			og_left = 0,
			drag_left = 0,
			tmp_org_street;

		_this.bind('mousemove', _touchmove);

		function _touchmove(e){
            // o.street_alpha
			// _this.addClass('move');
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
	// function window_deviceorientation(e) {
	// 	// o.street_alpha = Math.round(e.alpha / 10) *10;
	// 	o.street_alpha = e.alpha;
	// 	if(o.street_ctrl) street_move();
	// }
	function street_move(){
		o.street_width = $('.street').eq(0).width();
		$('.street').eq(1).css('left',o.street_width);
		$('.street_all').css('margin-left',o.street_width*-1);
		// o.street_deg = Math.floor( o.street_alpha - o.org_street);
		o.street_deg = o.street_alpha - o.org_street;

		// if( o.street_ctrl ){
			if(o.street_deg >= -62 && o.street_deg <= -42) play_event_box(true,1);
			else if(o.street_deg >= -120 && o.street_deg <= -100) play_event_box(true,2);
			else if(o.street_deg >= -180 && o.street_deg <= -170) play_event_box(true,3);
			else if(o.street_deg >= 170 && o.street_deg <= 180) play_event_box(true,3);
			else if(o.street_deg >= -218 && o.street_deg <= -198) play_event_box(true,4);
			else if(o.street_deg >= 140 && o.street_deg <= 160) play_event_box(true,4);
			else if(o.street_deg >= -297 && o.street_deg <= -277) play_event_box(true,5);
			else if(o.street_deg >= 60 && o.street_deg <= 80) play_event_box(true,5);
			else play_event_box(false);
		// }
		// $('.pop').html(o.street_deg);
		o.dis = Math.floor(o.street_width / 360 * o.street_deg + $(window).width());
		$('.street_all').css('left',o.dis);
	}
	
})//ready end  
