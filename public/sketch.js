let socket;
let canvas;

//create variables to hold the image files so we can draw them with the image function.
let cloudImg;
let treeImg;
let birdLeftImg;
let birdRightImg;

//create arrays for the bird and cloud objects
let birds = [];
let clouds = [];
let cloudsPosMap = [];

//create array for the happy thought text values.
let happyThoughts = [
  "Cease the day!",
  "Spring!",
  "There is beauty all around us."
];

//create variables for the HTML elements that will appear in the user interface
let userInput;
let submitButton;
let popUp;
let button;

//preload all of the image files into their variables.
function preload() {
  cloudImg = loadImage(
    "https://cdn.glitch.com/cdcbe618-42b0-409d-81a0-d99dd65e70b9%2FCloud.png?v=1586991464337"
  );
  treeImg = loadImage(
    "https://cdn.glitch.com/cdcbe618-42b0-409d-81a0-d99dd65e70b9%2FTree.png?v=1586995229097"
  );
  mountainImg = loadImage(
    "https://cdn.glitch.com/cdcbe618-42b0-409d-81a0-d99dd65e70b9%2FMountains.png?v=1586998992648"
  );
  birdLeftImg = loadImage(
    "https://cdn.glitch.com/cdcbe618-42b0-409d-81a0-d99dd65e70b9%2FBirdLeft.png?v=1586998054638"
  );
  birdRightImg = loadImage(
    "https://cdn.glitch.com/cdcbe618-42b0-409d-81a0-d99dd65e70b9%2FBirdRight.png?v=1586998056462"
  );
}


//setting the skech up
function setup() {
  
  canvas = createCanvas(windowWidth, windowHeight);
  
  canvas.style("z-index", "-1");

  //create a socket that connects to the server
  //connects to a local host
  //socket = io.connect('http://localhost:3000');

  //connects to the heroku or glitch server:
  socket = io();

  //when the socket recieves a message it performs code
  socket.on("happyThoughtFrom", addHappyThought);

  
  createInterface();

  //creates the players bird - REFACTOR
  birds.push(new Bird(random(width), birdRightImg, birdLeftImg));
 
  createClouds();
  setTimeout(destroyClouds, 10000);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resizeInterface();
  for (bird of birds){
    bird.sizeUp();
  }
  for (cloud of clouds){
    cloud.sizeUp();
  }
}


function draw() {
  //sky color
  background(0, 159, 241);
  
  //
  image(mountainImg, 0, height - height/4 - height/8, width, height/4);

  //update and draw all the clouds();

  for (cloud of clouds) {
    cloud.moveCloud();
    cloud.drawCloud();
  }
  
  //draw the tree
  image(treeImg, (width / 4) * 3, height - height/8 - height/3, width/6, height/3);

  //update and draw all the bords
  for (bird of birds) {
    bird.update();
    bird.drawBird();
  }

  drawGround();

  //if the user presses the left or right arrow, the bird will move to the left or right
  if (keyIsPressed === true) {
    if (keyCode === LEFT_ARROW) {
      birds[0].moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
      birds[0].moveRight();
    }
  }
}










//CLOUDS
// clouds are created at random time intervals
function createClouds() {
  clouds.push(new Cloud(random(happyThoughts), cloudImg));
  
  cloudsPos
  
  let randomTime = random(5, 10) * 1000;
  socket.emit("cloudUpdate", clouds[0]);
  //socket.emit("happyThought", userInput.value());
  setTimeout(createClouds, randomTime);

}

// destroys any clouds that are off the screen every 100 seconds
function destroyClouds() {
  for (cloud of clouds) {
    if (cloud.pos.x > canvas.width + cloud.width * 2) {
      clouds.splice(clouds.indexOf(cloud), clouds.indexOf(cloud) + 1);
      console.log(clouds.length);
    }
  }
  setTimeout(destroyClouds, 10000);
}






//draws the ground
function drawGround() {
  noStroke();
  fill(141, 179, 44);
  rect(0, height - height / 8, width, height / 8);
}











//INTERFACE

function createInterface() {
  popUp = createDiv(["<p>Write your happy thought.</p>"]);
  popUp.size(width/2, height/2);
  popUp.position(
    canvas.width / 2 - popUp.width / 2,
    canvas.height / 2 - popUp.height / 2
  );
  popUp.style("background-color", "#8DB32C");
  popUp.hide();

  userInput = createElement("textarea", "");
  userInput.size(popUp.width - popUp.width/8, 100);
  userInput.style("display", "block");
  userInput.style("margin-right", "auto");
  userInput.style("margin-left", "auto");
  userInput.attribute("maxlength", "60");
  userInput.hide();

  submitButton = createButton("submit");
  submitButton.position(popUp.width - submitButton.width - popUp.width/16, popUp.height - submitButton.height - popUp.height/16);
  submitButton.mousePressed(sendHappyThought);
  submitButton.hide();
  submitButton.style("align-self", "right");

  popUp.child(userInput);
  popUp.child(submitButton);

  button = createButton("what is your happy thought");
  button.size(width/4, height/16)
  button.position((width/3)* 2, height - height/16 - height/32);
  button.mousePressed(showpopUp);
}


function showpopUp() {
  fill(51);
  rect(height / 2 - height/4, width / 2 - width/4, height/2, width/2);
  popUp.show();
  userInput.show();
  submitButton.show();
}


function resizeInterface(){
  button.size(width/4, height/16)
  button.position((width/3)* 2, height - height/16 - height/32);
  submitButton.position(popUp.width - submitButton.width - popUp.width/16, popUp.height - submitButton.height - popUp.height/16);
  popUp.size(width/2, height/2);
  popUp.position(
    canvas.width / 2 - popUp.width / 2,
    canvas.height / 2 - popUp.height / 2
  );  
  userInput.size(popUp.width - popUp.width/8, 100);
  
}

function sendHappyThought() {
  //SOCKET CODE SENDS HAPPY THOUGHT
  socket.emit("happyThought", userInput.value());

  userInput.value("");
  popUp.hide();
  userInput.hide();
  submitButton.hide();
  console.log(happyThoughts);
}

function addHappyThought(happyThought) {
  append(happyThoughts, happyThought);
  console.log(happyThoughts);
}



/*
function mouseDragged(){
  console.log('sending: ' + mouseX + ', ' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY
  }
  socket.emit('mouse', data);
}
*/

