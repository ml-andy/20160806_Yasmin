<?php
    require_once "jsdk.class.php";
    $jssdk = new JSSDK("wxee77f527a97d464e", "d6772776d28e4637b6d32847c053668a");
    // print_r($jssdk);
    $signPackage = $jssdk->getSignPackage();
    // die;
    // print_r($signPackage);die;
?>
<!DOCTYPE html>
<html>
<head>
<title>优思明小镇</title>
<meta charset="UTF-8">
<meta lang="tw">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,user-scalable=no">
<meta name="description" content="有颗当女神的心，不如一颗当女神的药！"/>
<meta name="keywords" content="优思明小镇"/>
<meta property="og:title" content="靠「吃」就能当女神？"/>
<meta property="og:type" content="website"/>    
<!-- <meta property="og:image" content="images/fbsc.jpg"/> -->
<meta property="og:site_name" content="靠「吃」就能当女神？"/>
<meta property="og:description" content="有颗当女神的心，不如一颗当女神的药！"/>
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
<!---->
<script src="js/jquery.min.js"></script>
<script src="js/easeljs-0.8.2.min.js"></script>
<script src="js/tweenjs-0.6.1.min.js"></script>
<script src="js/movieclip-0.8.1.min.js"></script>
<script src="js/preloadjs-0.6.1.min.js"></script>
<!--css-->
<link rel="stylesheet" href="css/common.css"/>
<!--js-->
<script src="js/device.min.js"></script>
<script src="js/device_url.js"></script>
<script src="js/loading_ani.js"></script>
<script src="js/tip_box_ani.js"></script>
<script src="js/event04.js"></script>
<script src="js/event_popup.js"></script>
<script src="js/common.js"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>

<script type="text/javascript">
(function() {
    window._CiQ11709 = window._CiQ11709 || [];
    window._CiQ11709.push(['_cookieUseRootDomain', true]);
    var c = document.createElement('script');
    c.type = 'text/javascript';
    c.async = true;
    c.charset = 'utf-8';
    c.src = '//collect.cn.miaozhen.com/ca/11709';
    var h = document.getElementsByTagName('script')[0];
    h.parentNode.insertBefore(c, h);
    wx.config({
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: '<?php echo $signPackage["timestamp"];?>',
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
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
})();
</script>
<noscript>
<link href="//collect.cn.miaozhen.com/refer/collect?i=11709&v=13922245942&pu=http%3A//%28NoScriptPageviews%29&pt=NoScriptPageviews&ru=http%3A//%28NoScriptClients%29&csh=1000&csw=1000&css=10" rel="stylesheet" type="text/css" />
</noscript>

</head>
<body>
	<!-- Google Tag Manager -->
	<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-56MDX8"
	height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-56MDX8');</script>
	<!-- End Google Tag Manager -->

    <div class="share_img" style="display:none;"><img src="images/fbsc.jpg"></div>
	<div class="loading_flower"></div>
	<div class="loading">
		<span class="txt">loading</span>
		<canvas id="loading" width="750" height="1334"></canvas>
	</div>
	<div class="menubtn menuDom">
		<span class="top"></span>
		<span class="middle"></span>
		<span class="bottom"></span>
	</div>
	<div class="sound_btn off">
		<span></span>
		<audio id="bgm" loop="loop" controls="controls">
        	<source src="images/bgm.mp3">
    	</audio>
	</div>
	<div class="stage_top">
		<div class="logo"></div>
	</div>
	<div class="menu">
		<div class="menu_in">
			<div class="title"></div>
			<div class="link">
				<div class="menu_link m1" onclick="dataLayer.push({'event': 'Mob-FanHui'});"></div>
				<div class="menu_link m2" onclick="dataLayer.push({'event': 'Mob-GuanKanYingPian'});"></div>
				<div class="menu_link m3" onclick="dataLayer.push({'event': 'Mob-FaXianNvShenMiJue'});"></div>
			</div>
			<div class="menu_logo"></div>
		</div>
	</div>
	<div class="event_popup">
		<div class="event_popup_in">
			<div class="closebtn"></div>
			<div class="popup event1">
				<div class="title"></div>
				<div class="video">
					<div class="event_popup_1_videobtn" onclick="dataLayer.push({'event': 'Mob-Play'});"></div>
					<video width="601" height="338" id="event_popup_1_video" controls>
						<source src="images/video.mp4" type="video/mp4">
						Your browser does not support HTML5 video.
					</video>
				</div>
				<div class="btn_box">
					<div class="btn gotobuy_btn" onclick="dataLayer.push({'event': 'Mob-LiKeRuShou'});"></div>
					<div class="btn getsecret_btn" onclick="dataLayer.push({'event': 'Mob-MaShangGetNvShengMiMi'});"></div>
					<div class="btn share_btn" onclick="dataLayer.push({'event': 'Mob-BenZouXiangGao'});"></div>
				</div>
			</div>
			<div class="popup event3">
				<div class="btn_box">
					<div class="btn getsecret_btn" onclick="dataLayer.push({'event': 'Mob-MaShangGetNvShengMiMi'});"></div>
					<div class="btn share_btn" onclick="dataLayer.push({'event': 'Mob-BenZouXiangGao'});"></div>
				</div>
				<canvas id="event_popup_3_ani" width="750" height="1334"></canvas>
			</div>
			<div class="popup event2">
				<div class="btn_box">
					<div class="btn unlock_btn" onclick="dataLayer.push({'event': 'Mob-MaShangLiaoJie'});"></div>
					<div class="btn share_btn" onclick="dataLayer.push({'event': 'Mob-BenZouXiangGao'});"></div>
				</div>
				<canvas id="event_popup_2_ani" width="750" height="1334"></canvas>
			</div>
			<div class="popup event4">
				<div class="btn_box">
					<div class="btn gotobuy_btn" onclick="dataLayer.push({'event': 'Mob-LiKeRuShou'});"></div>
					<div class="btn more_msg_btn" onclick="dataLayer.push({'event': 'Mob-More'});"></div>
				</div>
				<canvas id="event_popup_4_ani" width="750" height="1334"></canvas>
			</div>
			<div class="popup event5">
				<div class="pic"></div>
			</div>
		</div>
	</div>
	<div class="stage menuDom">
		<div class="tip_box">
			<div class="iknow_btn"></div>
			<canvas id="tip_box" width="750" height="1334"></canvas>
		</div>
		<div class="event_box">
			<div class="box">
				<div class="icon">
					<span></span>
				</div>
				<div class="box_word">
					<span class="w1"></span>
					<span class="w2"></span>
					<span class="w3"></span>
					<span class="w4"></span>
					<span class="w5"></span>
				</div>
				<canvas id="event_box_bg" width="750" height="260"></canvas>
			</div>
			<div class="event_line">
				<div class="icon"></div>
				<div class="icon"></div>
				<div class="icon"></div>
				<div class="icon"></div>
				<div class="icon"></div>
			</div>
		</div>
		<div class="street_all">
			<div class="street_all_in">
				<div class="street">
					<div class="event_point_box">
						<div class="event_point cinema" onclick="dataLayer.push({'event': 'Mob-Flower'});"></div>
						<div class="event_point cafe_girl" onclick="dataLayer.push({'event': 'Mob-Flower'});"></div>
						<div class="event_point photographers" onclick="dataLayer.push({'event': 'Mob-Flower'});"></div>
						<div class="event_point medical" onclick="dataLayer.push({'event': 'Mob-Flower'});"></div>
						<div class="event_point play_phone" onclick="dataLayer.push({'event': 'Mob-Flower'});"></div>
					</div>
					<div class="guy">
						<div class="cafe_girl"></div>
						<div class="photographers"></div>
						<div class="play_phone"></div>
					</div>
					<img src="images/all_street_s.jpg">
				</div>
			</div>
		</div>
	</div>
</body>
</html>
