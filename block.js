class Block{
    constructor(x,y,width,height,color){
        var options={
            isStatic:false,
            restitution:0.2,
            friction : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;
        this.visibility = 225
        color = random(0,250);
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed<3){
            this.body.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            
            var pos = this.body.position;
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            
            strokeWeight(2);
            fill(this.color);
            stroke(0);
            pop();

        }
        
       
    }
}