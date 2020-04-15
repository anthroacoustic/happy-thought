class Cloud {
  constructor(happy, cloudImg){
    this.happyThought = happy;
    console.log(this.happyThought)

    this.width = 200;
    this.height = 100;

    this.pos = createVector(0,0);
    this.pos.x = -300;
    this.pos.y = random(10, height - height/8 - 50); //groundHeight
    console.log(this.pos.y);
    //this.vel = createVector(0, 0);
    //this.acc = createVector(0, 0);
    //this.mass = 10;
  }

  drawCloud(){
    //fill(51);
    //rect(this.pos.x, this.pos.y, this.width, this.height);
    image(cloudImg, this.pos.x, this.pos.y, this.width, this.height);
    fill(500);
    text(this.happyThought, this.pos.x + 50, this.pos.y + 25, 100, 100);
  }

  moveCloud(){
    noise
    this.pos.x += 4;
    
  }

}
