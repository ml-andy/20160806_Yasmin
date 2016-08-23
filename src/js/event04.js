(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 30,
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
	this.instance.setTransform(-306.1,-552.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-306.1,-552.1,601,408);


(lib.pd_txt02 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.txt02();
	this.instance.setTransform(-314.1,-562.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-314.1,-562.1,601,443);


(lib.pd_txt01 = function() {
	this.initialize();

	// txt01.png
	this.instance = new lib.txt01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,323,564);


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
p.nominalBounds = new cjs.Rectangle(0,21,323,564);


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


// stage content:
(lib.event04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_447 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(447).call(this.frame_447).wait(1));

	// pd
	this.instance = new lib.pd_pd_gp();
	this.instance.setTransform(243.8,931.7,1,1,0,0,0,175.5,140.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173).to({_off:false},0).to({y:891.7,alpha:1},15).wait(260));

	// pharmacist01
	this.instance_1 = new lib.pharmacist02_1();
	this.instance_1.setTransform(532.8,1054.3,1,1,0,0,0,330.5,382.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(173).to({_off:false},0).to({alpha:1},11).wait(264));

	// btn
	this.instance_2 = new lib.btnnext();
	this.instance_2.setTransform(319.3,580.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(183).to({_off:false},0).to({_off:true},145).wait(10).to({_off:false,rotation:180,x:408.3,y:651.6},0).wait(110));

	// 圖層 5
	this.instance_3 = new lib.PD_txt03();
	this.instance_3.setTransform(677.1,803.4,1,1,0,0,0,300,115);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(338).to({_off:false},0).to({y:783.4,alpha:1},14).wait(96));

	// 圖層 6
	this.instance_4 = new lib.pd_txt02();
	this.instance_4.setTransform(674.5,808.9,1,1,0,0,0,299.5,123);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(183).to({_off:false},0).to({y:787.9,alpha:1},14).wait(116).to({y:808.9,alpha:0},14).to({_off:true},1).wait(120));

	// txt_bg01
	this.instance_5 = new lib.txt_bg01();
	this.instance_5.setTransform(456.3,506.2,0.497,0.497,136.8,0,0,530.1,518);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).wait(1).to({regX:530.5,regY:520,scaleX:0.55,scaleY:0.55,x:445.5,y:481},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:432.8,y:450},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:418.4,y:414.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:403.7,y:378.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:390.5,y:346.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:380,y:320.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:372.1,y:301.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:366.6,y:287.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:363.1,y:278.8},0).wait(1).to({scaleX:1,scaleY:1,x:361.1,y:274.1},0).wait(1).to({regX:530,regY:518,scaleX:1,scaleY:1,x:362.2,y:273.8},0).wait(264));

	// pharmacist01
	this.instance_6 = new lib.pharmacist01_1();
	this.instance_6.setTransform(560.1,1022.3,1,1,0,0,0,367.5,574.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({regX:378.3,regY:599.5,x:569.8,y:1041.5},0).wait(1).to({x:568.6,y:1035.7},0).wait(1).to({x:567.5,y:1029.9},0).wait(1).to({regX:367.5,regY:574.5,x:555.6,y:999.1},0).wait(1).to({regX:378.3,regY:599.5,x:563.7,y:1010.6},0).wait(1).to({x:561.1,y:997.1},0).wait(1).to({x:558.4,y:983.6},0).wait(1).to({x:555.8,y:970.1},0).wait(1).to({x:553.1,y:956.6},0).wait(1).to({x:550.5,y:943.1},0).wait(1).to({x:547.8,y:929.6},0).wait(1).to({x:545.2,y:916.1},0).wait(1).to({x:542.5,y:902.6},0).wait(1).to({x:539.9,y:889.1},0).wait(1).to({x:537.2,y:875.6},0).wait(1).to({regX:367.5,regY:574.5,x:523.8,y:837.2},0).wait(1).to({regX:378.3,regY:599.5,x:533.9,y:858.6},0).wait(1).to({x:533.2,y:855.1},0).wait(1).to({x:532.5,y:851.5},0).wait(1).to({x:531.8,y:848},0).wait(1).to({x:531.1,y:844.4},0).wait(1).to({x:530.4,y:840.9},0).wait(1).to({x:529.7,y:837.4},0).wait(1).to({x:529,y:833.8},0).wait(1).to({x:528.3,y:830.3},0).wait(1).to({x:527.6,y:826.7},0).wait(1).to({regX:367.5,regY:574.5,x:516.1,y:798.2},0).wait(89).to({regX:378.3,regY:599.5,x:526.9,y:823.3},0).wait(1).to({x:527.1,y:823.7},0).wait(1).to({scaleX:1,scaleY:1,x:527.3,y:824.3},0).wait(1).to({scaleX:1,scaleY:1,x:527.7,y:825.2},0).wait(1).to({scaleX:1,scaleY:1,x:528.1,y:826.4},0).wait(1).to({scaleX:1,scaleY:1,x:528.7,y:827.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:529.4,y:829.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:530.2,y:831.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:531.2,y:834.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:532.3,y:837.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:533.5,y:840.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:534.9,y:844},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:536.5,y:848},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:538.2,y:852.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:540.1,y:857.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:542.2,y:862.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:544.5,y:868.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:546.9,y:874.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:549.5,y:881.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:552.3,y:888.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:555.3,y:896.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:558.5,y:904.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:561.8,y:913.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:565.2,y:922.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:568.7,y:931.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:572.4,y:940.6},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:576,y:950.1},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:579.7,y:959.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:583.3,y:969},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:586.9,y:978.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:590.4,y:987.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:593.7,y:995.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:596.9,y:1004},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:599.8,y:1011.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:602.6,y:1018.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:605.2,y:1025.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:607.5,y:1031.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:609.6,y:1036.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:611.5,y:1041.8},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:613.2,y:1046.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:614.6,y:1049.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:615.9,y:1053.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:617,y:1055.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:617.8,y:1058.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:618.5,y:1059.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:619.1,y:1061.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:619.4,y:1062.2},0).wait(1).to({x:619.6,y:1062.7},0).wait(1).to({regX:367.5,regY:574.5,x:611.1,y:1043.1},0).wait(1).to({regX:378.3,regY:599.5,x:619.7,y:1063,alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({regX:367.5,regY:574.5,x:611.1,y:1043.1,alpha:0},0).wait(265));

	// btn
	this.instance_7 = new lib.btnnext_1();
	this.instance_7.setTransform(280.5,678.2,1,1,0,0,0,20.5,20.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({_off:true},123).wait(293));

	// txt
	this.instance_8 = new lib.pd_txt01_mc();
	this.instance_8.setTransform(290.5,202.7,1,1,0,0,0,270.5,89);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).wait(122).to({y:543.9,alpha:0},11).to({_off:true},1).wait(282));

	// txt_bg01
	this.instance_9 = new lib.txt_bg01();
	this.instance_9.setTransform(148.9,529.8,0.553,0.553,121.1,0,0,530.3,518);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:530,scaleX:1,scaleY:1,x:32.6,y:383,alpha:1},10).wait(144).to({x:-340.2,y:100.4,alpha:0},11).to({_off:true},1).wait(282));

	// bg
	this.instance_10 = new lib.pd_bg();
	this.instance_10.setTransform(702.9,473,1.152,1.152,0,0,0,789,473);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:504.5,regY:717.5,scaleX:1.15,scaleY:1.15,x:375,y:753.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,y:751.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:375.1,y:749.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:375,y:746.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:375.1,y:744.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:741.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:375,y:739.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:736.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:734},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:375.1,y:731.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:375,y:729.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:727.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:725.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:724.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:723.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:722.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:721.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:720.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:720},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:719.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:719.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:719.1},0).wait(1).to({regX:789,regY:473,x:661.2,y:473.1},0).wait(1).to({regX:504.5,regY:717.5,scaleX:1,scaleY:1,x:375,y:718.8},0).wait(1).to({scaleX:1,scaleY:1,y:718.6},0).wait(1).to({scaleX:1,scaleY:1,y:718.4},0).wait(1).to({x:375.1,y:718.2},0).wait(1).to({scaleX:1,scaleY:1,y:718.1},0).wait(1).to({x:375,y:717.9},0).wait(1).to({scaleX:1,scaleY:1,x:375.1},0).wait(1).to({x:375,y:717.8},0).wait(1).to({y:717.7},0).wait(1).to({scaleX:1,scaleY:1,x:375.1,y:717.6},0).wait(1).to({x:375},0).wait(1).to({y:717.5},0).wait(1).to({regX:789,regY:473,x:659.5,y:473},0).wait(106).to({regX:789.1,scaleX:0.76,scaleY:0.76,x:590.3,y:606.4},31).wait(275));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125.2,595,1206.2,1653.6);

})(lib3 = lib3 ||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib3, images, createjs, ss;