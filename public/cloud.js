class Cloud {
  constructor(happy, cloudImg){
    
    
    this.happyThought = happy;
    console.log(this.happyThought)
    this.tWidth = textWidth(this.happyThought);
    
    
    this.cloudImg = cloudImg;
    this.width = 200;
    this.height = 100;
    
    this.floatingOffset = random(1000);
    
    this.pos = createVector(0,0);
    this.pos.x = -300;
    this.pos.y = random(10, height - height/8 - 50); //groundHeight
    
  
    
    //console.log(this.pos.y);
    //this.vel = createVector(0, 0);
    //this.acc = createVector(0, 0);
    //this.mass = 10;
  }

  drawCloud(){
    //fill(51);
    //rect(this.pos.x, this.pos.y, this.width, this.height);
    image(this.cloudImg, this.pos.x, this.pos.y, this.width, this.height);
    fill(500);
    text(this.happyThought, this.pos.x + this.width/2 - this.tWidth/2, this.pos.y + this.height/2 - 5, this.width - this.width/4);
  }

  moveCloud(){
    var floating = map(noise(this.floatingOffset), 0,1, -.5, .5);
    this.pos.x += .5;
    this.pos.y += floating;
    this.floatingOffset += .001;
    
  }
  
  

}
