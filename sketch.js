var hr, mn, sc;
var hrAngle, scAngle, minAngle;
function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);
  hr = hour(); /// In 24 hour format, hr%12 13/12=1pm, 17/12 = 5pm  11/12 = 11am
  mn = minute();
  sc = second();
  push();
  fill("white");
  text(hr + ":" + mn + ":" + sc, 180, 20);
  pop();

  translate(200, 200);
  rotate(-90);
  scAngle = map(sc, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  minAngle = map(mn, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  //line(x1,y1,x2,y2)
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  //line(x1,y1,x2,y2)
  line(0, 0, 50, 0);
  pop();

  push();

  rotate(minAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  //line(x1,y1,x2,y2)
  line(0, 0, 75, 0);
  pop();

  noFill();
  strokeWeight(10);
  stroke(255, 0, 0);
  arc(0, 0, 300, 300, 0, scAngle);

  stroke(0, 255, 0);
  arc(0, 0, 280, 280, 0, minAngle);

  stroke(0, 0, 255);
  arc(0, 0, 260, 260, 0, hrAngle);
}
