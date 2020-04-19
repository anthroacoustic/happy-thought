class Interface {
  constructor(canvasWidth, canvasHeight){
  
  this.popUp = createDiv(["<p>Write your happy thought.</p>"]);
  
  
  this.userInput = createElement("textarea", "");
  

  this.submitButton = createButton("submit");
  

  this.popUp.child(userInput);
  
  
  initialize(canvasWidth, canvasHeight)
  }
  
  
  
  initialize(){
    this.popUp.size(width/2, height/2);
    this.popUp.position(
     // canvas.width / 2 - popUp.width / 2,
     // canvas.width / 2 - popUp.width / 2,
      canvas.width / 2 - popUp.width / 2,
      canvas.width / 2 - popUp.width / 2,
    );
    this.popUp.style("background-color", "#8DB32C");
    this.popUp.hide();
      
    this.userInput.size(popUp.width - popUp.width/8, 100);
    this.userInput.style("display", "block");
    this.userInput.style("margin-right", "auto");
    this.userInput.style("margin-left", "auto");
    this.userInput.attribute("maxlength", "60");
    this.userInput.hide();
    
    this.submitButton.position(popUp.width - submitButton.width - popUp.width/16, popUp.height - submitButton.height - popUp.height/16);
    this.submitButton.mousePressed(sendHappyThought);
    this.submitButton.hide();
    this.submitButton.style("align-self", "right");
    
    this.popUp.child(submitButton);

    this.button = createButton("what is your happy thought");
    this.button.size(width/4, height/16)
    this.button.position((width/3)* 2, height - height/16 - height/32);
    this.button.mousePressed(showpopUp);
  }
  
  showpopUp() {
  fill(51);
  rect(height / 2 - height/4, width / 2 - width/4, height/2, width/2);
  popUp.show();
  userInput.show();
  submitButton.show();
}
  
  
  function resize(){
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

}