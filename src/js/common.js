var andyCanTrack = false;
$(document).ready(function(){
	// track_pg('page01','正在載入');
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		loading_flower: $('.loading_flower'),
		frist:true,
		dis: 0,
		dis_tmp:0,
		loading_num: 0,
		menu_timeout:'',
		event_box_timeout:'',
		iknow_timeout:'',
		iknow_click:true,
		event_box_bg_stage_play: false,
		org_street: 180,
		street_alpha: 0,
		street_ctrl: true,
		street_deg:0,
		now_event:0,
		tip_box_stage_play: false,
		event_popup_2_stage_play: false,
		event_popup_2_stage_play_timeout:'',
		event_popup_2_stage_play_num: -1,
		event_popup_3_stage_play: false,
		event_popup_4_stage_play: false,
		event_popup_3_stage_has_play: false,
		event_popup_4_stage_has_play: false,
		has_auto_play_pop:[]
	};
	$('.street').clone().appendTo('.street_all_in');
	creatjs_loading();
	wxshareInit();
	

	//AddListener
	$('.adverserisk_pop .closebtn').click(function(){
		$('.adverserisk_pop').fadeOut();
	});
	$('.event_box .box').on('click',event_box_box_icon_click);
	$('.event4 .prev_btn').on('click',event_popup_4_ani_click_prev);
	$('#event_popup_4_ani').on('click',event_popup_4_ani_click);
	$('.event3 .next_btn').on('click',event_popup_3_ani_click_next);
	$('.event3 .prev_btn').on('click',event_popup_3_ani_click_prev);
	$('.event_line .icon').on('click',event_line_icon_click);
	$('.menu_link').on('click',menu_link_click);
	$('.gotobuy_btn').click(function(){
		//tracker
		if(o.now_event == 1) track_btn('電影院popup_立刻入手',1);
		else if(o.now_event == 4) track_btn('藥局popup_立刻入手',1);
		$('.exit_pop').fadeIn();
		// window.open('http://www.ehaoyao.com/product-15527.html','blank');
	});
	$('.exit_pop .ok_btn').click(function(){
		$('.exit_pop').hide();
		window.open('http://www.ehaoyao.com','blank');
	});
	$('.exit_pop .nook_btn').click(function(){
		$('.exit_pop').hide();
	});
	$('.getsecret_btn').click(function(){
		
		//tracker
		if(o.now_event == 1) track_btn('電影院popup_馬上GET秘訣',1);
		else if(o.now_event == 2) track_btn('咖啡館popup_馬上get秘訣',1);

		popup_ani_play(false);
		$('.event_popup .popup').hide();
		o.now_event = 4;
		popup_ani_play(true);
		$('.event_popup .popup').eq(o.now_event - 1).fadeIn(300,function(){
			$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
		});
	});
	$('.unlock_btn').click(function(){
		//tracker
		track_btn('摩托車女神popup_解鎖神器',1);

		popup_ani_play(false);
		$('.event_popup .popup').hide();
		o.now_event = 4;
		popup_ani_play(true);
		$('.event_popup .popup').eq(o.now_event - 1).fadeIn(300,function(){
			$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
		});
	});
	$('.share_btn').click(function(){
		//tracker
		if(o.now_event == 1) track_btn('電影院popup_奔走相告',1);
		else if(o.now_event == 2) track_btn('咖啡館popup_奔走相告',1);
		else if(o.now_event == 3) track_btn('摩托車女神popup_奔走相告',1);

		popup_ani_play(false);
		$('.event_popup .popup').hide();
		o.now_event = 5;
		$('.event_popup .popup').eq(o.now_event - 1).fadeIn(300,function(){
			$('.event_popup .popup').eq(o.now_event - 1).addClass('on'); 
			popup_ani_play(true);
		});
	});
	$('.more_msg_btn').click(function(){
		//tracker
		track_btn('藥局popup_更多信息',1);

		window.open('http://www.coclife.com','blank');
	});
	$('.sound_btn').click(function(){
		if($('.sound_btn').hasClass('off')) track_btn('音樂播放',1);
		else track_btn('音樂關閉',1);
		sound_btn_click();
	});
	$('.event_point').click(event_point_click);
	$('.event_popup .closebtn').click(function(){ show_pop(false); })
	$('.event_popup_1_videobtn').click( playvideo );
	$('.street_all').each(street_all);
	$('.iknow_btn').on('click',function(){
		iknow_click(true);
		track_btn('知道了!',1);
	});
	$('.menubtn').click(menubtn_click);
	$(window).load(window_load);
	function window_load(){
		o.street_width = $('.street_all_in').width() / 2;
		o.loading_num +=1;
		check_loading();
	}
	function check_loading(){
		if(o.loading_num >=3){
			window.addEventListener('deviceorientation', function(e){
				window_deviceorientation(e);
			});
			street_move();
			o.tip_box_stage_play = true;
			// track_pg('page02','提示畫面');
			init_track();
			o.loading.fadeOut(300,function(){ o.loading.remove(); o.loading_stage = false;});
		}
	}
	function init_track(){
		window._CiQ11709 = window._CiQ11709 || [];
		window._CiQ11709.push(['_cookieUseRootDomain', true]);
		var c = document.createElement('script');
		c.type = 'text/javascript';
		c.async = true;
		c.charset = 'utf-8';
		c.src = '//collect.cn.miaozhen.com/ca/11709';
		var h = document.getElementsByTagName('script')[0];
		h.parentNode.insertBefore(c, h);

		andyCanTrack = true;
	}
	function creatjs_loading(){
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
			o.loading_num +=2;
			check_loading();
			// creatjs_tip_box();
		}
	}
	function creatjs_tip_box(){
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
			// createjs_event04();
			o.loading_num+=1;
			check_loading();
			// wxshareInit();
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

			o.event_popup_4_ani.gotoAndPlay(1);
			o.event_popup_4_stage_play = true;
			o.event_popup_4_stage_has_play=true;
			show_loading_flower(false);
		}
	}
	function creatjs_start(){

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

			// o.event_popup_2_stage = new createjs.Stage(document.getElementById("event_popup_2_ani"));
			// o.event_popup_2_ani = o.event_popup_2_stage.addChild(new lib.event02());
			// o.event_popup_2_ani.setTransform(375,667).gotoAndStop(0);
			// o.event_popup_2_stage.update();

			o.event_popup_3_stage = new createjs.Stage(document.getElementById("event_popup_3_ani"));
			o.event_popup_3_ani = o.event_popup_3_stage.addChild(new lib.event01());
			o.event_popup_3_ani.setTransform(45,100).gotoAndStop(0);
			o.event_popup_3_ani2 = o.event_popup_3_stage.addChild(new lib.talk_box01());
			o.event_popup_3_ani2.setTransform(45,770).gotoAndStop(0);
			o.event_popup_3_stage.update();
			
			if(o.now_event == 2){
				o.event_popup_3_ani.gotoAndPlay(1);
				o.event_popup_3_ani2.gotoAndPlay(1);
				o.event_popup_3_stage_play = true;
			}else{
				play_popup_2();
				// o.event_popup_2_ani.gotoAndPlay(1);
				o.event_popup_2_stage_play = true;
			}
			o.event_popup_3_stage_has_play=true;
			show_loading_flower(false);
		}
	}

	//Event
	function wxshareInit(){
		$.ajax({
			type:"POST",
			url: "http://www.fangxinquai.com/demo.php",
			data:{url:location.href},
			success:function(ret){
				if(typeof ret != 'object'){
					ret = JSON.parse(ret);
				}
				// console.log(ret);
				wx.config({
					appId: ret.appId,
					timestamp: ret.timestamp,
					nonceStr: ret.nonceStr,
					signature: ret.signature,
					jsApiList: [
					'onMenuShareTimeline','onMenuShareAppMessage'
					],
					// debug:true,
				});
				wx.ready(function(){
					// 分享到朋友圈
					wx.onMenuShareTimeline({
						title:'靠「吃」就能当女神，別说妳只能当平凡姑娘。',
						// desc: '有颗当女神的野心，不如一颗当女神的灵药',
						link: 'http://e.cn.miaozhen.com/r/k=2027843&p=720mF&dx=__IPDX__&rt=2&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&ro=sm&vo=335b1ab94&vr=2&o=http%3A%2F%2Fwww.fangxinquai.com',
						imgUrl: 'http://www.fangxinquai.com/images/fbsc.jpg',
						success:function(){
							track_btn('分享到朋友圈-发送',1);
						}, // 分享成功后回调
						cancel:function(){
							track_btn('分享到朋友圈-取消',1);
						},  // 取消分享后回调
					});
					// 分享到朋友
					wx.onMenuShareAppMessage({
						title:'靠「吃」就能当女神，別说妳只能当平凡姑娘。',
						desc: '有颗当女神的野心，不如一颗当女神的灵药',
						link: 'http://e.cn.miaozhen.com/r/k=2027843&p=720mE&dx=__IPDX__&rt=2&ns=__IP__&ni=__IESID__&v=__LOC__&xa=__ADPLATFORM__&ro=sm&vo=335b1ab94&vr=2&o=http%3A%2F%2Fwww.fangxinquai.com',
						imgUrl: 'http://www.fangxinquai.com/images/fbsc.jpg',
						type:"link",
						success:function(){
							track_btn('发送给好友-发送',1);
						}, // 分享成功后回调
						cancel:function(){
							track_btn('发送给好友-取消',1);
						},  // 取消分享后回调
					});
				});
			},
		});
	}
	function event_popup_4_ani_click(){
		if(o.event_popup_4_ani.currentFrame>33 && o.event_popup_4_ani.currentFrame<154){
			track_btn('藥局popup_文字按鈕1',1);
			o.event_popup_4_ani.gotoAndPlay(155);
		}
		else if(o.event_popup_4_ani.currentFrame>184 && o.event_popup_4_ani.currentFrame<328){
			track_btn('藥局popup_文字按鈕2_next',1);
			o.event_popup_4_ani.gotoAndPlay(339);
		}
		else if(o.event_popup_4_ani.currentFrame>339){
			track_btn('藥局popup_文字按鈕3',1);
			o.event_popup_4_ani.gotoAndPlay(184);
		}
	}
	function event_popup_4_ani_click_prev(){
		track_btn('藥局popup_文字按鈕2_prev',1);
		o.event_popup_4_ani.gotoAndPlay(1);
	}
	function event_popup_3_ani_click_next(){
		if(o.event_popup_3_ani.currentFrame>20 && o.event_popup_3_ani.currentFrame<189)
		{
			o.event_popup_3_ani.gotoAndPlay(190);
			o.event_popup_3_ani2.gotoAndPlay(190);
			track_btn('咖啡館popup_文字按鈕_1_next',1);
		}
		else if(o.event_popup_3_ani.currentFrame>190 && o.event_popup_3_ani.currentFrame<399) 
		{
			o.event_popup_3_ani.gotoAndPlay(400);
			o.event_popup_3_ani2.gotoAndPlay(400);
			track_btn('咖啡館popup_文字按鈕_2_next',1);
		}
		else if(o.event_popup_3_ani.currentFrame>400 && o.event_popup_3_ani.currentFrame<574) 
		{	
			o.event_popup_3_ani.gotoAndPlay(575);
			o.event_popup_3_ani2.gotoAndPlay(575);
			$('.end_word').addClass('on');
			track_btn('咖啡館popup_文字按鈕_3_next',1);
		}
		else if(o.event_popup_3_ani.currentFrame>574) {
			track_btn('咖啡館popup_文字按鈕_4_next',1);
			$('.end_word').removeClass('on');
			$('.end_word').show();
			$('.event3 .next_btn').hide();
		}
	}
	function event_popup_3_ani_click_prev(){
		if(o.event_popup_3_ani.currentFrame>190 && o.event_popup_3_ani.currentFrame<399)
		{
			o.event_popup_3_ani.gotoAndPlay(1);
			o.event_popup_3_ani2.gotoAndPlay(1);
			track_btn('咖啡館popup_文字按鈕_2_prev',1);
		}
		else if(o.event_popup_3_ani.currentFrame>400 && o.event_popup_3_ani.currentFrame<574) 
		{
			o.event_popup_3_ani.gotoAndPlay(190);
			o.event_popup_3_ani2.gotoAndPlay(190);
			track_btn('咖啡館popup_文字按鈕_3_prev',1);
		}
		else if(o.event_popup_3_ani.currentFrame > 575) 
		{
			if($('.end_word').hasClass('on')){
				track_btn('咖啡館popup_文字按鈕_4_prev',1);
				o.event_popup_3_ani.gotoAndPlay(400);
				o.event_popup_3_ani2.gotoAndPlay(400);
			}else{
				track_btn('咖啡館popup_文字按鈕_4_prev',1);
				$('.end_word').hide();
				o.event_popup_3_ani.gotoAndPlay(573);
				o.event_popup_3_ani2.gotoAndPlay(573);
				$('.end_word').addClass('on');
				// $('.event3 .next_btn').hide();
			}
		}
	}
	function play_popup_2(){
		o.event_popup_2_stage_play_num +=1;
		if(o.event_popup_2_stage_play_num >= $('.event2_animate .word').length) return;
		for(var i=0;i<$('.event2_animate .word').length;i++){
			if(i>o.event_popup_2_stage_play_num) break;
			$('.event2_animate .word').eq(i).addClass('on');
		}
		// $('.event2_animate .word_out').mCustomScrollbar('scrollTo','bottom');
		$('.word_out').animate({scrollTop:$('.word_in').height()},0);
		var _time = Math.random() * 2 * 1000 + 3000;
		o.event_popup_2_stage_play_timeout = setTimeout(play_popup_2,_time);
	}
	function event_line_icon_click(){
		var _index = $(this).index();
		if(o.street_alpha>180) o.street_alpha= o.street_alpha-360;

		if(_index == 0) o.org_street = (o.street_alpha - 50) * -1;
		else if(_index == 1) o.org_street = (o.street_alpha - 110) * -1;
		else if(_index == 2) o.org_street = (o.street_alpha - 180) * -1;
		else if(_index == 3) o.org_street = (o.street_alpha - 210) * -1;
		else if(_index == 4) o.org_street = (o.street_alpha - 290) * -1;

		//tracker
		if(_index == 0) track_btn('電影院_底部小花',1);
		else if(_index == 1) track_btn('咖啡館_底部小花',1);
		else if(_index == 2) track_btn('摩托車女神_底部小花',1);
		else if(_index == 3) track_btn('藥局_底部小花',1);
		else if(_index == 4) track_btn('奔走相告_底部小花',1);

		street_move();
	}
	function menu_link_click(){
		var _index = $(this).index();
		if(_index == 3) {
			track_btn('风险声明',1);
			$('.adverserisk_pop').fadeIn();
			return;
		}
		$('.menuDom').removeClass('on');
		$('.menu').addClass('off').removeClass('on');
		o.menu_timeout = setTimeout(function() {
			o.street_ctrl = true;
			$('.menu').removeClass('off');
		}, 1000);
		if(_index == 0){
			track_btn('返回小鎮',1);
		}
		else if(_index == 1){
			track_btn('觀看影片',1);
			o.now_event = 1;
			show_pop(true);
		}
		else if(_index == 2) {
			track_btn('發現秘訣',1);
			o.now_event = 4;
			show_pop(true);
		}
	}
	function StageListenter(){
		if(o.event_box_bg_stage_play) o.event_box_bg_stage.update();
		if(o.loading_stage) o.loading_stage.update();
		
		if(o.event_popup_3_stage_play){
			o.event_popup_3_stage.update();
			if(o.event_popup_3_ani.currentFrame >= 180) $('.event3 .prev_btn').show();
			else $('.event3 .prev_btn').hide();
			if(o.event_popup_3_ani.currentFrame <= 566) $('.event3 .next_btn').show();
			// else $('.event3 .next_btn').hide();
			if(o.event_popup_3_ani.currentFrame >= 683 && o.event_popup_3_ani.currentFrame < 684) event_popup_3_ani_click_next();
		}
		if(o.event_popup_4_stage_play){
			o.event_popup_4_stage.update();
			if(o.event_popup_4_ani.currentFrame >= 187 && o.event_popup_4_ani.currentFrame <= 330) $('.event4 .prev_btn').show();
			else $('.event4 .prev_btn').hide();

			if(o.event_popup_4_ani.currentFrame >= 184) $('.event4 .btn_box').show();
			else $('.event4 .btn_box').hide();
		}
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
			track_btn('電影院popup_播放按鈕',1);
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
			if(o.now_event == 3){
				o.event_popup_2_stage_play_num = -1;
				$('.event2_animate .word').removeClass('on');
			}
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
			//tracker
			if(o.now_event == 1) track_btn('電影院popup_關閉按鈕',1);
			else if(o.now_event == 2) track_btn('咖啡館popup_關閉按鈕',1);
			else if(o.now_event == 3) track_btn('摩托車女神popup_關閉按鈕',1);
			else if(o.now_event == 4) track_btn('藥局popup_關閉按鈕',1);
			else if(o.now_event == 5) track_btn('奔走相告popup_關閉按鈕',1);

			track_pg('page03','進到小鎮畫面');

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
			//tracker
			if(o.now_event==1) track_pg('page10','電影院popup');
			else if(o.now_event==2) track_pg('page06','咖啡館popup');
			else if(o.now_event==3) track_pg('page08','摩托車女神popup');
			else if(o.now_event==4) track_pg('page12','藥局popup');
			else if(o.now_event==5) track_pg('page14','奔走相告popup');

			if(o.now_event == 3){
				o.event_popup_3_stage_play = false;
				o.event_popup_4_stage_play = false;
				if(!o.event_popup_3_stage_has_play){
					show_loading_flower(true);
					creatjs_start();
					return;
				} 
				// o.event_popup_2_ani.gotoAndPlay(1);
				play_popup_2();
				o.event_popup_2_stage_play = true;
			}
			else if(o.now_event == 2){
				o.event_popup_2_stage_play = false;
				o.event_popup_4_stage_play = false;
				if(!o.event_popup_3_stage_has_play){
					show_loading_flower(true);
					creatjs_start();
					return;
				} 
				$('.end_word').removeClass('on').hide();
				o.event_popup_3_ani.gotoAndPlay(1);
				o.event_popup_3_ani2.gotoAndPlay(1);
				o.event_popup_3_stage_play = true;
			}
			else if(o.now_event == 4){
				o.event_popup_3_stage_play = false;
				o.event_popup_2_stage_play = false;
				if(!o.event_popup_4_stage_has_play){
					show_loading_flower(true);
					createjs_event04();
					return;
				}
				o.event_popup_4_ani.gotoAndPlay(1);
				o.event_popup_4_stage_play = true;
			}
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
				// o.event_popup_2_ani.gotoAndStop(1);
				clearTimeout(o.event_popup_2_stage_play_timeout); 
			}
			else if(o.now_event == 4){
				o.event_popup_4_ani.gotoAndStop(1);
				$('.event4 .btn_box').hide();
			}
		}
	}
	function event_box_box_icon_click(){
		clearTimeout(o.event_box_timeout);
		//tracker
		if(o.now_event == 1) track_btn('電影院_提示框',1);
		else if(o.now_event == 2) track_btn('咖啡館_提示框',1);
		else if(o.now_event == 3) track_btn('摩托車女神_提示框',1);
		else if(o.now_event == 4) track_btn('藥局_提示框',1);
		else if(o.now_event == 5) track_btn('奔走相告_提示框',1);

		show_pop(true);
	}
	function event_point_click(){
		clearTimeout(o.event_box_timeout);
		o.now_event = $(this).index() + 1;

		//tracker
		if(o.now_event == 1) track_btn('電影院_街景小花',1);
		else if(o.now_event == 2) track_btn('咖啡館_街景小花',1);
		else if(o.now_event == 3) track_btn('摩托車女神_街景小花',1);
		else if(o.now_event == 4) track_btn('藥局_街景小花',1);
		else if(o.now_event == 5) track_btn('奔走相告_街景小花',1);

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

			// //tracker
			// if(o.now_event==1) track_pg('page09','電影院街景');
			// else if(o.now_event==2) track_pg('page05','咖啡館街景');
			// else if(o.now_event==3) track_pg('page07','摩托車女神街景');
			// else if(o.now_event==4) track_pg('page11','藥局街景');
			// else if(o.now_event==5) track_pg('page13','奔走相告街景');
			

			o.event_box_timeout = setTimeout(function(){ 
				var _has = false;
				for(var i = 0 ; i<o.has_auto_play_pop.length; i++){
					if(o.now_event == o.has_auto_play_pop[i]) _has = true;
				}
				if(!_has){
					show_pop(true);
				}
			},3000);
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
			if(device.mobile() || device.tablet()){e = e.originalEvent.touches[0];}
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
			if(device.mobile() || device.tablet()){e = e.originalEvent.touches[0];}
			_this.addClass('move');
            drag_left = e.pageX - og_left;
			o.org_street = tmp_org_street - drag_left / $(window).width() * 60;
			if(o.org_street < 0) o.org_street = o.org_street + 360;
			else if(o.org_street > 360) o.org_street = o.org_street -360;
			street_move();
		}
	}
	function iknow_click(_t){
		// track_pg('page03','進到小鎮畫面');
		if(_t) sound_btn_click();
		// clearTimeout(o.iknow_timeout);
		o.tip_box_stage_play = false; 
		o.iknow_click = true;
		$('.tip_box').fadeOut();
		init_track();
		// track_pg('page05','咖啡館街景');
	}
	function menubtn_click(){
		if($(this).hasClass('on')){
			track_btn('主選單_關閉',1);
			track_pg('page03','進到小鎮畫面');
			$('.menuDom').removeClass('on');
			$('.menu').addClass('off').removeClass('on');
			o.menu_timeout = setTimeout(function() {
				o.street_ctrl = true;
				$('.menu').removeClass('off');
			}, 1000);
		}
		else{
			track_btn('主選單_打開',1);
			track_pg('page04','主選單畫面');
			o.street_ctrl = false;
			$('.menuDom').addClass('on');
			clearTimeout(o.menu_timeout);
			clearTimeout(o.event_box_timeout);
			$('.menu').removeClass('off').addClass('on');
		}
	}
	function window_deviceorientation(e) {
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
		
		o.dis = Math.floor(o.street_width / 360 * o.street_deg + $(window).width());		
		$('.street_all').css('left',o.dis);
	}
	function show_loading_flower(_t){
		if(_t) o.loading_flower.addClass('on').fadeIn();
		else o.loading_flower.removeClass('on').fadeOut();
	}

	


})//ready end  

function track_btn(btnName,value){
	if(andyCanTrack){
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
}
function track_pg(page,pgTitle){
	if(andyCanTrack){
		window._CiQ11709 = window._CiQ11709 || [];
		window._CiQ11709.push(['_trackPageView', {
			'urlPath': page,
			'pageTitle': pgTitle
		}]);
		window.CClickiV3 && window.CClickiV3[11709] && window.CClickiV3[11709]._flushObserver(function(){});
	}
}