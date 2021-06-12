var mouse, cat;
var mouseImg1 , catImg1;
var mouseImg2 , catImg2;
var mouseImg3 , catImg3;
var bg;
function preload() {
    //load the images here
    bg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png")
    catImg2 = loadAnimation("cat2.png","cat3.png")
    catImg3 = loadAnimation("/cat4.png")
    mouseImg1 = loadAnimation("mouse1.png")
    mouseImg2 = loadAnimation("mouse3.png")
    mouseImg3 = loadAnimation("mouse2.png")

}

function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here
    mouse = createSprite(150,600)
    mouse.addAnimation("mouse1" , mouseImg1)
    mouse.scale=0.22
    cat = createSprite(750,600)
    cat.addAnimation("cat1",catImg1)
    cat.scale =0.25
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catHappy", catImg3)
        cat.changeAnimation("catHappy")
        mouse.addAnimation("mouseHappy",mouseImg3)
        mouse.changeAnimation("mouseHappy")
        cat.scale = 0.35
        cat.x = 450
        mouse.scale = 0.2
    }
   
    drawSprites();
}


function keyPressed(){ 
    if(keyCode === LEFT_ARROW){ 
     cat.velocityX = -5;
     cat.addAnimation("catRunning", catImg2); 
     cat.changeAnimation("catRunning");
     mouse.addAnimation("mouseTeasing", mouseImg2); 
     mouse.frameDelay = 25; 
     mouse.changeAnimation("mouseTeasing"); 
    } 
    }
