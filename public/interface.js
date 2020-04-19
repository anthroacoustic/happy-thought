class Interface {
  constructor(canvasWidth, canvasHeight){
  
  this.popUp = createDiv(["<p>Write your happy thought.</p>"]);
  this.userInput = createElement("textarea", "");
  this.submitButton = createButton("submit");

  this.popUp.child(this.userInput);
  
  //this.initialize(canvasWidth, canvasHeight);
    
  
  
 
  
  
  }
   
  initialize(canvasWidth, canvasHeight){
    
  }
  
  showPopUp() {
  //fill(51);
  //rect(height / 2 - height/4, width / 2 - width/4, height/2, width/2);
  console.log(this.popUp);
  //this.popUp.show();
  this.userInput.show();
  this.submitButton.show();
}
  
  
  resize(canvasWidth, canvasHeight){
    this.button.size(width/4, height/16)
    this.button.position((width/3)* 2, height - height/16 - height/32);
    this.submitButton.position(this.popUp.width - this.submitButton.width - this.popUp.width/16, this.popUp.height - this.submitButton.height - this.popUp.height/16);
    this.popUp.size(width/2, height/2);
    this.popUp.position(
      canvasWidth / 2 - this.popUp.width / 2,
      canvasHeight / 2 - this.popUp.height / 2
    );  
    this.userInput.size(this.popUp.width - this.popUp.width/8, 100);
  
}

}