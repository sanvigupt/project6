var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1,laser2,thief,diamond
function setup ()
{
  laser1=createSprite(100,250,200,5);
laser1.shapeColor="red";
laser1.velocityY=-3;

laser2=createSprite(300,130,200,5);
laser2.shapeColor="red";
laser2.velocityY=-3

thief=createSprite(10,390,20,20);
}
 
function draw()  {
  
thief.velocityX=0
thief.velocityY=0

background("white");
fill("red");
diamond=shape(390,0,380,10,390,0,100,10);

if (keyIsDown(LEFT_ARROW)) {
  
   thief.velocityX=-2;
   thief.velocityY=0;
}

if (keyIsDown(RIGHT_ARROW)){
  
   thief.velocityX=2;
   thief.velocityY=0;
}

if (keyIsDown(DOWN_ARROW)) {
  
   thief.velocityX=0;
   thief.velocityY=2;
}

if (keyIsDown(UP_ARROW)) {
  
  thief.velocityX=0;
  thief.velocityY=-2;
}

if (laser1.isTouching(thief)||laser2.isTouching(thief)) {
  fill("black");
  textSize(20);
  text("Theif is caught",170,200);
  
  thief.velocityX=0;
  thief.velocityY=0;
  laser1.velocityX=0;
  laser1.velocityY=0;
  laser2.velocityX=0;
  laser2.velocityY=0;
}

 createEdgeSprites();

 laser1.bounceOff(edges);
 laser2.bounceOff(edges);
 thief.bounceOff(edges);
 
 
 drawSprites();
 

}













// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
