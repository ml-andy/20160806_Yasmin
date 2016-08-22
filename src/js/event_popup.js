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



(lib.Mobile_phoneUI_bg = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_01 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_02 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_03 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_04 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_05 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_06 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_07 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_08 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_09 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_10 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_112 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_113 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_11 = function() {
	this.spriteSheet = ss["event_popup_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.txt_event02_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.txt_event02_113();
	this.instance.setTransform(133.4,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(4));

	// txt_event02_11-2.png
	this.instance_1 = new lib.txt_event02_112();
	this.instance_1.setTransform(133.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(4));

	// txt_event02_11.png
	this.instance_2 = new lib.txt_event02_11();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275.4,167);


(lib.txt_event02_10_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,519,190);


(lib.txt_event02_09_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_09();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,519,249);


(lib.txt_event02_08_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_08();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,519,142);


(lib.txt_event02_07_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_07();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,519,249);


(lib.txt_event02_06_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,519,194);


(lib.txt_event02_05_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,265,109);


(lib.txt_event02_04_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,518,197);


(lib.txt_event02_03_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,518,158);


(lib.txt_event02_02_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,413,113);


(lib.txt_event02_01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.txt_event02_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,413,202);


(lib.Mobile_phoneUI_bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Mobile_phoneUI_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_539 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(539).call(this.frame_539).wait(1));

	// txt_event02_11
	this.instance = new lib.txt_event02_11_1();
	this.instance.setTransform(137.7,2109.3,1,1,0,0,0,137.7,83.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(485).to({_off:false},0).wait(55));

	// txt_event02_10
	this.instance_1 = new lib.txt_event02_10_1();
	this.instance_1.setTransform(259.5,1900.8,1,1,0,0,0,259.5,95);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(429).to({_off:false},0).wait(111));

	// txt_event02_09
	this.instance_2 = new lib.txt_event02_09_1();
	this.instance_2.setTransform(403.6,1660.4,1,1,0,0,0,259.5,124.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(349).to({_off:false},0).wait(191));

	// txt_event02_08
	this.instance_3 = new lib.txt_event02_08_1();
	this.instance_3.setTransform(259.5,1440.7,1,1,0,0,0,259.5,71);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(289).to({_off:false},0).wait(251));

	// txt_event02_07
	this.instance_4 = new lib.txt_event02_07_1();
	this.instance_4.setTransform(404.6,1224.3,1,1,0,0,0,259.5,124.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(214).to({_off:false},0).wait(326));

	// txt_event02_06
	this.instance_5 = new lib.txt_event02_06_1();
	this.instance_5.setTransform(403.6,980.7,1,1,0,0,0,259.5,97);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(144).to({_off:false},0).wait(396));

	// txt_event02_05
	this.instance_6 = new lib.txt_event02_05_1();
	this.instance_6.setTransform(530.6,816.7,1,1,0,0,0,132.5,54.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).wait(411));

	// txt_event02_04
	this.instance_7 = new lib.txt_event02_04_1();
	this.instance_7.setTransform(259,639.2,1,1,0,0,0,259,98.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(69).to({_off:false},0).wait(471));

	// txt_event02_03
	this.instance_8 = new lib.txt_event02_03_1();
	this.instance_8.setTransform(404.1,437.1,1,1,0,0,0,259,79);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).wait(511));

	// txt_event02_02
	this.instance_9 = new lib.txt_event02_02_1();
	this.instance_9.setTransform(206.5,285.1,1,1,0,0,0,206.5,56.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).wait(526));

	// txt_event02_01
	this.instance_10 = new lib.txt_event02_01_1();
	this.instance_10.setTransform(456.6,101,1,1,0,0,0,206.5,101);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(540));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250.1,0,413,202);


(lib.event02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_539 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(539).call(this.frame_539).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg5zBClMAAAiFJMBznAAAMAAACFJg");
	mask.setTransform(-0.6,-92.8);

	// 圖層 2
	this.instance = new lib.Symbol1("synched",0,false);
	this.instance.setTransform(0.4,-138.8,1,1,0,0,0,331.5,368.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(128).to({startPosition:128},0).wait(1).to({x:-7.6,y:-216.7,startPosition:129},0).wait(15).to({x:0.4,y:-424.8,startPosition:144},0).wait(70).to({y:-688.8,startPosition:214},0).wait(75).to({y:-856.8,startPosition:289},0).wait(60).to({y:-1128.8,startPosition:349},0).wait(80).to({y:-1344.9,startPosition:429},0).wait(56).to({y:-1544.9,startPosition:485},0).wait(55));

	// Mobile_phoneUI_bg
	this.instance_1 = new lib.Mobile_phoneUI_bg_1();
	this.instance_1.setTransform(0,0,1,1,0,0,0,375,667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(540));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-667,750,1334);


// stage content:
(lib.event_popup = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.event02();
	this.instance.setTransform(1190.3,648.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1190.3,648.2,750,1334);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;