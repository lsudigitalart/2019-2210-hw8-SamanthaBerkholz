var face1, face2, face3, face4;
var body1, body2, body3, body4;

var show = 0;
var faceChoice, bodyChoice;

function preload() {
  face1 = loadImage("face/face1.jpg");
  face2 = loadImage("face/face2.jpg");
  face3 = loadImage("face/face3.png");
  face4 = loadImage("face/face4.jpg");

  body1 = loadImage("body/body1.jpg");
  body2 = loadImage("body/body2.jpg");
  body3 = loadImage("body/body3.jpg");
  body4 = loadImage("body/body4.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);

  if (show == 1) {
    memeFace(bodyChoice,faceChoice);
  }

}

function mouseReleased() {
  
  bodyChoice = int(random(4));
  faceChoice = int(random(4));
  show = 1;
}

function memeFace(body, face) {
  print(face);


  if (body == 0) {
    image(body1, 500,300);
  }

  if (body == 1) {
    image(body2, 500,300);
  }

  if (body == 2) {
    image(body3, 500,300);
  }

  if (body == 3) {
    image(body4,500,300);
  }

  if (face == 0) {
    image(face1, 500,300);
  }

  if (face == 1) {
    image(face2, 500,300);
  }

  if (face == 2) {
    image(face3, 500,300);
  }

  if (face == 3) {
    image(face4, 500,300);
  }

}