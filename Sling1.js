class Sling1 {
    constructor(bodyA, pointB){
var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness : 0.04,
    length : 100
}

this.pointB = pointB;
this.sling1 = Constraint.create(options);
World.add(world,this.sling1);
    }
    attach(){
        this.sling1.bodyA = body;
    }
    fly(){
        this.sling1.bodyA = null;
    }
    display(){
        
        if(this.sling1.bodyA){
            var pointA = this.sling1.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            stroke("black");
                line(pointA.x , pointA.y-20 , pointB.x , pointB.y );
                
               
            
        }
    }
}