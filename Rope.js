class RopeMaker {

    constructor(bodyA, PointB) {
        var ConstrainedOptions = {
            bodyA: bodyA,
            pointB: PointB,
            length: 15,
            stiffness: 0.02
        }
        this.PointB = PointB;
        
        this.sling1Img = loadImage("sprites/sling1.png")
        this.sling2Img = loadImage("sprites/sling2.png")
        this.sling3Img = loadImage("sprites/sling3.png")
        this.rope = Constrained.create(ConstrainedOptions);
        World.add(world, this.rope);
    }

    attach(body){
         this.rope.bodyA = body;
     }
     
    fly(){
        this.rope.bodyA = null;
    }
    display() {

        image(this.sling1Img,300, 150)
        image(this.sling2Img,275,150)
        
        if (this.rope.bodyA){

        push()       
        var pointA = this.rope.bodyA.position;
        var pointB = this.PointB;
        
        strokeWeight(5);
        if(pointA.x <= 320){
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            line(pointA.x, pointA.y, pointB.x - 20, pointB.y + 10)
            image(this.sling3Img, pointA.x - 30, pointA.y - 10, 15, 30)
        }
        else{
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            line(pointA.x, pointA.y, pointB.x - 20, pointB.y + 10)
            image(this.sling3Img, pointA.x + 20, pointA.y - 10, 15, 30) 
        }
        pop()
    }

}





}
