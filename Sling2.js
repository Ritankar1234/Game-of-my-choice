class Sling2 {
    constructor(bodyA, bodyB){
var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness : 0.08,
    length : 5
}


this.sling2 = Constraint.create(options);
World.add(world,this.sling2);
    }
    attach(){
        this.sling2.bodyA = body;
    }
    fly(){
        this.sling2.bodyA = null;
    }
    display(){
        
        if(this.sling2.bodyB&&this.sling2.bodyA){
            var pointA = this.sling2.bodyA.position;
            var pointB = this.sling2.bodyB.position;
            strokeWeight(5);
            stroke("blue");
                line(pointA.x , pointA.y-20 , pointB.x+3 , pointB.y-15 );
                
               
            
        }
    }
}