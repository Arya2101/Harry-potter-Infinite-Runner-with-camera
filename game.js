class game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = db.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      db.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        p = new player();
        var playerCountRef = await db.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          p.getCount();
        }
        f = new form()
        f.display();
      
      }
  
      harry = createSprite(-50,200);
      harry.addImage(harryImage);
      harry.scale = 0.5;
      hermione = createSprite(-50,200);
      hermione.addImage(hermioneImage);
      hermione.scale = 0.35;
      ronald = createSprite(-50,200);
      ronald.addImage(ronaldImage);
      ronald.scale = 0.4;
      characters = [harry,hermione,ronald];
      }
  
    play(){
      f.hide();

    player.getPlayerInfo();
    
    if(allPlayer !== undefined){
      //var display_position = 100;
     image(bg,1450,160,displayWidth,displayHeight/1.75);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x;
      var y = 90;

      for(var plr in allPlayer){

        index = index + 1;
        x = displayWidth + allPlayer[plr].distance; 
        y = y + 140;

        characters[index-1].x = x;
        characters[index-1].y = y;
        if (index === p.index){
          characters[index - 1].shapeColor = "red";
          camera.position.x = characters[index-1].x;
          camera.position.y = displayHeight/2;
 
        }
       
       }

    }

    if(keyIsDown(RIGHT_ARROW) && p.index !== null){
      p.distance +=10
      p.update();

    }
    console.log(p.distance);
    if(p.distance>1500){
      gameState = 2;
    }
    
    drawSprites();
  }

}
  