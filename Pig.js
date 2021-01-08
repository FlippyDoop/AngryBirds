/*class PigMaker{
    constructor(x, y){

        this.PigImg = loadImage("sprites/enemy.png")

        var PigOptions={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.Pig = Bodies.rectangle(x, y, 30, 30)
        World.add(world, this.Pig)
    }

    display(){
        var pos = this.Pig.position;
        var angle = this.Pig.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("lime")
        strokeWeight(5)
        stroke("green");
        image(this.PigImg, 0, 0, 40, 40);
        pop();
    }

}*/
class PigMaker extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("sprites/enemy.png");
      this.Vanish = 255;
    }
    display(){
        
        if(this.log.speed <= 3){
            
        super.display();
            
        }
        else{
            World.remove(world,this.log);
            push()
            this.Vanish = this.Vanish - 5;
            tint(255, this.Vanish)
            image(this.image, this.log.position.x, this.log.position.y, 50 ,50)
            pop()
        }
        
    }
  };
  