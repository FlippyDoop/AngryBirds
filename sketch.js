const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constrained = Matter.Constraint;

var engine, world;
var backgroundImg


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world;

    //SlingShot

    

    //box
    box1 = new Box(1000,575);
    box2 = new Box(1200,575);
    box3 = new Box(1100,470);
    box4 = new Box(1000,410);
    box5 = new Box(1200,410);

    //logs
    Log1 = new LogMaker(1100,500, 300,PI/2);
    Log2 = new LogMaker(1100,440, 400,PI/2);
    Log3 = new LogMaker(1100,380, 350,PI/2);
    
    //ground
    ground = new Ground(800,height,1602,50);
    highGround = new Ground (0, height, 900, 500);

    //pigs
    pig1 = new PigMaker(1100, 575);
    pig2 = new PigMaker(1000, 470);
    pig3 = new PigMaker(1200, 470);
    pig4 = new PigMaker(1100, 410);
    //bird
    bird = new Bird(315, 190);

    //rope
    // could you please show where have you declared RopeMaker c
    console.log(bird.log)
    rope1 = new RopeMaker(bird.log, {x: 320, y: 180})

    
    
    
}

function draw(){
    background(backgroundImg);

    Engine.update(engine);

    

    //box
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    //ground
    ground.display();
    highGround.display();
    //pig
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();

    //logs
    Log1.display();
    Log2.display();
    Log3.display();
   

    //bird
    bird.display();
    
    //rope
    rope1.display();

   
}


function mouseDragged(){
    Matter.Body.setPosition(bird.log, {x: mouseX,y: mouseY});

}



function mouseReleased(){
    rope1.fly();

}

function KeyPressed(){
    if(keyCode === 32){
        rope1.attach(bird.log);
    }
}












































