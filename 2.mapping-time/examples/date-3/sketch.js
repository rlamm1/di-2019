function setup() {
createCanvas(600, 600);
}

function draw() {
  
  noStroke();
  
   var now = clock()


    var lightBlue = color(30,139,195,100);
    stroke(0, 0, 255);
    background(0);
  
  var spacing = 10
  var x = now.progress.sec * 100
  
  for (var i = 0; i<60; i++){
   if(i<= now.sec){
       
       fill(0) 
   }else{
       fill(255)
   }
   strokeWeight(1);
    rect(spacing*i, 30, 10,10)
  }
  
  var spacing = 10
  var y = now.progress.min * 100
  
   for (var j = 0; j<60; j++){
   if(j<= now.min){
       
       fill(0, 0, 255,150) 
   }else{
       fill(255)
   }
     noStroke();
    ellipse(30, spacing*j, 10,10)
  }
 
   fill(255,255,255)
    stroke(0, 0, 255);
    strokeWeight(2);
 rect(400, height, width, height*(now.progress.hour) * -1)
}


