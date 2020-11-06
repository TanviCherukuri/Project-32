class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.slingshot1IMG = loadImage("sprites/sling1.png");
        this.slingshot2IMG = loadImage("sprites/sling2.png");
        this.slingshot3IMG = loadImage("sprites/sling3.png");
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.slingshot1IMG,150,120,50,100);
        image(this.slingshot2IMG,120,130,50,50);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            push();
            var pointB = this.pointB;
            if (pointA.x < 100) {
                strokeWeight(8);
            }
            else {
                strokeWeight(12);
            }
            stroke("rgb(48,22,8)");
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+25);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y+15);
            pop();
            image(this.slingshot3IMG,pointA.x-20,pointA.y);
        }
        
    }
    attach(bird) {
        this.sling.bodyA = bird;
    }
    
}