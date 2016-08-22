// var canvas, exportRoot;
// var loading_stage,loading_ani;
// images = images||{};
// ss = ss||{};

// var loader = new createjs.LoadQueue(false);
// loader.addEventListener("fileload", handleFileLoad);
// loader.addEventListener("complete", handleComplete);
// loader.loadFile({src:"images/loading_ani_atlas_.json", type:"spritesheet", id:"loading_ani_atlas_"}, true);
// loader.loadManifest(lib2.properties.manifest);

// function handleFileLoad(evt) {
//     if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
// }

// function handleComplete(evt) {
//     var queue = evt.target;
//     ss["loading_ani_atlas_"] = queue.getResult("loading_ani_atlas_");
//     exportRoot = new lib2.loading_ani();

//     loading_stage = new createjs.Stage(document.getElementById("loading"));
// 	loading_ani = loading_stage.addChild(exportRoot);
// 	loading_stage.update();
//     createjs.Ticker.setFPS(30);
//     createjs.Ticker.addEventListener("tick", StageListenter2);
// }
// function StageListenter2(){
//     console.log(1);
//     loading_stage.update();
// }
