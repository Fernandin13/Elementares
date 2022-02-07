class Fogo{
    constructor(x,y){
        var options = {
            friction: 1.0,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body);
    }
    display(){
        var poss = this.body.position
        fogo = createSprite(200,200,10,10);
        fogo.addAnimation("parado",this.animation)
    }
} 