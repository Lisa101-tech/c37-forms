class Game{
constructor(){
}
getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
    gameState = data.val()
     })
   }
   update(State){
   database.ref("/").update({
    gameState:State
   })
   }
   async start(){
  if(gamestate===0){
    player = new Player()
    var playerCountRef = await database.ref("playerCount").once("value")
    if(playerCountRef.exists()){
    playerCount = playerCountRef.val()
    player.getCount()
    }
  form = new Form()  
  form.display()
  } 
   }
  play(){
  form.hide()
  textSize(30)
  text("Let's play!",120,100)
  Player.getPlayerInfo()
  if(allPlayer!==undefined){
  var display_position = 130
  for(var i in allPlayer){
    if(i==="player"+player.index){
    fill("red")
        }else{
    fill("black")
    }
 display_position += 20
 textSize(15)
 text(allPlayer[i].name +":"+allPlayer[i].distance,120,display_position)
     }
   }
   if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=50
    player.update()

   }
  }
}
