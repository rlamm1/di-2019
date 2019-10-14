function setup() {
  createCanvas(400, 600);
}

function draw() {
background('white');
colorMode(RGB);

var now = clock()

//var x =now.sec/60 * width
map(value, start1, stop1, start2, stop2, [withinBounds])
// x= map(now.sec, 0, 60, 0, width)
//var x= map(now.sec, 0, 1, 100, width-100)

var x= map(now.progress.min, 0, 1, 100, width-100)

var stepwise= map(now.sec,        0, 60, 100, width-100)
var smooth= map(now.progress.min, 0, 1, 100, width-100);
print(now.mins, mins)

//scale
var radius= map(now.progress.day, 0, 1, 2, 100)


//gray-scale value
//varcircColor =color(map(now.sec, 0, 60, 0, 255))

let from = color(218, 165, 32);
let to = color(72, 61, 139);
let circColor = lerpColor(from, to, now.sec/60);

fill (circColor)
//circle (x, height/2, 40)

//circle (stepwise, height*.33, 40)
circle (smooth, height* 0.66, radius)

}
