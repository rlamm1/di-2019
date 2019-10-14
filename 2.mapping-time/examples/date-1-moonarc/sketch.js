let a = 0.0;
let s = 0.0;

var circle1 = {
 x: 0,
 y: 0,
 diameter: 80
 
};

var circle2 = {
 x: 0,
 y: 0,
 diameter: 50
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
function setup() {
createCanvas(600,600);
noStroke();
 rectMode(CENTER);
// background(102);
}

function draw() {
     background(0);
     colorMode(RGB);
     

   var now = clock()
   var pct = now.progress.moon
   var pct2 = now.progress.week
  //Slowly increase 'a' and then animate 's' with
  //a smooth cyclical motion by finding the cosine of 'a'
   a = a + 0.04;
   s = cos(a) * 2;
   
   //Translate our rectangle from the origin to the middle of
  //the canvas, then scale it with 's'
  translate(width / 2, height / 2);
  scale(s);
  
  let from = color(255, 250, 6);
  let to = color(22, 57, 101);
  let circColor = lerpColor(from, to, now.progress.day);
  
  fill (circColor)
  ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);


    
  //moon
  translate(75, 0);
  fill(255);
  scale(s);
  arc(0, 0, 20, 20, 0, (PI+PI)*pct);
//ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
 
 //week should it by n * pct?
 translate(0, 0);
  fill(71,156,255,150);
  scale(s)
 polygon(circle2.x, circle2.y, 40, 7 * pct2);
}

//floor ceil
 
 










