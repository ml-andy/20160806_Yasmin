(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.btnnext = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.girl01_mouth03 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.PD = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.PD_bg = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pharmacist01 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.pharmacist01_hand01 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pharmacist02 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pharmacist_mouth01 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pharmacist_mouth02 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.txt01 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.txt02 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.txt03 = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.txt_BuBu_bg = function() {
	this.spriteSheet = ss["event04_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.txt_bg01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_BuBu_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1061,1040);


(lib.pharmacist01_hand01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pharmacist01_hand01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144,402);


(lib.pharmacist01_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_169 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(169).call(this.frame_169).wait(1));

	// Layer 9
	this.instance = new lib.girl01_mouth03();
	this.instance.setTransform(322.1,339.3,1.339,1.339);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(13).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(15));

	// pharmacist_mouth02.png
	this.instance_1 = new lib.pharmacist_mouth02();
	this.instance_1.setTransform(321.5,333,1.163,1.163);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(18));

	// pharmacist_mouth01.png
	this.instance_2 = new lib.pharmacist_mouth01();
	this.instance_2.setTransform(324.6,332.5,1.163,1.163);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},44).wait(4).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).to({_off:true},3).wait(4).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).wait(15));

	// Layer 1
	this.instance_3 = new lib.pharmacist02();
	this.instance_3.setTransform(34.8,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(170));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.8,70,687,1059);


(lib.PD_txt03 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt03();
	this.instance.setTransform(-304,-530.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-304,-530.1,601,408);


(lib.pd_txt02 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.txt02();
	this.instance.setTransform(-300.1,-530.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-300.1,-530.1,601,443);


(lib.pd_txt01 = function() {
	this.initialize();

	// txt01.png
	this.instance = new lib.txt01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,598,310);


(lib.pd_pd_gp = function() {
	this.initialize();

	// PD.png
	this.instance = new lib.PD();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314,282);


(lib.pd_bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.PD_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1009,1435);


(lib.btnarrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BqIBShqIhShrIAfABIBQBqIhVBsg");
	this.shape.setTransform(5.7,10.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.3,21.8);


(lib.pharmacist02_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.girl01_mouth03();
	this.instance.setTransform(372,181.2,1.099,1.099);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(14).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(14).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(14).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(4));

	// pharmacist_mouth02.png
	this.instance_1 = new lib.pharmacist_mouth02();
	this.instance_1.setTransform(371.5,176,0.954,0.954);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},4).wait(6).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},3).wait(7));

	// pharmacist_mouth01.png
	this.instance_2 = new lib.pharmacist_mouth01();
	this.instance_2.setTransform(374.1,175.6,0.954,0.954);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},16).wait(4).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},3).wait(10).to({_off:false},0).to({_off:true},3).wait(7).to({_off:false},0).to({_off:true},3).wait(6).to({_off:false},0).wait(4));

	// Layer 4
	this.instance_3 = new lib.pharmacist01_hand01_1();
	this.instance_3.setTransform(189.7,624.2,1,1,-22.2,0,0,58.1,387);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:386.9,scaleX:1,scaleY:1,rotation:-26.3,x:189.6,y:624.1},7).to({regX:58,regY:387,scaleX:1,scaleY:1,rotation:-27.5,y:624.2},8).wait(45).to({regX:58.1,rotation:-22.2,x:189.7},16).to({regX:58,rotation:-27.5,x:189.6},19).wait(58).to({regX:58.1,rotation:-22.2,x:189.7},22).wait(1));

	// Layer 1
	this.instance_4 = new lib.pharmacist01();
	this.instance_4.setTransform(173.2,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-22,680.7,812);


(lib.pd_txt01_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.pd_txt01();
	this.instance.setTransform(270.5,110,1,1,0,0,0,270.5,89);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:89,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,21,598,310);


(lib.btnnext_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.btnarrow();
	this.instance.setTransform(19.8,21.2,1,1,0,0,0,5.7,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:23.3},9).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7900").s().p("AiPCRQg9g9AAhUQAAhUA9g7QA7g9BUAAQBUAAA9A9QA7A7ABBUQgBBUg7A9Qg9A7hUABQhUgBg7g7g");
	this.shape.setTransform(20.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.event04_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_421 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(421).call(this.frame_421).wait(1));

	// pd
	this.instance = new lib.pd_pd_gp();
	this.instance.setTransform(-131.2,264.7,1,1,0,0,0,175.5,140.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147).to({_off:false},0).to({y:224.7,alpha:1},15).wait(260));

	// pharmacist01
	this.instance_1 = new lib.pharmacist02_1();
	this.instance_1.setTransform(157.8,387.3,1,1,0,0,0,330.5,382.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(147).to({_off:false},0).to({alpha:1},11).wait(264));

	// btn
	this.instance_2 = new lib.btnnext();
	this.instance_2.setTransform(-28.6,-65.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(157).to({_off:false},0).to({_off:true},145).wait(10).to({_off:false,rotation:180,x:51.4,y:12.3},0).wait(110));

	// 圖層 17
	this.instance_3 = new lib.PD_txt03();
	this.instance_3.setTransform(302.1,136.4,1,1,0,0,0,300,115);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(312).to({_off:false},0).to({y:116.4,alpha:1},14).wait(96));

	// 圖層 18
	this.instance_4 = new lib.pd_txt02();
	this.instance_4.setTransform(299.5,141.9,1,1,0,0,0,299.5,123);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(157).to({_off:false},0).to({y:120.9,alpha:1},14).wait(116).to({y:141.9,alpha:0},14).to({_off:true},1).wait(120));

	// txt_bg01
	this.instance_5 = new lib.txt_bg01();
	this.instance_5.setTransform(81.3,-160.8,0.497,0.497,136.8,0,0,530.1,518);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({_off:false},0).wait(1).to({regX:530.5,regY:520,scaleX:0.55,scaleY:0.55,x:70.5,y:-185.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:57.8,y:-216.9},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:43.4,y:-252.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:28.7,y:-288.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:15.5,y:-320.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:5,y:-346.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-2.9,y:-365.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-8.4,y:-379.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-11.9,y:-388.2},0).wait(1).to({scaleX:1,scaleY:1,x:-13.9,y:-392.9},0).wait(1).to({regX:530,regY:518,scaleX:1,scaleY:1,x:-12.8,y:-393.2},0).wait(264));

	// btn
	this.instance_6 = new lib.btnnext_1();
	this.instance_6.setTransform(277,598.5,1,1,0,0,0,20.5,20.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({_off:true},108).wait(282));

	// txt
	this.instance_7 = new lib.pd_txt01_mc();
	this.instance_7.setTransform(-30.6,403.6,1,1,0,0,0,270.5,89);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).wait(96).to({y:443.6,alpha:0},11).to({_off:true},1).wait(282));

	// txt_bg01
	this.instance_8 = new lib.txt_bg01();
	this.instance_8.setTransform(57.3,472.8,0.553,0.553,0.4,0,0,530.1,517.9);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:530,regY:518,scaleX:1,scaleY:1,x:-9.4,y:647.8,alpha:1},10).wait(118).to({x:-47.8,y:811.4,alpha:0},11).to({_off:true},1).wait(282));

	// pharmacist01
	this.instance_9 = new lib.pharmacist01_1();
	this.instance_9.setTransform(161.1,233.3,1,1,0,0,0,367.5,574.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({regX:378.3,regY:599.5,x:170.8,y:252.5},0).wait(1).to({x:169.7,y:246.7},0).wait(1).to({x:168.5,y:240.9},0).wait(1).to({regX:367.5,regY:574.5,x:156.6,y:210.1},0).wait(1).to({regX:378.3,regY:599.5,x:164.7,y:221.7},0).wait(1).to({x:162.1,y:208.2},0).wait(1).to({x:159.4,y:194.7},0).wait(1).to({x:156.8,y:181.2},0).wait(1).to({x:154.1,y:167.7},0).wait(1).to({x:151.5,y:154.2},0).wait(1).to({x:148.8,y:140.7},0).wait(1).to({x:146.2,y:127.2},0).wait(1).to({x:143.5,y:113.7},0).wait(1).to({x:140.9,y:100.2},0).wait(1).to({x:138.2,y:86.7},0).wait(1).to({regX:367.5,regY:574.5,x:124.8,y:48.2},0).wait(1).to({regX:378.3,regY:599.5,x:134.9,y:69.7},0).wait(1).to({x:134.2,y:66.1},0).wait(1).to({x:133.5,y:62.6},0).wait(1).to({x:132.8,y:59},0).wait(1).to({x:132.1,y:55.5},0).wait(1).to({x:131.4,y:52},0).wait(1).to({x:130.7,y:48.4},0).wait(1).to({x:130,y:44.9},0).wait(1).to({x:129.3,y:41.3},0).wait(1).to({x:128.6,y:37.8},0).wait(1).to({regX:367.5,regY:574.5,x:117.1,y:9.2},0).wait(63).to({regX:378.3,regY:599.5,x:128,y:34.4},0).wait(1).to({x:128.2,y:35},0).wait(1).to({scaleX:1,scaleY:1,x:128.5,y:35.9},0).wait(1).to({scaleX:1,scaleY:1,x:128.9,y:37.3},0).wait(1).to({scaleX:1,scaleY:1,x:129.5,y:39.1},0).wait(1).to({scaleX:1,scaleY:1,x:130.2,y:41.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:131.1,y:44},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:132.1,y:47.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:133.3,y:51},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:134.7,y:55.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:136.3,y:60.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:138.1,y:65.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:140,y:71.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:142.2,y:78.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:144.6,y:85.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:147.2,y:93.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:150,y:102.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:153.1,y:112.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:156.4,y:122.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:160,y:133.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:163.7,y:144.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:167.7,y:157.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:171.8,y:170.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:176.1,y:183.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:180.6,y:197.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:185.2,y:211.4},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:189.8,y:225.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:194.4,y:240.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:199,y:254.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:203.5,y:268.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:207.9,y:281.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:212,y:294.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:216,y:307},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:219.8,y:318.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:223.2,y:329.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:226.5,y:339.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:229.4,y:348.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:232.1,y:356.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:234.4,y:364},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:236.5,y:370.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:238.4,y:376.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:240,y:381.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:241.3,y:385.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:242.4,y:388.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:243.2,y:391.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:243.9,y:393.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:244.4,y:394.9},0).wait(1).to({x:244.7,y:395.7},0).wait(1).to({regX:367.5,regY:574.5,x:236.1,y:376.1},0).wait(1).to({regX:378.3,regY:599.5,x:244.7,y:396,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({regX:367.5,regY:574.5,x:236.1,y:376.1,alpha:0},0).wait(265));

	// bg
	this.instance_10 = new lib.pd_bg();
	this.instance_10.setTransform(327.9,-194,1.152,1.152,0,0,0,789,473);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:504.5,regY:717.5,scaleX:1.15,scaleY:1.15,x:0,y:86.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:84.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:0.1,y:82.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:0,y:79.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:0.1,y:77.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:74.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:0,y:72.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:69.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:67},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:0.1,y:64.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:0,y:62.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:60.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:58.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:57.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:56.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:55.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:54.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:53.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:53},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:52.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:52.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:52.1},0).wait(1).to({regX:789,regY:473,x:286.2,y:-193.9},0).wait(1).to({regX:504.5,regY:717.5,scaleX:1,scaleY:1,x:0,y:51.8},0).wait(1).to({scaleX:1,scaleY:1,y:51.6},0).wait(1).to({scaleX:1,scaleY:1,y:51.4},0).wait(1).to({x:0.1,y:51.2},0).wait(1).to({scaleX:1,scaleY:1,y:51.1},0).wait(1).to({x:0,y:50.9},0).wait(1).to({scaleX:1,scaleY:1,x:0.1},0).wait(1).to({x:0,y:50.8},0).wait(1).to({y:50.7},0).wait(1).to({scaleX:1,scaleY:1,x:0.1,y:50.6},0).wait(1).to({x:0},0).wait(1).to({y:50.5},0).wait(1).to({regX:789,regY:473,x:284.5,y:-194},0).wait(80).to({regX:789.1,scaleX:0.76,scaleY:0.76,x:215.3,y:-60.6},31).wait(275));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-581.3,-739,1162.7,1653.6);


// stage content:



(lib.event04 = function() {
	this.initialize();

	// event04
	this.instance = new lib.event04_1();
	this.instance.setTransform(1486.4,654.2,1,1,0,0,0,0,87.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1280,494.4,1162.7,1653.6);

})(lib3 = lib3 ||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib3, images, createjs, ss;