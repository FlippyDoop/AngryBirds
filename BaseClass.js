 class BaseClass{
    constructor(x, y, width,height, angle){

        
        var LogOptions={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }

        this.log = Bodies.rectangle(x, y, width, height,LogOptions)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.log)
    }


    display(){

        var pos = this.log.position;
        var angle = this.log.angle;

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        strokeWeight(3)
        stroke("black")
        fill("brown")
        image(this.image, 0, 0, this.width, this.height);    
        pop()


    }
}
/*
class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
*/