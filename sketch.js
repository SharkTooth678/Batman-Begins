const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world; 
var drops  = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){
    createCanvas(1200,400);


    engine = Engine.create();

    Engine.run(engine);


    if (frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){ 
        drops.push(new createDrop(random(0,400), random(0,400)));

        }




    }

}

function draw(){

 for(var i = 0; i<maxDrops; i++){ 
     drops[i].showDrop(); drops[i].updateY() 
    
}
 
   drawSprites();


}   

