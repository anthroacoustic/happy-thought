class Bird {
  constructor(x, birdImg){
    //console.log(x);
    this.pos = createVector(0,0);
    this.pos.x = x;
    this.pos.y = height - height/8 - 45; //groundHeight
    this.direction = 'right'
    //console.log(this.pos.y);
    //this.vel = createVector(0, 0);
    //this.acc = createVector(0, 0);
    //this.mass = 10;
  }

  drawBird(){
    //fill(51, 22, 33);
    //rect(this.pos.x, this.pos.y, 44, 44);
    image(birdImg, this.pos.x, this.pos.y, 69, 45);
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
      // move to x + img's width
    ctx.translate(x+birdImg.width,y);

    // scaleX by -1; this "trick" flips horizontally
    ctx.scale(-1,1);
    
    // draw the img
    // no need for x,y since we've already translated
    ctx.drawImage(img,0,0);
    
    // always clean up -- reset transformations to default
    ctx.setTransform(1,0,0,1,0,0);
      this.direction = 'left'
    }
   
    
  }

}
