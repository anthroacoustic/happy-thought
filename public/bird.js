class Bird {
  constructor(x,y){
    this.pos = createVector(x,y)
    this.pos.x = x;
    this.pos.y = height - height/8 - 44; //groundHeight
    console.log(this.pos.y);
    //this.vel = createVector(0, 0);
    //this.acc = createVector(0, 0);
    //this.mass = 10;
  }

  drawBird(){
    fill(51, 22, 33);
    rect(this.pos.x, this.pos.y, 44, 44);
  }

  update(){

  }

  applyForce(force) {
    //let f = p5.Vector.div(force, this.mass);
    //forceA = createVector(-10,-10);
    //this.acc.add(force);
  }

}
