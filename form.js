class form {

    constructor() {
      this.input = createInput("Enter Your Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.button2 = createButton('Reset');
    }
    
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("WELCOME TO THE GAME!!");
      this.title.position(230,5);
  
      this.input.position(150,100);
      this.button.position(150,150);
  this.button2.position(10,5);
  this.button2.mousePressed(()=>{
    g.update(0);
    p.updateCount(0);
  })
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        p.name = this.input.value();
        playerCount+=1;
        p.index = playerCount;
        p.update();
        p.updateCount(playerCount);
        this.greeting.html("Hello " + p.name)
        this.greeting.position(250,200);
      });
  
    }
  }
  