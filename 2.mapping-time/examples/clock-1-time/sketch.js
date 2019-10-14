function setup() {
  createCanvas(1000, 1000)
}

function draw() {
 
  var now = clock()
 
//

  background(22, 57, 101);
  noFill();
 stroke(244, 126, 82);

 
  var wt= (now.progress.day*100)
   
  strokeWeight(wt)
  
  strokeWeight(now.progress.sec*100)
  stroke(244, 126, 82);
  translate(width * 0.5, height * 0.5);
  polygon(0, 0, 100-wt, 3)
  
  strokeWeight(now.progress.min*100)
  stroke(244, 126, 82,160);
  polygon(width/2, height/2, 1000-wt, 3)
  
  strokeWeight(now.progress.hour*100)
  stroke(244, 126, 82,100);
  polygon(width/2, height/2, 1200-wt, 3)
  
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
