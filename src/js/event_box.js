(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 390,
	height: 280,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib.event_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(14).call(this.frame_27).wait(1));

	// 圖層 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,140,164,0.9)").s().p("AhYBUQgegHgCgyQAAgQACgRIACgQIACgKQADgLAEgKQAQgfAdgBQAUAAAcAFQAfAFAcAKQAhAMATARQAWATACAWQABAXgcATQgXAQgpAKQghAJglADIgZABQgPAAgIgCg");
	this.shape.setTransform(193,137.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,140,164,0.9)").s().p("AA5CrQghAAgwgJQgogIggADQgfgCgQgJQghgSgGg3QgQg1AbgoQASgfAcgWQAhgcAigVQApgdAhgLQAxgdAvASQAnASARAtQAVAngCA2QAGAugNAxQgIAxgOAeQgTAYghAAQgVAAgcgKg");
	this.shape_1.setTransform(189.8,136);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,140,164,0.9)").s().p("AgaENQgrgOg6geQgvgYgaACQgdgGgRgOQglgegJg7QgfhaAzhAQAhgvA5grQBCgzBCglQBOguBBgMQBTgcBAAlQA6AmAFBUQAKBHggBgQgVBVgtBSQgnBPgeAkQgcAZglAAQgvAAg8gog");
	this.shape_2.setTransform(191.3,136.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,140,164,0.9)").s().p("Ah3FxQg2gehCgxQg1gpgVABQgagKgTgUQgogpgOg+Qgth+BKhaQAyg+BVhBQBjhLBig0QB0g/BggOQB1gaBRA4QBNA5gHB8QgBBog+CMQgwB5hNB0QhFBrguAqQgkAcguAAQhFAAhehGg");
	this.shape_3.setTransform(193.8,137.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,140,164,0.9)").s().p("AjXHVQg/guhLhFQg8g5gOAAQgYgOgVgZQgqg0gThDQg8ijBihxQBChOByhWQCDhjCChDQCbhQB+gQQCXgZBiBMQBgBMgSCjQgNCKhcC3QhLCehtCUQhkCJg9AwQgtAgg3AAQheAAh9hmg");
	this.shape_4.setTransform(196.4,138.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,140,164,0.9)").s().p("Ak3I4QhKg8hShaQhDhJgJgBQgVgSgWgfQgug/gWhHQhLjIB6iJQBRheCOhrQCkh7CjhSQDBhhCcgSQC5gXB0BfQByBfgeDLQgXCqh7DkQhmDCiNC1QiCCnhNA1Qg2Akg9AAQh5AAiciGg");
	this.shape_5.setTransform(199.1,139.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,140,164,0.9)").s().p("AmYKcQhThMhbhtQhJhagDgBQgTgWgYglQgxhKgahLQhajuCSihQBhhtCriAQDEiTDDhhQDohzC7gTQDagWCFBzQCGBygqDzQgjDLiYEPQiBDnitDWQihDEhcA7Qg9AohIAAQiTAAi7img");
	this.shape_6.setTransform(201.8,140);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,140,164,0.9)").s().p("ABQLrQiBgVi5g/QiYg0hmAHQhqgMg6goQh3hRgbjEQhMjxCAi2QBXiECNhtQCliECmhhQDIh+CogpQDehlC+BdQCjBeApDXQA6C4g2D/QgTDeheDeQhKDXhJBwQhPBVh3AAQhxAAiWhOg");
	this.shape_7.setTransform(183.3,133.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,140,164,0.9)").s().p("AABNHQjmgOjIAPQjBAAhdgrQi+hZgak9Qg/jxBtjPQBNibBwhYQCFh2CKhgQCqiKCWhAQDgi0D1BJQDCBJB7C7QCWClAuDsQBZDYgNDnQAMDpg2CmQh4DPlMhDQh2AVihAAQhUAAhfgGg");
	this.shape_8.setTransform(176,126.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,140,164,0.9)").s().p("AtyOlQkFhfgZm3QgxjxBajnQBCiyBThEQBmhoBshfQCLiWCEhWQDmkDErAzQDgA1DOCgQDyCRCRDaQDGDUBDDsQBjD8gkDbQhVD6lnAXQjkBXl0AdIpfAvQgxACgtAAQjRAAhpgmg");
	this.shape_9.setTransform(179.1,129.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,140,164,0.9)").s().p("AwmQtQlLhmgaoxQgjjxBIj+QA4jKA1gwQBGhZBQhfQBrihBxhtQDqlRFlAdQD/AhEeCEQFOB+D0DHQE0DOCSD2QC6ENgREQQgyEkmCByQkUCNnRBLQmGA/mLAfQhtAGhbAAQjYAAhygjg");
	this.shape_10.setTransform(183.5,132.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,140,164,0.9)").s().p("AzeS2QmRhtgZqqQgWjxA2kXQAtjhAYgbQAnhMAzhdQBLitBfiEQDumgGdAJQEdAMFyBoQGpBrFXC1QGhDHDiD/QEQEhACFEQgOFOmeDNQlDDDowB4QnVBmntAmQisAMiHAAQjfAAh7ghg");
	this.shape_11.setTransform(188.2,135.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,140,164,0.9)").s().p("A2WVAQnYhzgZskQgIjyAjkuQAjj4gFgIQAHg9AWhcQAsi5BMiaQDynvHVgNQE7gIHEBMQIGBYG6CiQIODBEyEHQFmE0AVF5QAVF4m4EoQl0D5qNCnQolCMpPAuQjpATiwAAQjpAAiEghg");
	this.shape_12.setTransform(193,137.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib4 = lib4||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib4, images, createjs, ss;