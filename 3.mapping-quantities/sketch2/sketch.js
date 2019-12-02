var totals
var atmospheric
var underground
var johnstons
var earthquakes 
var earthquakes3


function preload(){
  totals = loadTable('data/totals.csv', 'csv', 'header')
  atmospheric = loadTable('data/atmospheric.csv', 'csv', 'header')
  underground = loadTable('data/underground.csv', 'csv', 'header')
 johnstons = loadTable('data/johnstons.csv', 'csv', 'header')
 earthquakes = loadTable('data/earthquakes.csv', 'csv', 'header')
earthquakes3 = loadTable('data/earthquakes3.csv', 'csv', 'header')
  
}
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
  createCanvas(3200, 3200)
  background(0)

  // pick one of the three data files to work with and call it 'table'
  var table = earthquakes3
  

  // log the whole dataset to the console so we can poke around in it
  print(table)

  
  // set up typography
  textFont("Montserrat")
  textSize(16)
  fill(255)
  noStroke()

  var x = 200
  var y = 100
  var rowHeight = 60
  var colWidth = 40
   var numberOfShades = 9
   var lowest = 0
  var highest = 0

  
 // draw year labels on the left edge of the table
textStyle(BOLD)
  textAlign(RIGHT)
  for (var c=1; c<table.getColumnCount(); c++){
    text(table.columns[c], x-colWidth, y)
    
    y += rowHeight
  }


  // draw shot labels in the header row
  x = 200
  y = 100
  textStyle(NORMAL)
  textAlign(BOLD)
  for (var r=0; r<table.getRowCount(); r++){
    var year = table.getString(r, 0)
    text(year, x, y-rowHeight)
    x += colWidth *2
    
  }
}

//  draw rect for the bomb richter for shot name
  // x = 200
  // for (var r=0; r<table.getRowCount(); r++){
  //   y = 100
  //   for (var c=1; c<table.getColumnCount(); c++){
  //     var value = table.getNum(r, 1)
  //     rect(x,y, value, 20)
  //     y += rowHeight
  //   }
  //   x += colWidth
  // }

 
  
  

