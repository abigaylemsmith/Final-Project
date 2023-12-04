
let x, y, r, g, b;
let extraCanvas;

function setup() {
    createCanvas (windowWidth, windowHeight);
    extraCanvas=createGraphics(windowWidth, windowHeight);
    extraCanvas.clear();
    background (255);
}

function draw () {

    r= random (255);
    g= random (400);
    b= random (600);
    x= random (width);
    y= random (height);
    noStroke();
    fill (r,g,b,75);
    circle (x,y,100);
  

    if (mouseIsPressed) {
        extraCanvas.fill(255,150);
        extraCanvas.noStroke();
        extraCanvas.ellipse (mouseX, mouseY, 20, 20);
    }

    image (extraCanvas,0,0);
    fill (255,0,0);
    stroke(255);
 
    

}