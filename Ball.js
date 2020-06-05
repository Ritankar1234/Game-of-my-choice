class Ball {
    constructor(x,y){
var options = {
    'restitution':0.8,
    'friction':1,
    'density':1
}
this.body = Bodies.rectangle(x,y,70,70,options);
this.width = 70;
this.height = 70;
this.image = loadImage("ball 1.png");
World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push ();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}