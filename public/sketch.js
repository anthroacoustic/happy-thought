

let socket;

let canvas;


//create arrays for the bird and cloud objects
let birds = [];
let clouds = [];

//create array for the happy thought text values.
let happyThoughts = ["Cease the day!", "Spring!", "There is beauty all around us."];

//create variables for the HTML elements that will appear in the user interface
let userInput;
let submitButton;
let popUp;

function setup() {

  canvas = createCanvas(800, 400);
  //background(0, 159, 241);
  canvas.style('z-index', '-1')

  //create a socet that connects to the server
  socket = io.connect('http://localhost:3000');
  //when the socket recieves a message it performs code
  //socket.on('mouse', newDrawing);
  socket.on('happyThoughtFrom', addHappyThought);

  createInterface();

  birds.push(new Bird(random(width)));
  createClouds();
  setTimeout(destroyClouds, 10000);
  }

function draw() {
  background(0, 159, 241);
  drawGround();

//update and draw all the bords
  for (bird of birds){
    bird.update();
    bird.drawBird();
  }

//update and draw all the clouds();
 for (cloud of clouds){

    cloud.moveCloud();
    cloud.drawCloud();
  }

//if the user presses the left or right arrow, the bird will move to the left or right
  if (keyIsPressed === true) {
    if (keyCode === LEFT_ARROW) {
      birds[0].pos.x -= 1;
    } else if (keyCode === RIGHT_ARROW) {
      birds[0].pos.x += 1;
    }

  }
}

// clouds are created at random time intervals
function createClouds(){
  clouds.push(new Cloud(random(happyThoughts)));
  let randomTime = random(3,6)* 1000;
  setTimeout(createClouds, randomTime);
}

// destroys any clouds that are off the screen every 100 seconds
function destroyClouds(){
  for (cloud of clouds){
     if (cloud.pos.x > canvas.width + cloud.width*2) {
       clouds.splice(clouds.indexOf(cloud), clouds.indexOf(cloud) + 1);
       console.log(clouds.length);
     }
  }
  setTimeout(destroyClouds, 10000);
}

//draws the ground
function drawGround(){
  noStroke();
  fill (141, 179, 44);
  rect(0, height - height/8, width, height/8);
}



function createInterface(){
    popUp = createDiv(['<p>sdfdfs</p>']);
    popUp.size(400, 200);
    popUp.position(canvas.width/2 - popUp.width/2, canvas.height/2 - popUp.height/2);
    popUp.style('background-color', 'red');
    popUp.hide();


    userInput = createElement('textarea', '');
    userInput.size(popUp.width/1.5, 100);
    userInput.style('display', 'block');
    userInput.style('margin-right', 'auto');
    userInput.style('margin-left', 'auto');
    userInput.hide();

    submitButton = createButton('submit');
    //submitButton.position(width/2 + 150, height/2 - 40);
    submitButton.mousePressed(sendHappyThought);
    submitButton.hide();

    popUp.child(userInput);
    popUp.child(submitButton);

    let button = createButton('what is your happy thought');
    button.position(600, 375)
    button.mousePressed(showpopUp);
}

function showpopUp(){
  fill(51);
  rect(height/2 - 100, width/2 - 100, 400, 400);
  popUp.show();
  userInput.show();
  submitButton.show();
}

function sendHappyThought(){

  //SOCKET CODE SENDS HAPPY THOUGHT
  socket.emit('happyThought', userInput.value());

  userInput.value('');
  popUp.hide();
  userInput.hide();
  submitButton.hide();
  console.log(happyThoughts);
}

function addHappyThought(happyThought){
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

function newDrawing(data){
  console.log(data.x);
  noStroke();
  fill(255 , 0, 100);
  ellipse(data.x, data.y, 36, 36);
}
