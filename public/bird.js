class Bird {
  constructor(x, birdRightImg, birdLeftImg){
    //console.log(x);
    this.pos = createVector(0,0);
    this.pos.x = x;
    this.pos.y = height - height/8 - 45; //groundHeight
    this.direction = 'right';
    this.img = birdRightImg;
    //console.log(this.pos.y);
    //this.vel = createVector(0, 0);
    //this.acc = createVector(0, 0);
    //this.mass = 10;

  }

  drawBird(){
    //fill(51, 22, 33);
    //rect(this.pos.x, this.pos.y, 44, 44);
    image(this.img, this.pos.x, this.pos.y, 69, 45);
  }

  update(){

  }

  applyForce(force) {
    //let f = p5.Vector.div(force, this.mass);
    //forceA = createVector(-10,-10);
    //this.acc.add(force);
  }
  
  moveLeft(){
    if (this.direction = 'right'){
      this.img = birdLeftImg;
      this.direction = 'left'   
    }
   this.pos.x -= 1;   
  }
  
  moveRight(){
    if(this.direction = 'left'){
      this.img = birdRightImg;
      this.direction = 'right';
    }
    this.pos.x +=1;
  }
}