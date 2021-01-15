const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;
const Body = Matter.Body;
const Constraints = Matter.Constraints;

var canvas;
var walking;
var manNUmbrella;


function preload(){
    
}

function setup(){
    canvas = createCanvas(1000, 550);
    engine = Engine.create();
    world = engine.world;

    manNUmbrella = new Umbrella(250, 500);
    manNUmbrella.scale=0.1;
    
    
    
    Engine.run(engine);
}

function draw(){ 
    background("black");
    for(var i=0; i<=2000; i++){
        var drops = new Drops(random(10,990),10);
    }
    drops.update;
    manNUmbrella.display();
    
}   

