function coordsAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return [cx+cos(theta) * dist, 
          cy+sin(theta) * dist]
}

//returns a single variable like the now variable
function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist, 
          y:cy+sin(theta) * dist}
}

function setup() {
  createCanvas(400, 800);
}

function draw() {
background(0);
noFill();


var now = clock()


var secAngle = map(now.progress.sec, 0, 1, 0, 360 )
var point = pointAt(width*.5, height*.5, secAngle, 150)


var minAngle = map(now.progress.min, 0, 1, 0, 360 )
var pointb = pointAt(width*.5, height*.5, minAngle, 200)

var hourAngle = map(now.progress.hour, 0, 1, 0, 360 )
var pointc = pointAt(width*.5, height*.5, hourAngle, 200)


strokeWeight(2);
stroke(70,178,127);
fill(70,178,127,100);
circle(point.x, point.y, 40)
line(point.x, point.y, 200,0)

strokeWeight(2.5);
stroke(255,230,0);
fill(255,230,0,100);
polygon(pointb.x, pointb.y, 40, 5);
line(pointb.x, pointb.y, 200,0)

strokeWeight(3);
stroke(0,128,66);
fill(0,128,66,100);
rect(pointc.x, pointc.y, 80, 80)
line(pointc.x+40, pointc.y+40, 200, 0)
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

