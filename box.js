
class Box extends BaseClass {
  constructor(x, y){
    super(x,y,75,75);
    this.image = loadImage("sprites/wood1.png");
  }
  display() {
    super.display();
  }

};
/*class Box {
  constructor(x, y, width, height) {

    this.BoxImg = loadImage ("sprites/wood1.png")

    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("cyan")
    strokeWeight(5)
    stroke("brown");
    image(this.BoxImg, 0, 0, this.width, this.height);
    pop();
  }
};*/
/*
class Box extends BaseClass {
  constructor(x,y){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

  display() {
    super.display();
  }
}
*/