function setup() {
  createCanvas(600, 600);
  //noLoop(); 
}

function draw() {
  var now = clock()

  let from1 = color(38,1,1);
        let to1 = color(4,51,191,150);
        let year = lerpColor(from1, to1, now.progress.year);
        background(year);

  loop();
 
  let from = color(77, 89, 35);
        let to = color(140, 39, 3);
        let branchColor = lerpColor(from, to, now.progress.season);
        stroke(branchColor);

  strokeWeight(4);
  translate(width / 2, height - 20);
  branch(0);
}



function branch(depth) {
  var now = clock();
  if (depth < 4) {
    
    line(0, 0, 0, -height / 10); // draw a line going up
    
    {
      translate(0, -height / 10); // move the space upwards
      //rotate(random(-0.05,0.05));  // random wiggle

      if (.5 < 0.6) { // branching 
        // if (random(1.0) < 0.6){ // branching 
        rotate(0.3); // rotate to the right
        scale(0.8); // scale down

        push(); // now save the transform state
        branch(depth + now.progress.season); // start a new branch!
        pop(); // go back to saved state

        rotate(-0.6); // rotate back to the left 

        push(); // save state
        branch(depth + now.progress.season); // start a second new branch 
        pop(); // back to saved state        
      }
      else { // no branch - continue at the same depth  
        branch(depth);
      }
    }
  }
}


function mouseReleased(){ 
  redraw();  
} 



