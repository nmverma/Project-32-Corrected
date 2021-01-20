const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var bg = "sprites/bg1.png";
var backgroundImg;
var score;
var gameState = "on slingshot";

function preload(){
    polygon_img=loadImage("polygon.png");
    getBackgroundImg();
  }
  function setup() {
    createCanvas(900,500);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    score=0;
    ground = new Ground(900,500,1900,30);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
   
    //level one
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
   
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
   
    //top
    block16 = new Block(390,155,30,40);
  
    //set 2 for second stand
    //level one
    blocks1 = new Block(640,175,30,40);
    blocks2 = new Block(670,175,30,40);
    blocks3 = new Block(700,175,30,40);
    blocks4 = new Block(730,175,30,40);
    blocks5 = new Block(760,175,30,40);
    //level two
    blocks6 = new Block(670,135,30,40);
    blocks7 = new Block(700,135,30,40);
    blocks8 = new Block(730,135,30,40);
    //top
    blocks9 = new Block(700,95,30,40);
  
    //ball holder with slings
   // ball = Bodies.circle(50,200,20);
    //World.add(world,ball);
  
 //   slingShot = new Slingshot(this.ball,{x:100,y:200});
    polygon = Bodies.rectangle(50,200,20,20);
    World.add(world,polygon);
    slingShot = new Slingshot(polygon,{x:180,y:290});
  }
  function draw() {
    if(backgroundImg)
        background(backgroundImg);
    
    ground.display();
    stand1.display();
    stand2.display();
  
    //strokeWeight(2);
   // stroke("blue");
    fill("orange");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("aqua");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("red");
    block13.display();
    block14.display();
    block15.display();
    fill("yellow");
    block16.display();
    fill("gold");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("purple");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("red")
    blocks9.display();
    
    fill("gold");
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  
    slingShot.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
   block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
  
    blocks1.score();
    blocks2.score();
    blocks3.score();
    blocks4.score();
    blocks5.score();
    blocks6.score();
    blocks7.score();
    blocks8.score();
    blocks9.score();

    textSize(20);
    fill("lightyellow");
    text("Drag the polygon to destroy the blocks",300,30);
    text("SCORE : "+score,750,40);
    console.log(score);
    textSize(10);
    text("Press Space to get a second Chance to Play!!",400 ,450);

   
  }
  function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    }
  }
  function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
  }
  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
        gameState = "on slingshot";
    }
  }

  async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}