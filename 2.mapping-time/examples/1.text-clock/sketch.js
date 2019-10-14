function setup() {
	createCanvas(400, 400)
}

function draw() {
	background(255)
	textSize(32)

  let now = clock(),
      x = 10,
      top = 30,
      spacing = 30;

  // draw the time in the upper left corner
	fill(200)
	text(now.hours, x, top)

  fill(100)
	text(now.min, x, top + spacing)

  fill(0)
  //fill(255 * now.sec/60)
	text(now.sec, x, top + 2*spacing)
	//x position is using the current seconds
	circle(width * now.sec/60,140,30)
	
//		circle(width * now.min/60, height* now.hour/24, 30)
//smooth color
// circle(width * now.progress.hour, height* now.hour/24, 30)


//no fill()
// stroke(0)
// for (var i=0, i<now.hours; i++){
//   circle(width/2,100, 20+ i*10)
// circle(random(width), random(height), 40)
  
}
  push() // save the state of the canvas (including font & transformation settings)

    // make some state changes that will apply until we call pop()
    textAlign(RIGHT)
    translate(width, 0)

    // draw the date in the upper right corner
    fill('#cc0000')
    text(now.year, -x, top)
    translate(0, spacing)

    fill('#992200')
    text(now.month, -x, top)
    translate(0, spacing)

    fill('#331010')
    text(now.day, -x, top)

  pop() // undo our textAlign() & translate() changes for the next draw() call

}
