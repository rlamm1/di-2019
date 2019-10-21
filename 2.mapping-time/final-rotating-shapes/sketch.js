let a = 0.0;
let s = 0.0;

var circle1 = {
 x: 0,
 y: 0,
 diameter: 80

};

var circle2 = {
 x: 0,
 y: 0,
 diameter: 50
}

function coordsAt(cx, cy, angle, dist) {
 var theta = angle / 360 * TWO_PI
 return [cx + cos(theta) * dist,
  cy + sin(theta) * dist
 ]
}

//returns a single variable like the now variable
function pointAt(cx, cy, angle, dist) {
 var theta = angle / 360 * TWO_PI
 return {
  x: cx + cos(theta) * dist,
  y: cy + sin(theta) * dist
 }
}


function setup() {
 createCanvas(600, 600);
 noStroke();
 rectMode(CENTER);
 // background(102);
}

function draw() {
 background(0);
 colorMode(RGB);

 var now = clock()


 var secAngle = map(now.progress.sec, 0, 1, 0, 360)
 var point = pointAt(width * .5, height * .5, secAngle, 150)

 var minAngle = map(now.progress.min, 0, 1, 0, 360)
 var pointb = pointAt(width * .5, height * .5, minAngle, 200)

 var hourAngle = map(now.progress.hour, 0, 1, 0, 360)
 var pointc = pointAt(width * .5, height * .5, hourAngle, 200)

 strokeWeight(1.5);
 stroke(70, 178, 127);
 fill(70, 178, 127, 50);
 circle(point.x, point.y, 30)
 stroke(255, 250, 6, 150);
 line(point.x, point.y, 300, 0)

 strokeWeight(1.5);
 stroke(70, 178, 127);
 fill(70, 178, 127, 100);
 polygon(pointb.x, pointb.y, 20, 3);
 stroke(255, 250, 6, 150);
 line(pointb.x, pointb.y, 300, 0)

 strokeWeight(1.5);
 stroke(70, 178, 127);
 fill(70, 178, 127, 200);
 rect(pointc.x, pointc.y, 50, 50)
 stroke(255, 250, 6, 150);
 line(pointc.x, pointc.y, 300, 0);

 line(circle2.x, circle2.y, 300, 0);


 //find how to draw arc on a line


//Slowly increase 'a' and then animate 's' with
//a smooth cyclical motion by finding the cosine of 'a'
 a = a + 0.04;
 s = -sin(a) * 2;
 s2 = sin(a) * 2;
 
 
 //Translate our rectangle from the origin to the middle of
 //the canvas, then scale it with 's'
 var pct = now.progress.moon
 var pct2 = now.progress.week

 translate(width / 2, height / 2);
 //scale(s);
 let from = color(255, 250, 6);
 let to = color(22, 57, 101);
 let circColor = lerpColor(from, to, now.progress.day);
 strokeWeight(.5);
 fill(circColor)
  push();
 rotate(now.progress.day);
 // ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
 star(0, 0, 90, 30, 24 );
 pop();

 //moon
 push();
 translate(175, 0);
 // var moonAngle = map(now.progress.moon, 0, 1, 0, 360 )
 // var pointd = pointAt(0, 0, moonAngle, 10)
 stroke(22, 57, 101);
 strokeWeight(.35);

 let from1 = color(255, 255, 255,60);
 let to1 = color(22, 57, 101,60);
 let arcColor = lerpColor(from1, to1, now.progress.moon);
 fill(arcColor);
 scale(s * 3)
 arc(0, 0, 12, 12, 0, (PI + PI) * pct);
 
 noFill();
 strokeWeight(.25);
 arc(0, 0, 10, 10, 0, (PI+ PI) * pct);
 pop();

 translate(-175, 0);
 // var moonAngle = map(now.progress.moon, 0, 1, 0, 360 )
 // var pointd = pointAt(0, 0, moonAngle, 10)
 stroke(255, 250, 6, 80);
 strokeWeight(.35);
  noFill();
 let from2 = color(255, 255, 255,60);
 let to2 = color(22, 57, 101,60);
 let arcColor2 = lerpColor(from2, to2, now.progress.week);
 fill(arcColor2);

 scale(s2 * 3)
// arc(0, 0, 15, 15, 0, (PI + PI) * pct);
polygon(circle2.x, circle2.y, 10, 7 * pct2);
  noFill();
 strokeWeight(.25);
// arc(0, 0, 12, 12, 0, (PI + PI) * pct);
polygon(circle2.x, circle2.y, 8, 7 * pct2);
 // push();
 // //arc(pointd.x, pointd.y, 20, 20, 0, (PI+PI)*pct);
 // translate(0, 0);
 // fill(71, 156, 255, 150);
 // //scale(s)
 // stroke(255, 250, 6, 150);
 // strokeWeight(.5);
 // polygon(circle2.x, circle2.y, 30, 7 * pct2);


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

function star(x, y, radius1, radius2, npoints) {
 let angle = TWO_PI / npoints;
 let halfAngle = angle / 2.0;
 beginShape();
 for (let a = 0; a < TWO_PI; a += angle) {
  let sx = x + cos(a) * radius2;
  let sy = y + sin(a) * radius2;
  vertex(sx, sy);
  sx = x + cos(a + halfAngle) * radius1;
  sy = y + sin(a + halfAngle) * radius1;
  vertex(sx, sy);
 }
 endShape(CLOSE);
}







