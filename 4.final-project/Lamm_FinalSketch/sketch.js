var table;

function preload(){
  table = loadTable('data/happydemocracy.csv', 'csv', 'header')
 
}

var ROW_LEFT = 40
var ROW_HEIGHT = 120
var COL_WIDTH = 300

var FACE_HEIGHT = 100
var FACE_WIDTH = 60

function drawFace(x, y, row){
  // use push/pop & translate to move to the coordinates specified by the x & y arguments
  // this will let all the functions that draw the individual features specify their coordinates
  // relative to the center of the face (which will be at coordinates 0,0)
  push()
  translate(x, y)

  // start by drawing an outline for the head
  stroke(0)
  strokeWeight(2)
 // noFill()
   
   fill(250,211,132)
  rectMode(CENTER);
  // ellipse(0,0, FACE_WIDTH, FACE_HEIGHT)
 rect(0,0, FACE_WIDTH, FACE_HEIGHT)
  // then draw all the features based on particular variables from the csv
  var happy = row.getNum('Happiness')
  var liberty = row.getNum('Liberties')
  var democracy = row.getNum('Democracy')
  var func = row.getNum('Function')
  var participation = row.getNum('Participation')
  var type = row.getNum('Type')
 
  

 drawEyebrows(type)
  drawEyes(func)
  drawPupils(participation)
  var noseBottom = drawNose(democracy)
  drawMouth(happy, noseBottom+4)
  
  pop()
}

function drawEyes(score){
  push()
  var eyeWidth = map(score, 0,10, 0,15)
   var numberOfShades = 10
  var pal = Brewer.sequential('Blues', 9, 0, 10)
  var eyeRadius = map(score, 0,10, 0,8)
  noStroke();
   fill(pal.colorForValue(score))
  polygon(-15, -10, eyeWidth, 3);
  polygon(15, -10, eyeWidth, 3);
 
pop();
}
function drawPupils(score){
  push()
  
  var eyeRadius = map(score, 0,10, 0,8)
  noStroke()
  fill(255,255,255)
  ellipse(-10, -8, eyeRadius)
ellipse(10,-8, eyeRadius)
pop();
}

function drawEyebrows(score){
  noFill()
  angleMode(radians);
  var browTop = -22
  var browWidth = 10
  strokeWeight(3)
  strokeCap(SQUARE);
  if (score <= 1){
    stroke(243,109,66)
  arc(-15, browTop, -7-browWidth, browTop-5, PI, 0,0)
   arc(15, browTop, 7+browWidth, browTop-5,PI, 0,0)
  
  }else if (score <= 2){
   stroke(243,109,66)
  line(-10, browTop, -10-browWidth, browTop)
  line(10, browTop, 10+browWidth, browTop-10)
  
  }else if (score <= 3){
     stroke(243,109,66)
  line(-10, browTop, -10-browWidth, browTop)
  line(10, browTop, 10+browWidth, browTop)
  
  }else if (score <= 4){
  stroke(243,109,66)
  line(-10, browTop, -10-browWidth, browTop-10)
  line(10, browTop, 10+browWidth, browTop-10)
  }

}


function drawNose(score){
  var noseHeight = map(score, 0,10, 5,30)
  var noseTop = 2
  var noseWidth = 8

  noStroke()
  fill(0)
  beginShape()
  vertex(-4, noseTop)
  vertex(4,noseTop)
  vertex(noseWidth/2, noseTop+noseHeight)
  vertex(-noseWidth/2, noseTop+noseHeight)
  endShape()

  // return the y coordinate at the bottom of the nose since
  // we'll need that to position the mouth
  return noseTop + noseHeight
}

function drawMouth(score, mouthTop){
  angleMode(RADIANS);
  var mouthHeight = 20
  // var mouthWidth = 50
  
  var numberOfShades = 10
  var pal = Brewer.sequential('Oranges', 9, 0, 10)
  
  if (score > 4.8){
    var mouthWidth = map(score, 4.8, 10, 1, 50)
    stroke(255,252,213)
  strokeWeight(.5)
  fill(pal.colorForValue(score))
    arc(0, mouthTop, mouthWidth, mouthHeight, 0, -PI)
    
  }else{
    var mouthWidth = map(score, 0, 4.8,50, 1)
    var extraSpace = mouthHeight/2 + 3 // since this is a frown, don't collide with the nose
  stroke(255,252,213)
  strokeWeight(.5)
  fill(pal.colorForValue(score))
    arc(0, mouthTop + extraSpace, mouthWidth, mouthHeight, -PI, 0)
  }
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

function setup(){
  createCanvas(2500, 3600, SVG)
  textSize(16)

  var rowX = 100
  var rowY = 40

  for (var r=0; r<table.getRowCount(); r++){
  
    angleMode(degrees);
    var row = table.getRow(r)
    var country = row.getString('country')
  
    text(country, rowX + FACE_WIDTH, rowY)
  
    drawFace(rowX, rowY, row)

    rowY += ROW_HEIGHT
    if (rowY > height-ROW_HEIGHT){
      rowY = 40
      rowX += COL_WIDTH
      // save('mysketch1.svg')
      // print("saved")
     
    
    }
    
}
}


