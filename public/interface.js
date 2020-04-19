class Interface {
  constructor(canvasWidth, canvasHeight){
  
  this.popUp = createDiv(["<p>Write your happy thought.</p>"]);
  this.userInput = createElement("textarea", "");
  this.submitButton = createButton("submit");

  this.popUp.child(this.userInput);
  
  this.initialize(canvasWidth, canvasHeight);
  this.showPopup();
  }
   
  initialize(){
    this.popUp.size(width/2, height/2);
    console.log(this.popUp);
    this.popUp.position(
     // canvas.width / 2 - popUp.width / 2,
     // canvas.width / 2 - popUp.width / 2,
      canvas.width / 2 - this.popUp.width / 2,
      canvas.width / 2 - this.popUp.width / 2,
    );
    this.popUp.style("background-color", "#8DB32C");
    this.popUp.hide();
      
    this.userInput.size(this.popUp.width - this.popUp.width/8, 100);
    this.userInput.style("display", "block");
    this.userInput.style("margin-right", "auto");
    this.userInput.style("margin-left", "auto");
    this.userInput.attribute("maxlength", "60");
    this.userInput.hide();
    
    this.submitButton.position(this.popUp.width - this.submitButton.width - this.popUp.width/16, this.popUp.height - this.submitButton.height - this.popUp.height/16);
    this.submitButton.mousePressed(sendHappyThought);
    this.submitButton.hide();
    this.submitButton.style("align-self", "right");
    
    this.popUp.child(this.submitButton);

    this.button = createButton("what is your happy thought");
    this.button.size(width/4, height/16)
    this.button.position((width/3)* 2, height - height/16 - height/32);
    this.button.mousePressed(this.showPopUp);
  }
  
  showPopUp() {
  //fill(51);
  //rect(height / 2 - height/4, width / 2 - width/4, height/2, width/2);
  console.log(this.popUp);
  this.popUp.show();
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