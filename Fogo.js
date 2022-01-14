class Fogo{
    constructor(x,y){
        var options = {
            friction: 1.0,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.image = loadImage("Elementals_fire_knight_basic_v1.0/gifs/01_idle.gif")
        World.add(world,this.body);
    }
    display(){
        var poss = this.body.position
        push();
        imageMode(CENTER)
        image(this.image,poss.x,poss.y,this.width,this.height)
        pop();
    }
}