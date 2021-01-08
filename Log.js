class LogMaker{
    constructor(x, y, height, angle){

this.LogImg = loadImage("sprites/wood2.png")

        var LogOptions={
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
           
        }

        this.log = Bodies.rectangle(x, y, 30, height,LogOptions)
        Matter.Body.setAngle(this.log, angle)
        this.height = height;
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
        image(this.LogImg, 0, 0, 20, this.height);    
        pop()


    }
}
/*
class LogMaker extends BaseClass {
    constructor(x,y,height,angle){
      super(x,y,30,height,angle);
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.log, angle)
    }
  
    display() {
      super.display();
    }
  }
  */
 /*
 class LogMaker extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }
  */