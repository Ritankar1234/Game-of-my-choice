class Sling5 {
    constructor(bodyA, bodyB){
var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness : 0.14,
    length : 2
}


this.sling5 = Constraint.create(options);
World.add(world,this.sling5);
    }
    attach(){
        this.sling5.bodyA = body;
    }
    fly(){
        this.sling5.bodyA = null;
    }
    display(){
        
        if(this.sling5.bodyB&&this.sling5.bodyA){
            var pointA = this.sling5.bodyA.position;
            var pointB = this.sling5.bodyB.position;
            strokeWeight(5);
            stroke("blue");
                line(pointA.x , pointA.y-20 , pointB.x+3 , pointB.y-15 );
                
               
            
        }
    }
}