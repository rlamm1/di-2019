var totals
var atmospheric
var underground
var johnstons
var earthquakes
var earthquakes2
//var earthquakes4

function preload() {
 totals = loadTable('data/totals.csv', 'csv', 'header')
 atmospheric = loadTable('data/atmospheric.csv', 'csv', 'header')
 underground = loadTable('data/underground.csv', 'csv', 'header')
 johnstons = loadTable('data/johnstons.csv', 'csv', 'header')
 earthquakes = loadTable('data/earthquakes.csv', 'csv', 'header')
 earthquakes2 = loadTable('data/earthquakes2.csv', 'csv', 'header')
 //earthquakes4 = loadTable('data/earthquakes4.csv', 'csv', 'header')
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
 createCanvas(3200, 3200)
 background(0)

 // pick one of the three data files to work with and call it 'table'
 var table = earthquakes2
 //var newtable = earthquakes4
 // log the whole dataset to the console so we can poke around in it
 print(table)
// print(newtable)

 // set up typography
 textFont("Montserrat")
 textSize(16)
 noFill()
 strokeWeight(.5)

 var x = 0
 var y = 100
 var rowHeight = 60
 var colWidth = 40
 var numberOfShades = 9
 //  var lowest = 0
 // var highest = 0

 // draw year labels on the left edge of the table
 textStyle(BOLD)
 textAlign(RIGHT)
 for (var r = 2; r < table.getColumnCount(); r++) {
  text(table.columns[r], x - colWidth, y)
  x += colWidth
 }


 // 1955 earthquakes 4.3- 5.89
 // var earth = map(value1, 0, 1, 0, 360)
 // var point = pointAt(width*2, height*2,earth, 10)
 var pal = Brewer.sequential('Reds', 9, 0, 200)
 for (var i = 0; i < table.getRowCount(); i++) {
  //       noStroke()
  fill(pal.colorForValue(i))
  //rect(0,r, width/2,r+1)
 }
 //use array data here
 for (var r = 0; r < table.getRowCount(); r++) {
  var value = table.getNum(r, 1)
  noStroke()
  fill(255, 20, 20, 100)
  ellipse(x, y, value * 10)

  fill(pal.colorForValue(r))
  ellipse(x, i, value * 10)
  x += colWidth
  y += rowHeight
  var place = table.getString(r, 2)
  text(place, x + 80, y - rowHeight)

 



// var x = 0
// var y = 300

// 1956 earthquakes 4.3- 5.89
// var pal = Brewer.sequential('Blues', 9, 0, 200)
// for (var i = 0; i < table1.getRowCount(); i++) {
//  //       noStroke()
//  fill(pal.colorForValue(i))
//  //rect(0,r, width/2,r+1)
// }

//use array data here
// for (var r = 0; r < newtable.getRowCount(); r++) {
//  var value2 = newtable.getNum(r, 1)
//  noStroke()
//  fill(20, 20, 255, 100)
//  ellipse(x, y, value2 * 5)

 // fill(pal.colorForValue(r))
 // ellipse(x, i, value * 5)
 // x += colWidth
 // y += rowHeight
 // var place = table1.getString(r, 2)
 // text(place, x + 80, y - rowHeight)



// var pal = Brewer.sequential('Reds', 9, 0, 200) 
//   for (var i=0; i<200; i++){
//       noStroke()
//       fill(pal.colorForValue(i))
//       rect(0,i, width/2,i+1)



// draw shot labels in the header row
// x = 200
// y = 400
// textStyle(NORMAL)
// textAlign(BOLD)
// for (var r=6; r<table3.getRowCount(); r++){
//   var value2 = table3.getNum(r,6)
//   rect(x,y, value2*3, value2*3)
//   x += colWidth 
// }
//   var earth = map(value1, 0, 9, 0, 9)
// var point = pointAt(width, height,earth, 20)

// strokeWeight(2);
// stroke(70,178,127);
// fill(70,178,127,100);
// circle(point.x, point.y, 40)
// line(point.x, point.y, 200,0)


// draw year labels in the header row
// x = 200
// y = 100
// textStyle(NORMAL)
// textAlign(BOLD)
// for (var r=5; r<table1.getRowCount(); r++){
// var value1 = table1.getNum(r, 5)
//   rect(x,y, value1, 20)

//   x += colWidth
// }

// x = 200
// y = 200
// textStyle(NORMAL)
// textAlign(BOLD)
// for (var r=1; r<table2.getRowCount(); r++){
// // var place = table.getString(r, 5)
// // text(place, x, y-rowHeight)
//     Math.round(value2);
//     Math.ceil(value2)
// var value2 = table2.getNum(r, 1)
//   rect(x,y, value2, 20)

//   x += colWidth
// }
// x = 200
// y = 200
// textStyle(NORMAL)
// textAlign(BOLD)
// for (var c=19; c<table2.getColumnCount(); c++){


// var place = table.getString(r, 5)
// text(place, x, y-rowHeight)
//     Math.round(value2);
// var value2 = table2.getNum(r, 19)
//   rect(x,y, value2, 20)
// y += rowHeight
// }

//   x = 200
//     y = 100
//     for (var r=19; r<table.getRowCount(); r++){

//   var value = table.getNum(r, 19)
// ellipse(x,y,value)
//     x += colWidth

//     }
}
}