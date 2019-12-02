var WHR_2019
var Authoritarian_1972_2010

function preload() {
 WHR_2019 = loadTable('data/WHR_2019.csv', 'csv', 'header')
Authoritarian_1972_2010 = loadTable('data/Authoritarian_1972_2010.csv', 'csv', 'header')
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
 createCanvas(8000, 8000)
 background(0)

 // pick one of the three data files to work with and call it 'table'
 var table = WHR_2019
 
 
 // log the whole dataset to the console so we can poke around in it
 print(table)


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


 var pal = Brewer.sequential('Reds', 9, 0, 100)
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
  rect(x, y, value*-10, value*-1)

  fill(pal.colorForValue(r))
rect(x-500, i+300, value*-1, value)
  x += colWidth
  y += rowHeight
  var place = table.getString(r, 0)
  text(place, x + 80, y - rowHeight)


}
}