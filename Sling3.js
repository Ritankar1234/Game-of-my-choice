class Sling3 {
    constructor(bodyA, bodyB){
var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness : 0.10,
    length : 4
}


this.sling3 = Constraint.create(options);
World.add(world,this.sling3);
    }
    attach(){
        this.sling3.bodyA = body;
    }
    fly(){
        this.sling3.bodyA = null;
    }
    display(){
        
        if(this.sling3.bodyB&&this.sling3.bodyA){
            var pointA = this.sling3.bodyA.position;
            var pointB = this.sling3.bodyB.position;
            strokeWeight(5);
            stroke("blue");
                line(pointA.x , pointA.y-20 , pointB.x+3 , pointB.y-30 );
                
               
            
        }
    }
}