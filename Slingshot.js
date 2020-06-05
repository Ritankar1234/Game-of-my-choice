class Slingshot {
    constructor(bodyA, pointB){
var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness : 0.04,
    length : 10
}
this.sling1 = loadImage("sling.png");
this.sling2 = loadImage("sling2.png");
this.pointB = pointB;
this.sling = Constraint.create(options);
World.add(world,this.sling);
    }
    attach(){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        image(this.sling1,500,430,200,230);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            stroke("#3A3A3A");
                line(pointA.x , pointA.y , pointB.x - 50, pointB.y + 10);
                line(pointA.x , pointA.y, pointB.x + 50, pointB.y + 22);
                image(this.sling2,pointA.x + 25, pointA.y -10,15,30);
            
        }
    }
}