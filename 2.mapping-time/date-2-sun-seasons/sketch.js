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

function setup(){
    createCanvas(800,800)
   background(38,1,1);
    print('starting time:', clock())
    
    
    var[pointX, pointY]= coordsAt(width/2, height/2, 90,10)
    print(pointX)
}

function draw() {
 background(38,1,1);
colorMode(RGB);

var now = clock()
var pct = now.progress.day
fill(221,242,61,150)

 push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount *pct);
  star(0, 0, 50, 100, 24*pct);
  pop();

let from = color(77, 89, 35,150);
let to = color(140, 39, 3,150);
let rectColor = lerpColor(from, to, now.season/4);


var spacing = 10
var seasonAngle = map(now.progress.season, 0, 1, 0, 360)
var seasonLocation = pointAt (width/2, height/2, seasonAngle, 300)

for (var i = 0; i<4; i++){
   if(i<= now.season){
 
       noStroke();
       fill (rectColor)
        rect(seasonLocation.x, seasonLocation.y, 10*i, 200)
      
   }else{
       fill(0)
        
   }
}
  
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

// var monthAngle = map(now.progress.month, 0, 1, 0,360)
// var monthLocation = pointAt (width/2, height/2, monthAngle, 90)

// //var otherLocation = pointAt(secLocation.x, secLocation.y, secAngle, 30)

// fill('red')
// //line(secLocation.x, secLocation.y, otherLocation.x, otherLocation.y )
// //cirlce(secLocation.x, secLocation.y,10)

// }