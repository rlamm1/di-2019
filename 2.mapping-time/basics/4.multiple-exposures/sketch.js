
function setup() {
  createCanvas(512, 256); // set the size of the canvas
  frameRate(10) // redraw the screen 60 times per second
  background(0) // fill the canvas with black pixels

  // set parameters that will affect our drawing commands below
  ellipseMode(CENTER)
  textAlign(CENTER)
  textSize(72)
  noStroke()
}

function draw() {
  // note that we do NOT call background() again; this means that whatever was rendered to the
  // canvas the last time draw() was called will stick around rather than being covered over

  // pick random values to decide on location, size, and opacity of the next dot
  var x = random(width)
  //you give average & variability
  var y = randomGaussian(height/2, height/4)
  //(min, max)
  var r = random(3, 30)
  //random opacity
  var c = color(255, random(100))
  
// var c = color(random(255), ramdom(255), random(255))
  // set the color & draw the dot
  fill(c)
  ellipse(x, y, r)

  // switch back to drawing in black and print our greeting on top
  fill(0)
  text("Peekaboo!", width/2, height/2 + textSize()/3)
}
