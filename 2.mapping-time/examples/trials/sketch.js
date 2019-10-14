let angle = 0;
// let x= 50;
// let y = 50;
function setup() {
createCanvas(400,400);
noStroke();
  //rectMode(CENTER);

 angleMode(DEGREES);

}
//push SAVE
//pop Restore
function draw() {
     background(0);
   
push();    
translate (50,50); 
scale(1,1);
rotate(angle);

scale(1,1);

fill(255,100,50);
rect(0,0,100,50);
  angle = (angle + 5) ;
pop();
  

translate (300,300);
rotate (-angle /2);
fill(5,100,200,180);
rect(0, 0,50,50);

angle = (angle + 5) ;
// x = x +2;
}
