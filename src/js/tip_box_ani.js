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



(lib.arrow = function() {
	this.spriteSheet = ss["tip_box_ani_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.finger = function() {
	this.spriteSheet = ss["tip_box_ani_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.phone = function() {
	this.spriteSheet = ss["tip_box_ani_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.phone_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.phone();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,141);


(lib.finger_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.finger();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,108);


(lib.arrow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,195,22);


(lib.touch_phone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// phone
	this.instance = new lib.phone_1();
	this.instance.setTransform(38,70.5,1,1,0,0,0,38,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43));

	// finger
	this.instance_1 = new lib.finger_1();
	this.instance_1.setTransform(77.1,158,1,1,0,0,0,41,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:34.1},11).to({x:77.1},10).to({x:34.1},11).to({x:77.1},10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF8600").s().p("AkPItIAAxZIIfAAIAARZg");
	this.shape.setTransform(38.3,72.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8600").s().p("Aj3ItIAAxZIHvAAIAARZg");
	this.shape_1.setTransform(35.7,72.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF8600").s().p("AjfItIAAxZIG/AAIAARZg");
	this.shape_2.setTransform(33.1,72.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8600").s().p("AjIItIAAxZIGRAAIAARZg");
	this.shape_3.setTransform(30.6,72.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF8600").s().p("AiwItIAAxZIFhAAIAARZg");
	this.shape_4.setTransform(28,72.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF8600").s().p("AiYItIAAxZIExAAIAARZg");
	this.shape_5.setTransform(25.4,72.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF8600").s().p("AiAItIAAxZIEBAAIAARZg");
	this.shape_6.setTransform(22.8,72.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF8600").s().p("AhoItIAAxZIDRAAIAARZg");
	this.shape_7.setTransform(20.3,72.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8600").s().p("AhQItIAAxZIChAAIAARZg");
	this.shape_8.setTransform(17.7,72.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF8600").s().p("Ag4ItIAAxZIBxAAIAARZg");
	this.shape_9.setTransform(15.1,72.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF8600").s().p("AggItIAAxZIBBAAIAARZg");
	this.shape_10.setTransform(12.6,72.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF8600").s().p("AgJItIAAxZIASAAIAARZg");
	this.shape_11.setTransform(10,72.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF8600").s().p("AgJItIAAxZIATAAIAARZg");
	this.shape_12.setTransform(67,72.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF8600").s().p("AjHItIAAxZIGQAAIAARZg");
	this.shape_13.setTransform(46.1,72.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{x:35.7}}]},1).to({state:[{t:this.shape_2,p:{x:33.1}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:28}}]},1).to({state:[{t:this.shape_5,p:{x:25.4}}]},1).to({state:[{t:this.shape_6,p:{x:22.8}}]},1).to({state:[{t:this.shape_7,p:{x:20.3}}]},1).to({state:[{t:this.shape_8,p:{x:17.7}}]},1).to({state:[{t:this.shape_9,p:{x:15.1}}]},1).to({state:[{t:this.shape_10,p:{x:12.6}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},10).to({state:[{t:this.shape_10,p:{x:64.4}}]},1).to({state:[{t:this.shape_9,p:{x:61.8}}]},1).to({state:[{t:this.shape_8,p:{x:59.2}}]},1).to({state:[{t:this.shape_7,p:{x:56.6}}]},1).to({state:[{t:this.shape_6,p:{x:53.9}}]},1).to({state:[{t:this.shape_5,p:{x:51.3}}]},1).to({state:[{t:this.shape_4,p:{x:48.7}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_2,p:{x:43.5}}]},1).to({state:[{t:this.shape_1,p:{x:40.9}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(31).to({_off:false},0).wait(11));

	// Layer 5
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkRIpIAAxQIIjAAIAARQg");
	this.shape_14.setTransform(38.5,71.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.1,212);


(lib.phone_turn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.instance = new lib.arrow_1();
	this.instance.setTransform(97.5,76,1,1,0,0,0,97.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// phone
	this.instance_1 = new lib.phone_1();
	this.instance_1.setTransform(89,70.5,1,1,0,0,0,38,70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:109},14).to({x:89},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195,141);


// stage content:



(lib.tip_box_ani = function() {
	this.initialize();

	// touch_phone
	this.instance = new lib.touch_phone();
	this.instance.setTransform(396.5,920.1,1,1,0,0,0,50,106);

	// phone_turn
	this.instance_1 = new lib.phone_turn();
	this.instance_1.setTransform(288,472.5,1,1,0,0,0,97.5,70.5);

	// touch_phone
	this.instance_2 = new lib.touch_phone();
	this.instance_2.setTransform(498.6,508,1,1,0,0,0,50,106);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(565.5,1069,376.1,624.1);

})(lib4 = lib4 ||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib4, images, createjs, ss;