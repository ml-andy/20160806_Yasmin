(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap41 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap50 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap51 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap52 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap53 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap54 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap55 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap57 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap58 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap59 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap60 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap64 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap67 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Brush01 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Brush02 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Brush03 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Brush04 = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.infinite = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.loading_txt = function() {
	this.spriteSheet = ss["loading_pc_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.txt = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.loading_txt();
	this.instance.setTransform(646.2,0,0.775,0.775);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(646.2,0,420,45);


(lib.loading_pattern = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.infinite();

	this.instance_1 = new lib.Bitmap41();

	this.instance_2 = new lib.Bitmap42();

	this.instance_3 = new lib.Bitmap43();

	this.instance_4 = new lib.Bitmap44();

	this.instance_5 = new lib.Bitmap45();

	this.instance_6 = new lib.Bitmap46();

	this.instance_7 = new lib.Bitmap47();

	this.instance_8 = new lib.Bitmap48();

	this.instance_9 = new lib.Bitmap49();

	this.instance_10 = new lib.Bitmap50();

	this.instance_11 = new lib.Bitmap51();

	this.instance_12 = new lib.Bitmap52();

	this.instance_13 = new lib.Bitmap53();

	this.instance_14 = new lib.Bitmap54();

	this.instance_15 = new lib.Bitmap55();

	this.instance_16 = new lib.Bitmap57();

	this.instance_17 = new lib.Bitmap58();

	this.instance_18 = new lib.Bitmap59();

	this.instance_19 = new lib.Bitmap60();

	this.instance_20 = new lib.Bitmap62();

	this.instance_21 = new lib.Bitmap63();

	this.instance_22 = new lib.Bitmap64();

	this.instance_23 = new lib.Bitmap65();

	this.instance_24 = new lib.Bitmap66();

	this.instance_25 = new lib.Bitmap67();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},6).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279,131);


(lib.btn_loading_8_2 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Brush04_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Brush04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,280,76);


(lib.Brush03_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Brush03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321,73);


(lib.Brush02_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Brush02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,351,79);


(lib.Brush01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Brush01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,350,75);


(lib.btn_enter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// btn_loading_8_2
	this.instance = new lib.btn_loading_8_2();
	this.instance.setTransform(164.5,107,1,1,0,0,0,127.5,58);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:97,alpha:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Brush04_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Brush04_1();
	this.instance.setTransform(-605.2,25.7,0.817,0.817,0,0,0,150.1,38);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:150,scaleX:3.31,scaleY:3.31,x:1714.9,y:214.1,alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-727.8,-5.3,228.7,62.1);


(lib.Brush03_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Brush03_1();
	this.instance.setTransform(-539.3,36.5,0.285,0.285,0,0,0,200.1,36.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:200,scaleX:1.81,scaleY:1.81,x:1564.1,alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-596.4,26.1,91.5,20.8);


(lib.Brush02_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Brush02_1();
	this.instance.setTransform(-515.3,78.6,0.525,0.525,0,0,0,200,39.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:39.5,scaleX:3.75,scaleY:3.75,x:2891.7,y:39.6,alpha:1},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-620.3,57.8,184.3,41.5);


(lib.Brush01_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Brush01_1();
	this.instance.setTransform(-562.2,37.1,0.398,0.398,0,0,0,175.1,37.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:37.5,scaleX:1.63,scaleY:1.63,x:417.6,y:37.5,alpha:1},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-631.9,22.2,139.4,29.9);


// stage content:



(lib.loading_pc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// btn
	this.instance = new lib.btn_enter();
	this.instance.setTransform(377,773,1,1,0,0,0,137,63);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(23));

	// txt
	this.instance_1 = new lib.txt();
	this.instance_1.setTransform(286.1,666.5,1,1,0,0,0,182.1,104.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:636.5,alpha:1},18).wait(23));

	// loading_pattern
	this.instance_2 = new lib.loading_pattern();
	this.instance_2.setTransform(960.2,638.5,0.656,0.656,0,0,0,139.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// 圖層 5
	this.instance_3 = new lib.Brush03_mc();
	this.instance_3.setTransform(960.1,595.4,0.385,0.385,22.5,0,0,-561,36.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},0).wait(19));

	// 圖層 6
	this.instance_4 = new lib.Brush04_mc();
	this.instance_4.setTransform(960.2,595.5,0.385,0.385,120,0,0,-601.8,37.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).wait(23));

	// 圖層 7
	this.instance_5 = new lib.Brush03_mc();
	this.instance_5.setTransform(960.2,595.5,0.385,0.385,90,0,0,-560.7,36.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(31));

	// 圖層 8
	this.instance_6 = new lib.Brush02_mc();
	this.instance_6.setTransform(960.1,595.4,0.385,0.385,-165,0,0,-564,39.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({_off:false},0).wait(43));

	// 圖層 9
	this.instance_7 = new lib.Brush01_mc();
	this.instance_7.setTransform(960.1,595.5,1,1,-75,0,0,-595.3,37.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).wait(36));

	// 圖層 10
	this.instance_8 = new lib.Brush04_mc();
	this.instance_8.setTransform(960.2,595.5,1,1,45,0,0,-601.8,38);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(39));

	// 圖層 11
	this.instance_9 = new lib.Brush03_mc();
	this.instance_9.setTransform(960.3,595.5,1,1,135,0,0,-560.9,36.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).wait(45));

	// 圖層 12
	this.instance_10 = new lib.Brush02_mc();
	this.instance_10.setTransform(960.2,595.4,1,1,-135,0,0,-564.1,39.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).wait(34));

	// 圖層 13
	this.instance_11 = new lib.Brush01_mc();
	this.instance_11.setTransform(960.1,595.6,1,1,-45,0,0,-595.3,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1828.7,1052.1,183,169.4);

})(lib2 = lib2 ||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib2, images, createjs, ss;