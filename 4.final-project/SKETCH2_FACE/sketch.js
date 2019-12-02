var WHR_2019
var Authoritarian_1972_2010
var costa_rica

function preload() {
 costa_rica = loadTable('data/costa_rica.csv', 'csv', 'header')
print("loading")
}

function coordsAt(cx, cy, angle, dist) {
 var theta = angle / 360 * TWO_PIs
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
 createCanvas(1080, 1080)
 background(0)

 // pick one of the three data files to work with and call it 'table'
 var table = costa_rica
 
 
 // log the whole dataset to the console so we can poke around in it
 print(table)


 // set up typography
 textFont("Montserrat")
 textSize(16)
 noFill()
 strokeWeight(.5)
 x = 0
 y = 100
 var rowHeight = 50
 var colWidth = 125
 
 var numberOfShades = 9
 //  var lowest = 0
 // var highest = 0

 var pal = Brewer.sequential('Reds', 9, 0, 100)
 for (var i = 0; i < table.getRowCount(); i++) {
  //       noStroke()
  fill(pal.colorForValue(i))
 
 }

 //draw years in header row
  // draw year labels in the header row
 
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth
  
  }
  
  // draw feature name labels on the left edge of the table
  textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth+150, y+700)
    y += rowHeight
    
  }
}

 
  //MOUTH
  //HAPPINESS INDEX SCORE
  for (var r = 0; r < table.getRowCount(); r++) {
  var value1 = table.getNum(r,6)
  translate (0,100);
  noStroke()
  fill(255, 20, 20)
  //orientation
  //if statement >4.8 draw down <4.8 draw up
  arc(100, 1000, value, 280, 0, HALF_PI+ HALF_PI)
  }
  

 //EYEBROWS 
 //REGIME TYPE
  // for (var r = 0; r < table.getRowCount(); r++) {
  // var value2 = table.getNum(r,1)
   // var regime = table.getString(r, 1)
   //  text(regime, x, y-rowHeight)
   
 //if statement??
  // translate (0,200);
  // strokeWeight(5)
  // fill(255, 255, 255)
  // no fill
  //how to draw?
  // arc(100, 100, value2, 280, 0, PI, PIE)
  
  

 // EYES
 // POLITICAL PARTICIPATION
 // FUNC'T OF GOV'T (CUTS TRIANGLE) ?
 
  // for (var r = 0; r < table.getRowCount(); r++) {
  // var value3 = table.getNum(r,2)
 // strokeWeight(2.5);
 // stroke(255,230,0);
 // fill(255,230,0,100);
 // polygon(x,y, value, 3);
 
 
  //NOSE
  //DEMOCRACY index
   // for (var r = 0; r < table.getRowCount(); r++) {
  // var value4 = table.getNum(r,4)
   // rect(260, 240, 20, value4)
   // fill(pal.colorForValue(r))
  //  x += colWidth
  // y += rowHeight
  
  
  
// function polygon(x, y, radius, npoints) {
//   let angle = TWO_PI / npoints;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius;
//     let sy = y + sin(a) * radius;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }

