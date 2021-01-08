/*class Bird {
    constructor(x, y) {
      
      this.BirdImg = loadImage("sprites/bird.png")

      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution': 0.95
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER);
      image(this.BirdImg, 0, 0, this.width, this.height);
      pop();
    };
  };*/
/*
class Bird extends ParentClass{
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
    }
    display(){
      super.diaplay()
    }
}
*/
class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.smokeAR = []
  }

  display() {
    super.display();
    var bird1 = [this.log.position.x, this.log.position.y];
    this.smokeAR.push(bird1)
    for (var i = 0; i <= this.smokeAR.length; i++ ){
    image(this.smoke, this.smokeAR[i][0], this.smokeAR[i][1]);
    }
  }
}
  