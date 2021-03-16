class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0.2,
            friction:0.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        strokeWeight (5);
        fill(95,60,40);
        stroke(0);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }

}