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


function draweyes(participation){
var percent = participation/10
var maxheight = 20;
var maxeyewidth = 10;
var eyeheight= maxheight*percent
rect(10, maxheight, maxeyewidth, -eyeheight)
rect(40, maxheight, maxeyewidth, -eyeheight)
}

