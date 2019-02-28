 //Creative Coding Final Project - Amelia Radhiya
 //Canvas Eraser function inspiration from Daniel Harty https://codepen.io/DanielHarty/pen/jzGVWV

 document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);

var bubbles = [];
var alphaC;
var layer;
var img;
var sink;
var duck;
var duckY;
var rad = 30;

var w = 1920, h = 1080;

var pinkBath, purpleBath, tealBath;
var r,g,b;
var size, size2, size3;
var speed;
var pinkDist, tealDist, purpleDist;
var sinkDist;
var water1, water2, water3;
var imageState = 0;

var mouseIsDragged = false;

function preload(){
    img = loadImage("assets/bg.png");
    layer = loadImage("assets/mirror.png");
    duck = loadImage("assets/duck.png");
    sink = loadImage("assets/sink.png");
    water1 = loadImage("assets/water1.png");
    water2 = loadImage("assets/water2.png");
    water3 = loadImage("assets/water3.png");

}

function setup() {
pixelDensity(1);
  createCanvas(w, h);
  alphaC = color(0,0);
  speed = 0.25;
  duckY = 900;

  r=160;
    g=220;
    b=237;
}
 
function draw() {

pinkDist = dist(mouseX,mouseY,1130,880);
tealDist = dist(mouseX,mouseY,1275,900);
purpleDist = dist(mouseX,mouseY,1190,1000);

mirrorDist = dist(mouseX,mouseY,159,157);
sinkDist = dist(mouseX, mouseY, 375,800);
sink2Dist = dist(mouseX, mouseY, 240,725);

//for sink water
var count = frameCount % 11;
if(count == 0){
    imageState++;
    if(imageState > 3){
        imageState = 0;
    }
}

  image(img,0,0);
  image(layer,159,158);

    push();
    stroke(239,84,135);
    strokeWeight(5);
    fill(255,206,228);
    ellipse(1130,880,size);

    if(pinkDist<80){
    size = 175;
}
    else{
        size = 150;
    }

    pop();

    push();
    stroke(239,84,135);
    strokeWeight(5);
    fill(0, 186, 193);
    ellipse(1275,900,size2);

    if(tealDist<80){
    size2 = 175;
}
    else{
        size2 = 150;
    }
    pop();

    push();
    stroke(239,84,135);
    strokeWeight(5);
    fill(173, 168, 255);
    ellipse(1190,1000,size3);

    if(purpleDist<80){
    size3 = 175;
}
    else{
        size3 = 150;
    }
    pop();

    noStroke();
    fill(160,220,237);
    ellipse(1740,1090,700,300);

    noStroke();
    fill(r,g,b);
    ellipse(1740,1090,700,300);

    push();
    noStroke();
    fill(255,255,255,200);
    ellipse(1580,975,100,100);
    ellipse(1540,950,80,80);
    ellipse(1500,1000,75,75);
    ellipse(1550,1025,50,50);
    ellipse(1450,1015,40,40);
    ellipse(1925,990,75,75);
    ellipse(1640,970,65,65);
    ellipse(1880,975,45,45);
    ellipse(1460,1030,90,90);
    ellipse(1785,1065,50,50);
    ellipse(1750,1085,40,40);
    ellipse(1650,940,60,60);
    pop();

    push();
    noStroke();
    fill(255,255,255,250);
    ellipse(1600,995,50,50);
    ellipse(1520,1020,45,45);
    ellipse(1570,1045,25,25);
    ellipse(1420,1045,50,50);
    ellipse(1945,1010,45,45);
    ellipse(1660,990,35,35);
    ellipse(1900,995,25,25);
    ellipse(1805,1085,25,25);
    ellipse(1680,950,30,30);
    pop();

    image(duck,1690,duckY);

duckY = duckY + speed;
 if(duckY <= 895 || duckY >= 905){
   speed *= -1;
    }

if(sink2Dist<200){
  image(sink,235,720,sink.width*1.05,sink.height*1.05);
}
else{
  image(sink,240,725);
}

if(mouseIsPressed && sinkDist < 100){
    drawSprite();
}


for (var t = 0; t < random(15,25); t++){
    bubbles.push(new Bubble(random(0,1920),random(1090,2500),random(150,350)));
    bubbles[t].move();
    bubbles[t].display();
}



}

function mousePressed(){

pinkDist = dist(mouseX,mouseY,1130,880);
tealDist = dist(mouseX,mouseY,1275,900);
purpleDist = dist(mouseX,mouseY,1190,1000);

if(pinkDist<80){
    console.log("pink bath");
    r = 255;
    g = 206;
    b = 228;
}
else if(tealDist<80){
    console.log("teal bath");
    r = 0;
    g = 181;
    b = 188;
}
else if(purpleDist<80){
    console.log("purple bath");
    r = 173;
    g = 168;
    b = 255;
}
else if(pinkDist>80 && purpleDist>80 && tealDist>80){
    console.log("regular bath");
    console.log(mouseX,mouseY);
    r=160;
    g=220;
    b=237;
}

}

function mouseDragged() {
    if(mouseX < width/2){

  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y,mouseX,mouseY) < rad)) {
        layer.set(x,y,alphaC);
      }
    }
  }
}

  layer.updatePixels();


}

function drawSprite(){
    switch(imageState){
        case 0:
            image(water1,0,0);
            break;
        case 1:
            image(water2,0,0);
            break;
        case 2:
            image(water1,0,0);
        case 3:
            image(water3,0,0);
        default:
            break;
    }
}

function Bubble(x,y,s){
this.x = x;
  this.y = y;
  this.s = s;
  this.xspeed = random(-2, 3);
  this.yspeed = random(1,6);
  
  this.move = function(){
    this.x += (this.xspeed);
    this.y -= (this.yspeed);

    if(this.y < 0){
      var index = bubbles.indexOf(this);
      bubbles.splice(index,1);
    }
  };
  
  this.display = function(){
    
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    ellipse(this.x, this.y, this.s);
    pop();

      for(var n = 0; n <51; n++){
      push();
      stroke(r,g,b,255-(n*10));
      fill(0,0,0,0); 
      ellipse(this.x, this.y, this.s-(5*n)); 
      pop();
  } 
      push();
      noStroke();
      fill(255,255,255,150);
      ellipse(this.x*1.03,this.y*0.95,this.s/4);
      ellipse(this.x*0.95,this.y*1.03,this.s/10);
      pop();

    };
  
}





