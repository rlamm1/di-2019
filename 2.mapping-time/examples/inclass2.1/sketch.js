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
    createCanvas(1000,1000)
    
    print('starting time:', clock())
    // var aPoint = pointAt(width/2, height/2, 90,10)
    // print(aPoint.y)
    
    var[pointX, pointY]= coordsAt(width/2, hieght/2, 90,10)
    print(pointX)
}

function draw() {
background('white');
colorMode(RGB);

var now = clock()

fill(0)
circle (smooth, height*.66, radius)


var now = clock()
fill(0)
circle(width/2, height/2, 10)


var minAngle = map(now.progress.hour, 0, 1, 0,360)
var minLocation = pointAt (width/2, height/2, minAngle, 120)
var secAngle = map(now.progress.min, 0, 1, 0,360)
var secLocation = pointAt (width/2, height/2, minAngle, 120)
var otherLocation = pointAt(secLocation.x, secLocation.y, secAngle, 30)

fill('red')
line(secLocation.x, secLocation.y, otherLocation.x, otherLocation.y )
cirlce(secLocation.x, secLocation.y,10)
rect(otherLocation.x, otherLocation.y, 10,10)
}