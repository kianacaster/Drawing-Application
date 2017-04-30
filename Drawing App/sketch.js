// Basic Drawing Web-page - created by K14N \\

// Setup variables
var bgcolour = 255; // Sets the background colour to white
var fr = 120; // Frame rate = 120
var clr = 0; // Colour is black

// Drawing Variables
// Pre-defines these variables
var lastX = 0; 
var lastY = 0;
var startX = 0;
var startY = 0;

// Button variables
// More pre-definition
var drawThickness = 10;
var rubThickness = 10;
var drawplus1;
var drawminus1;
var drawplus10;
var drawminus10;
var rubplus1;
var rubminus1;
var rubplus10;
var rubminus10;
var temp;



function setup() {
	createCanvas(1366,662); // Draws a canvas
	background(bgcolour); // Sets the background colour to the colour defined earlier
	frameRate(fr); // Sets the frame rate
	cursor('cursor.png'); // Uses a custom cursor
	var button = createButton('Clear Canvas'); // Creates a clear canvas button
	var saveButton = createButton('Save Your Work'); // Creates a save button
	
	// Buttons to increase pen and rubber thickness
	drawplus1 = createButton('Pen Thickness +1'); 
	drawminus1 = createButton('Pen Thickness -1'); 
	drawplus10 = createButton('Pen Thickness +10');
	drawminus10 = createButton('Pen Thickness -10');
	rubplus1 = createButton('Rubber Thickness +1');
	rubminus1 = createButton('Rubber Thickness -1');
	rubplus10 = createButton('Rubber Thickness +10');
	rubminus10 = createButton('Rubber Thickness -10');
	
	// Sets the postition of the buttons
	button.position(0, 0);
	saveButton.position(0, 640);
	drawplus1.position(0, 40);
	drawplus10.position(0, 65);
	drawminus1.position(0, 105);
	drawminus10.position(0, 130);
	rubplus1.position(0, 170);
	rubplus10.position(0, 195);
	rubminus1.position(0, 235);
	rubminus10.position(0, 260);
	
	// Runs the functions when the button is pressed
	button.mousePressed(clearCanvas);
	saveButton.mousePressed(saveCanvas);
	drawplus1.mousePressed(drawthicknessp1);
	drawminus1.mousePressed(drawthicknessm1);
	drawplus10.mousePressed(drawthicknessp10);
	drawminus10.mousePressed(drawthicknessm10);
	rubplus1.mousePressed(rubthicknessp1);
	rubminus1.mousePressed(rubthicknessm1);
	rubplus10.mousePressed(rubthicknessp10);
	rubminus10.mousePressed(rubthicknessm10);
	
	
}

function drawthicknessp1(){ drawThickness++; } // Increases drawThickness by 1
function drawthicknessm1(){ if(drawThickness - 1 > 0){ drawThickness = drawThickness - 10; }else{ drawThickness = 1; } } // Decreases drawThickness by 10, can't go lower than 1
function drawthicknessp10(){ drawThickness+=10; } // Increases drawThickness by 10
function drawthicknessm10(){ if(drawThickness - 10 > 0){ drawThickness = drawThickness - 10; }else{ drawThickness = 1; } }	

function rubthicknessp1(){ rubThickness++; }// Increases rubThickness by 1
function rubthicknessm1(){ if(rubThickness - 1 > 0){ rubThickness = rubThickness - 10; }else{ rubThickness = 1; } } // Decreases rubThickness by 1, can't go lower than 1
function rubthicknessp10(){ rubThickness+=10; }// Increases rubThickness by 10
function rubthicknessm10(){ if(rubThickness - 10 > 0){ rubThickness = rubThickness - 10; }else{ rubThickness = 1; } }// Decreases rubThickness by 10, can't go lower than 1

function clearCanvas(){ // Clears the canvas
	clear(); 
	temp = drawThickness;
	drawThickness = 0;
	setTimeout(restore, 500);
 
} 
function restore(){ 
drawThickness = temp; 
}
function saveCanvas(){ saveCanvas('myDrawing.jpg'); } // Saves an image of the canvas

// 	If the mouse is pressed draw a line from the start coordinates to the end coordinates - left mouse draws black, right mouse draws white (illusion of an eraser)
function draw() {
	if(mouseIsPressed){
		if(mouseButton == LEFT){
		lastX = mouseX;
		lastY = mouseY;
		drawLine(startX,startY,lastX,lastY, clr, drawThickness);
		startX = mouseX;
		startY = mouseY;
		}else if(mouseButton == RIGHT){
			lastX = mouseX;
			lastY = mouseY;
			drawLine(startX,startY,lastX,lastY, bgcolour, rubThickness);
			startX = mouseX;
			startY = mouseY;
			
		}
	}else{
		startX = mouseX;
		startY = mouseY;
	}
		


}


// Draws a line
function drawLine(x1,y1,x2,y2,colour, thickness){ 
			stroke(colour); 
			strokeWeight(thickness);
			line(x1,y1,x2,y2);
}

