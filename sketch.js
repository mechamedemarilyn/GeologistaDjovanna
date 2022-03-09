const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var bolaborrachula;
var stone;


function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600, height, 1200, 20)
    stone = new Stone(200,400,30,30);
    hammer = new Hammer(10, 100);
    bolaborrachula = new Rubber(100, 10, 40);



}

function draw() {
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    bolaborrachula.display();
    
    hammer.display();
   

}