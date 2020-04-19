class Interface {
  constructor(canvasWidth, canvasHeight){
  
  this.popUp = createDiv();
  this.userInput = createElement("textarea", "");
  this.submitButton = createButton("submit");
  this.closePopUpButton = createButton("close");
  this.initialize(canvasWidth, canvasHeight);
  this.popUpText;
  
  }
   
  initialize(canvasWidth, canvasHeight){
    //initialize popUp Div
    this.popUp.size(width/2, canvasHeight/4);
    console.log(this.popUp);
    this.popUp.position(
     // canvas.width / 2 - popUp.width / 2,
     // canvas.width / 2 - popUp.width / 2,
      canvasWidth / 2 - this.popUp.width / 2,
      canvasWidth / 2 - this.popUp.width / 2,
    );
    this.popUp.style("background-color", "#8DB32C");
    this.popUp.style("padding", "2em")
   
    this.popUp.hide();
  
    this.popUpText = createP('Write here:');
    
    //initialize userInput
    //this.userInput.size(this.popUp.width - this.popUp.width/8, 200);
    this.userInput.style("display", "block");
    this.userInput.style("align-self", "acenter");
    this.userInput.attribute("maxlength", "60");
    //this.userInput.size(width - width/2, height - height/6);
    //this.userInput.hide();

    //initialize submitButton
    this.submitButton.position(this.popUp.width - this.submitButton.width - this.popUp.width/16, this.popUp.height - this.submitButton.height - this.popUp.height/16);
    this.submitButton.mousePressed(sendHappyThought);
    //this.submitButton.hide();
    this.submitButton.style("align-self", "right");

    //closePopUpButton
    this.closePopUpButton.position(this.popUp.width - this.submitButton.width - this.popUp.width/16, this.closePopUpButton.height);
    //this.closePopUpButton.style("align-self", "right");
    
    //this.popUpText.position(width/16)
    
    this.button = createButton("what is your happy thought");
    this.button.size(width/4, height/16)
    this.button.position((width/3)* 2, height - height/16 - height/32);
    
    //assign Children.
    this.popUp.child(this.popUpText);
    this.popUp.child(this.submitButton);
    this.popUp.child(this.userInput);
    this.popUp.child(this.closePopUpButton);
    
  }
  
  resize(canvasWidth, canvasHeight){
    this.popUp.size(width/2, height/2);
    this.popUp.position(
      canvasWidth / 2 - this.popUp.width / 2,
      canvasHeight / 2 - this.popUp.height / 2
      );  
    
    this.userInput.size(this.popUp.width - this.popUp.width/8, 100);
    this.button.size(width/4, height/16);
    this.submitButton.position(this.popUp.width - this.submitButton.width - this.popUp.width/16, this.popUp.height - this.submitButton.height - this.popUp.height/16);
    this.button.position((width/3)* 2, height - height/16 - height/32);  
    this.closePopUpButton.position(this.popUp.width - this.submitButton.width - this.popUp.width/16, this.closePopUpButton.height);

  
  }

}