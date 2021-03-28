function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30,25,65);    // express color of night
  rectMode(CENTER);     // change the bar's pivot point 
  frameRate(3);     // to adjust the shape's Density
  
  
  fill(0,255,255,180);
  noStroke();
  ellipse (windowWidth/2-50, windowHeight/2-50, 500,500);   // background ellipse 1

  fill(255,0,255,180);
  noStroke();
  ellipse (windowWidth/2+50, windowHeight/2+50, 500,500);   // background ellipse 2
}


function draw() {
    
    if (mouseIsPressed) {
      
      
      // to draw Neon bars
      if (mouseButton === LEFT) {
        let C1 = random(0,1);   // for condition
        let W1 = random(5,100);   // for bar's width
        let H1 = random(50,1200);   // for bar's height
              
      
        if (C1 >= 0.3){   // Neon bar appears more than mint color lines
            fill(random(0,255),0,255,180);
            noStroke();
            rect(mouseX,mouseY,W1,H1);
          }
        
      // to draw extra mint color lines
          else { 
            fill(0,255,255);
            noStroke();
            X = 0;
            for (let i = 0; i< 5; i++) {   // 5 mint color lines appear in a single click
            rect(mouseX+X,mouseY,1,H1*0.8); 
            X += 5;
            }
          }
     }
      
      // to draw some shape effects
      if (mouseButton === RIGHT){
        frameRate(3);
        let C2 = random(0,1);   // for condition
        let W2 = random(100,800);   // for effect's width
        let H2 = random(5,10);   // for effect's height
                let E = random (20,80);   // for ellipse's size
        fill (255);   //set color white
      
          if (C2 >=0.4) {   // bar appears more than ellipse
            noStroke();
            rect(mouseX,random(0,windowHeight),W2,H2);
          }
        
        
          else {
            noFill();
            stroke(255);
            strokeWeight(5);
            ellipse(mouseX,random(0,windowHeight),E);
          }
        
      }
  }      
}
