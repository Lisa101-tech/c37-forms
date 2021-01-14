class Forms{
 constructor(){
    this.input = createInput("Player Name")
    this.button = createButton("play")
    this.greeting = createElement("h2")
 }
 display(){
    var title = createElement("h1")
    title.html("Car racing game")
    title.position(130,0)
    this.input.position(130,160)
    this.button.position(250,200)
    this.button.mousePressed(()=>{
    
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playerCount++
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)

    this.greeting.html("Hello"+player.name)
    this.greeting.position(130,100)
     })

     }
}
