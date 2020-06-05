class Sling4 {
    constructor(bodyA, bodyB){
var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    stiffness : 0.12,
    length : 3
}


this.sling4 = Constraint.create(options);
World.add(world,this.sling4);
    }
    attach(){
        this.sling4.bodyA = body;
    }
    fly(){
        this.sling4.bodyA = null;
    }
    display(){
        
        if(this.sling4.bodyB&&this.sling4.bodyA){
            var pointA = this.sling4.bodyA.position;
            var pointB = this.sling4.bodyB.position;
            strokeWeight(5);
            stroke("blue");
                line(pointA.x , pointA.y-20 , pointB.x+3 , pointB.y-15 );
                
               
            
        }
    }
}