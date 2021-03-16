class Polygon{
    constructor(x,y,side,radius){
        var options={
            isStatic:false
        }
            this.body = Bodies.polygon(x,y,side,radius,options);
            this.side = side;
            this.radius = radius;
            this.image = loadImage("Sprites/polygon.png")
            World.add(world,this.body);
    }

    display(){
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.side,this.radius);
        pop();
    }

}