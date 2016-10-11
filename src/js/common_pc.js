$(document).ready(function(){
	// track_pg('page01','正在載入');
	//Init
	var o ={
		wrp: $('.wrapper'),
		loading: $('.loading'),
		mouse_pageX:$(window).width()/2,
		dis: 0,
		dis_tmp:0,
		loading_num: 0,
		menu_timeout:'',
		event_box_timeout:'',
		iknow_timeout:'',
		iknow_click:false,
		event_box_bg_stage_play: false,
		org_street: 110,
		set_orgpoint:-30,
		street_alpha: -30,
		street_ctrl: true,
		street_deg:0,
		now_event:0,
		tip_box_stage_play: false,
		event_popup_2_stage_play: false,
		event_popup_2_stage_play_timeout:'',
		event_popup_2_stage_play_num: -1,
		event_popup_3_stage_play: false,
		event_popup_3_stage_play_timeout:'',
		event_popup_3_stage_play_num: 0,
		event_popup_4_stage_play: false,
		event_popup_4_stage_play_timeout:'',
		event_popup_4_stage_play_num: 0,
		has_auto_play_pop:[]
	};
	$('.street').clone().appendTo('.street_all_in');
	creatjs_loading();
	check_org_street();

	//AddListener
	$('.coc_qrcode').on('mouseover',coc_qrcode_over);
	$('.coc_qrcode').on('mouseout',coc_qrcode_out);
	$('.event4_animate .word1').on('click',event_popup_4_ani_click_next);
	$('.event4_animate .word3').on('click',event_popup_4_ani_click_prev);
	$('.event_popup_3_ani .word .next_btn').on('click',event_popup_3_ani_click_next);
	$('.event_popup_3_ani .word .prev_btn').on('click',event_popup_3_ani_click_prev);
	$('.event_line .icon').on('click',event_line_icon_click);
	$('.event_line .icon').on('mouseout',event_line_icon_out);
	$('.menu_link').on('click',menu_link_click);
	$('.gotobuy_btn').click(function(){
		//tracker
		if(o.now_event == 1) track_btn('電影院popup_立刻入手',1);
		else if(o.now_event == 4) track_btn('藥局popup_立刻入手',1);

		window.open('http://www.360kad.com/product/65049.shtml?xc','blank');
	});
	$('.getsecret_btn').click(function(){
		
		//tracker
		if(o.now_event == 1) track_btn('電影院popup_馬上GET秘訣',1);
		else if(o.now_event == 2) track_btn('咖啡館popup_馬上get秘訣',1);

		popup_ani_play(false);
		$('.event_popup .popup').hide();
		o.now_event = 4;
		o.event_popup_4_stage_play_num = 0;
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
		o.event_popup_4_stage_play_num = 0;
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
	$('.event_point').on('mouseover', event_point_over);
	$('.event_point').on('mouseout', event_point_out);
	$('.event_point').click(event_point_click);
	$('.event_popup .closebtn').click(function(){ show_pop(false); })
	$('.event_popup_1_videobtn').click( playvideo );
	$('.street_all').each(street_all);
	$('.iknow_btn').on('click',iknow_click);
	$('.menubtn').click(menubtn_click);
	$(window).load(window_load);
	function window_load(){
		o.street_width = $('.street').eq(0).width();
		$(".event2_animate .word_out").mCustomScrollbar({scrollInertia:300,scrollEasing:'linear'});
		o.loading_num +=1;
		createjs_event_box_bg();
	}
	function check_loading(){
		if(o.loading_num >=2) o.loading.fadeOut(300,function(){ 
			o.loading.remove(); 
			o.loading_stage = false; 
			sound_btn_click();
			// track_pg('page02','進到小鎮畫面');
			init_track();
		});
	}
	function init_track(){
		window._CiQ11708 = window._CiQ11708 || [];
		window._CiQ11708.push(['_cookieUseRootDomain', true]);
		var c = document.createElement('script');
		c.type = 'text/javascript';
		c.async = true;
		c.charset = 'utf-8';
		c.src = '//collect.cn.miaozhen.com/ca/11708';
		var h = document.getElementsByTagName('script')[0];
		h.parentNode.insertBefore(c, h);
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
	function createjs_event_box_bg(){
		var _canvas = document.getElementById("event_box_bg");
		o.event_box_bg_stage = new createjs.Stage(_canvas);
		o.event_box_bg_mc = o.event_box_bg_stage.addChild(new lib4.event_box());
		o.event_box_bg_stage.update();
		o.loading_num+=1;
		check_loading();
	}
	

	//Event
	function check_org_street(){
		// if($(window).width()>=1366) o.org_street = 110;
	}
	function event_line_icon_out(){
		o.street_ctrl = true;
	}
	function event_point_over(){
		o.street_ctrl = false;
	}
	function event_point_out(){
		o.street_ctrl = true;
	}
	function coc_qrcode_over(){
		if(!$(this).hasClass('on')) track_btn('COC_QR_CODE',1);
		$(this).addClass('on');
	}
	function coc_qrcode_out(){
		 $(this).removeClass('on');
	}
	function event_popup_4_ani_click_next(){
		//tracker
		track_btn('藥局popup_文字按鈕1_next',1);

		clearTimeout(o.event_popup_4_stage_play_timeout);
		play_popup_4('next');
	}
	function event_popup_4_ani_click_prev(){
		//tracker
		track_btn('藥局popup_文字按鈕1_prev',1);

		clearTimeout(o.event_popup_4_stage_play_timeout);
		play_popup_4('prev');
	}
	function event_popup_3_ani_click_next(){
		//tracker
		var _index  = $(this).parent().parent().index();
		if(_index == 1) track_btn('咖啡館popup_文字按鈕_1_next',1);
		else if(_index == 2) track_btn('咖啡館popup_文字按鈕_2_next',1);
		else if(_index == 3) track_btn('咖啡館popup_文字按鈕_3_next',1);
		else if(_index == 4) track_btn('咖啡館popup_文字按鈕_4_next',1);
		
		clearTimeout(o.event_popup_3_stage_play_timeout);
		play_popup_3('next');
	}
	function event_popup_3_ani_click_prev(){
		//tracker
		var _index  = $(this).parent().parent().index();
		if(_index == 1) track_btn('咖啡館popup_文字按鈕_1_prev',1);
		else if(_index == 2) track_btn('咖啡館popup_文字按鈕_2_prev',1);
		else if(_index == 3) track_btn('咖啡館popup_文字按鈕_3_prev',1);
		else if(_index == 4) track_btn('咖啡館popup_文字按鈕_4_prev',1);
		
		clearTimeout(o.event_popup_3_stage_play_timeout);
		play_popup_3('prev');
	}
	function play_popup_2(){
		o.event_popup_2_stage_play_num +=1;
		if(o.event_popup_2_stage_play_num >= $('.event2_animate .word').length) return;
		for(var i=0;i<$('.event2_animate .word').length;i++){
			if(i>o.event_popup_2_stage_play_num) break;
			$('.event2_animate .word').eq(i).addClass('on');
		}
		$('.event2_animate .word_out').mCustomScrollbar('scrollTo','bottom');
		var _time = Math.random() * 2 * 1000 + 2000;
		o.event_popup_2_stage_play_timeout = setTimeout(play_popup_2,_time);
	}
	function play_popup_3(_txt){
		if(_txt == 'prev'){
			o.event_popup_3_stage_play_num -=1;
			if(o.event_popup_3_stage_play_num <0) o.event_popup_3_stage_play_num=0;
		}else{
			o.event_popup_3_stage_play_num +=1;
			if(o.event_popup_3_stage_play_num >= $('.event_popup_3_ani .cut').length) return;
		}
		$('.event_popup_3_ani .cut').removeClass('on').eq(o.event_popup_3_stage_play_num).addClass('on');
		o.event_popup_3_stage_play_timeout = setTimeout(play_popup_3,5000);
	}
	function play_popup_4(_txt){
		if(_txt == 'prev'){
			o.event_popup_4_stage_play_num -=1;
			if(o.event_popup_4_stage_play_num < 0) o.event_popup_4_stage_play_num = 0;
		}else{
			o.event_popup_4_stage_play_num +=1;
			if(o.event_popup_4_stage_play_num >= 3) return;
		}
		$('.event4_animate').removeClass('cut1').removeClass('cut2').addClass('cut'+o.event_popup_4_stage_play_num);
		o.event_popup_4_stage_play_timeout = setTimeout(play_popup_4,5000);
	}
	function event_line_icon_click(){
		var _index = $(this).index();
		if(_index == 0) o.org_street = 54;
		else if(_index == 1) o.org_street = 110;
		else if(_index == 2) o.org_street = 180;
		else if(_index == 3) o.org_street = 210;
		else if(_index == 4) o.org_street = 290;
		street_move();
		o.street_ctrl = false;

		//tracker
		if(_index == 0) track_btn('電影院_底部小花',1);
		else if(_index == 1) track_btn('咖啡館_底部小花',1);
		else if(_index == 2) track_btn('摩托車女神_底部小花',1);
		else if(_index == 3) track_btn('藥局_底部小花',1);
		else if(_index == 4) track_btn('奔走相告_底部小花',1);
	}
	function menu_link_click(){
		var _index = $(this).index();
		$('.menuDom').removeClass('on');
		$('.menu').addClass('off').removeClass('on');
		o.menu_timeout = setTimeout(function() {
			o.street_ctrl = true;
			$('.menu').removeClass('off');
		}, 1000);
		if(_index == 0){
			track_btn('返回小鎮',1);
			track_pg('page02','進到小鎮畫面');
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
		
		if(o.event_box_bg_stage_play){
			o.event_box_bg_stage.update();
			if( o.event_box_bg_mc.currentFrame == 13) o.event_box_bg_stage_play=false;
			else if( o.event_box_bg_mc.currentFrame == 27) o.event_box_bg_stage_play=false;
		}
		if(o.loading_stage) o.loading_stage.update();
		if(o.street_ctrl){
			var _tmp = 2* (o.mouse_pageX - $(window).width()/2) / $(window).width() / 2;
			o.org_street += _tmp;
			if(o.org_street < 0 + o.set_orgpoint) o.org_street = o.org_street + 360;
			else if(o.org_street > 360 + o.set_orgpoint) o.org_street = o.org_street -360;
			street_move();
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
			o.has_auto_play_pop.push( o.now_event );
			$('.event_popup .popup').eq(o.now_event - 1).show();
			if(o.now_event == 5) $('.event_popup .closebtn').addClass('on');
			else if(o.now_event == 2){
				o.event_popup_3_stage_play_num = -1;
				$('.event_popup .closebtn').addClass('on');
				$('.event_popup_3_ani .cut').removeClass('on');
			}else if(o.now_event == 3){
				o.event_popup_2_stage_play_num = -1;
				$('.event_popup .closebtn').removeClass('on');
				$('.event2_animate .word').removeClass('on');
			}else if(o.now_event == 4){
				$('.event_popup .closebtn').removeClass('on');
				o.event_popup_4_stage_play_num = 0;
			}
			else $('.event_popup .closebtn').removeClass('on');
			popup_ani_play(true);
			$('.event_popup').fadeIn(300,event_popup_start);
			function event_popup_start(){ 
				var _nog = o.now_event - 1;
				o.street_ctrl = false;
				$('.event_popup .popup').eq(_nog).addClass('on');
			}
		}else{
			//tracker
			if(o.now_event == 1) track_btn('電影院popup_關閉按鈕',1);
			else if(o.now_event == 2) track_btn('咖啡館popup_關閉按鈕',1);
			else if(o.now_event == 3) track_btn('摩托車女神popup_關閉按鈕',1);
			else if(o.now_event == 4) track_btn('藥局popup_關閉按鈕',1);
			else if(o.now_event == 5) track_btn('奔走相告popup_關閉按鈕',1);

			track_pg('page02','進到小鎮畫面');

			popup_ani_play(false);
			o.street_ctrl = true;
			$('.event_popup').fadeOut(300,event_popup_end);
			function event_popup_end(){
				$('.event_popup .popup').removeClass('on').hide();
				o.street_ctrl = true; 
			}
		}
	}
	function popup_ani_play(_t){
		if(_t){
			if(o.now_event == 3){
				play_popup_2();
			}
			else if(o.now_event == 2){
				play_popup_3();
			}
			else if(o.now_event == 4){
				$('.event_popup .closebtn').removeClass('on');
				play_popup_4();
			}

			//tracker
			if(o.now_event==1) track_pg('page06','電影院popup');
			else if(o.now_event==2) track_pg('page04','咖啡館popup');
			else if(o.now_event==3) track_pg('page05','摩托車女神popup');
			else if(o.now_event==4) track_pg('page07','藥局popup');
			else if(o.now_event==5) track_pg('page08','奔走相告popup');
			
		}else{
			o.event_popup_2_stage_play = false;
			if(o.now_event == 2){
				clearTimeout(o.event_popup_3_stage_play_timeout); 
			}
			else if(o.now_event == 1){
				playvideo(false);
			}
			else if(o.now_event == 3){
				clearTimeout(o.event_popup_2_stage_play_timeout); 
			}
			else if(o.now_event == 4){
				clearTimeout(o.event_popup_4_stage_play_timeout); 
			}
		}
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
		if(_t){
			if(o.now_event == _n) return;
			else o.now_event = _n;
			if(!o.event_box_bg_stage) return;
			o.event_box_bg_stage_play = true;
			o.event_box_bg_mc.gotoAndPlay(0);
			$('.event_box').addClass('on');
			$('.event_box').find('span').removeClass('on').eq(_n - 1).addClass('on');
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
			o.event_box_bg_stage_play = true;
			o.event_box_bg_mc.gotoAndPlay(14);
			$('.event_box').removeClass('on');
			$('.event_box').find('span').removeClass('on');
			$('.event_line').find('.icon').removeClass('on');
		}
	}
	function street_all(){
		var _this = $(this);
		_this.bind('mousemover', function(){
			o.street_ctrl = true;
		});
		_this.bind('mousemove', _touchmove);

		function _touchmove(e){
			o.mouse_pageX = e.pageX;
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
			track_btn('主選單_關閉',1);
			track_pg('page02','進到小鎮畫面');
			$('.menuDom').removeClass('on');
			$('.menu').addClass('off').removeClass('on');
			o.menu_timeout = setTimeout(function() {
				o.street_ctrl = true;
				$('.menu').removeClass('off');
			}, 1000);
		}
		else{
			track_btn('主選單_打開',1);
			track_pg('page03','主選單畫面');
			o.street_ctrl = false;
			$('.menuDom').addClass('on');
			clearTimeout(o.menu_timeout);
			clearTimeout(o.event_box_timeout);
			$('.menu').removeClass('off').addClass('on');
		}
	}
	
	function street_move(){
		o.street_deg = o.street_alpha - o.org_street;
		if(o.street_deg >= -66 - 30 && o.street_deg <= -46 -30 ) play_event_box(true,1);
		else if(o.street_deg >= -120 - 30 && o.street_deg <= -100 -30 ) play_event_box(true,2);
		else if(o.street_deg >= -190 - 30 && o.street_deg <= -170 -30 ) play_event_box(true,3);
		else if(o.street_deg >= 170 - 30 && o.street_deg <= 190 -30 ) play_event_box(true,3);
		else if(o.street_deg >= -220 - 30 && o.street_deg <= -200 -30 ) play_event_box(true,4);
		else if(o.street_deg >= 140 - 30 && o.street_deg <= 160 -30 ) play_event_box(true,4);
		else if(o.street_deg >= -300 - 30 && o.street_deg <= -280 -30 ) play_event_box(true,5);
		else if(o.street_deg >= 60 - 30 && o.street_deg <= 80 -30 ) play_event_box(true,5);
		else play_event_box(false);
		o.dis = Math.floor(o.street_width / 360 * o.street_deg + $(window).width());
		$('.street_all').css('left',o.dis);
	}

	function track_btn(btnName,value){
		window._CiQ11708 = window._CiQ11708 || [];
		window._CiQ11708.push(['_trackEvent', {
		type: 1,
		labels:[
		{'按钮名称':btnName}
		],
		values: [
		{'数量':value}
		]
		}]);
		window.CClickiV3 && window.CClickiV3[11708] && window.CClickiV3[11708]._flushObserver(function(){});
	}
	function track_pg(page,pgTitle){
		window._CiQ11708 = window._CiQ11708 || [];
		window._CiQ11708.push(['_trackPageView', {
		'urlPath': page,
		'pageTitle': pgTitle
		}]);
		window.CClickiV3 && window.CClickiV3[11708] && window.CClickiV3[11708]._flushObserver(function(){});
	}

	$(window).resize(webResize);
	function webResize(){
		for(var i=0; i<$('.street').length;i++) $('.street').eq(i).css('width',$('.street').eq(i).find('img').width());
		o.street_width = $('.street').eq(0).width();
		street_move();
	}
})//ready end  
