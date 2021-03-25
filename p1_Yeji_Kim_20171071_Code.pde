void setup() {
  size(280,420);
  background(250,245,235);
  frameRate(5);
}

void draw() {
 if (mousePressed) {
   float condition = random(0,4);
   float size = random (50,150);
   float colourR = random (50,200);
   float colourG = random (50,200);
   float colourB = random (50,200);

   
  if(condition>3.5) {
     noStroke();
     fill (colourR, colourG, colourB);
     ellipse (mouseX,mouseY,size,size);
   }
      else if(condition>3) {
       noFill();
       stroke (colourR, colourG, colourB);
       strokeWeight (random(2,20));
       ellipse (mouseX,mouseY,size,size);
   } 
     else if(condition>2) {
       noStroke();
       fill (colourR, colourG, colourB);
       rect (mouseX,mouseY,size,size);
   }
     else if(condition>1) {
       noStroke();
       fill (colourR, colourG, colourB);
       triangle (mouseX-size,mouseY+size,mouseX,mouseY-size,mouseX+size,mouseY+size);
   }
    else {
        stroke(colourR, colourG, colourB);
        strokeWeight(random(5,10));
        line (mouseX-(size*3),mouseY+(size*3),mouseX,mouseY-(size*3));
   }
 }
}   
   
