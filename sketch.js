var hr, min, sec;
var secAngle, minAngle, hrAngle;

function preload(){}

function setup() {
  createCanvas(1350,670);

  angleMode(DEGREES);  
}

function draw() {
  background("black");

  textSize(30);
  fill("white");
  text(hr%12 + ":" + min + ":" + sec, 635, 200);

  translate(675,430);
  rotate(-90)

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

    push();
    rotate(secAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();

  
    push();
    rotate(minAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop();

    strokeWeight(10);
    noFill();

    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    stroke(255,0,255);
    point(0,0)

    stroke(255,0,0);
    arc(0,0,300,300,0,secAngle);

    stroke(0,255,0);
    arc(0,0,280,280,0,minAngle);

    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

    stroke (255);
    point(0,0);
}