
class Sling{
    constructor(bodyA, pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            lenght : 2,
            stiffness : 0.004
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }


    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(10);
        fill(240,30,140);
        stroke(240,30,140);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
};