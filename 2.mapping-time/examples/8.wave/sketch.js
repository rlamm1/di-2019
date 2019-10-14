function setup() {
  createCanvas(800, 600)
}

function drawWave(y, amplitude, count, phase){
  // y: the vertical position of the *middle* of the waveform
  // amplitude: the height between the top of a peak and depth of a trough
  // count: the number of peaks to be drawn (a.k.a. 'frequency')
  // phase: the amount to shift the wave by horizontally

  beginShape()
  let resolution = 2
  for (var x=0; x<=canvas.width+resolution; x+=resolution){
    vertex(x, amplitude*cos(TWO_PI*count * x/width - phase*count) + y)
  }
  vertex(canvas.width, canvas.height)
  vertex(0, canvas.height)
  endShape(CLOSE)
}

var phase = 0

function draw() {
  background(0)
  Stroke(1)

  let now = clock(),
      amp = 50, // the vertical size of the largest wave
      speed = .008; // the maximum horizontal drift speed

  phase += speed

  fill('red')
  drawWave(height*.3, amp, 24*now.progress.day, phase/3)

  fill('orange')
  drawWave(height*.5, amp/2, 60*now.progress.hour, phase/2)

  fill('yellow')
  drawWave(height*.66, amp/4, 60*now.progress.min, phase)
}
