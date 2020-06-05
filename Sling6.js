class Sling6 {
    constructor(bodyA, bodyB){
var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness : 0.16,
    length : 1
}


this.sling6 = Constraint.create(options);
World.add(world,this.sling6);
    }
    attach(){
        this.sling6.bodyA = body;
    }
    fly(){
        this.sling6.bodyA = null;
    }
    display(){
        
        if(this.sling6.bodyB&&this.sling6.bodyA){
            var pointA = this.sling6.bodyA.position;
            var pointB = this.sling6.bodyB.position;
            strokeWeight(5);
            stroke("blue");
                line(pointA.x , pointA.y-20 , pointB.x+3 , pointB.y-15 );
                
               
            
        }
    }
}