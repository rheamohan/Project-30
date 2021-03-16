
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var polygon;
var ground1,ground2,ground3;
var ground4;

var sling;

//GROUND1/LANE1
var block1,block2,block3,block4,block5,block6,block7;
//GROUND1/LANE2
var block8,block9,block10,block11,block12;

//GROUND2/LANE1
var block13,block14,block15,block16,block17,block18,block19,block20;
// GROUND2/LANE2
var block21,block22,block23,block24,blocK25,block26;
// GROUND2/LANE3
var block27,block28,block29,block30;
// GROUND2/LANE4
var block31,block32;

// GROUND3/LANE1
var block33,block34,block35,block36,block37,block38,block39,block40;
// GROUND3/LANE2
var block41,block42,block43,block44,block45,block46;
// GROUND3/LANE3
var block47,block48,block49,block50;
// GROUND3/LANE4
var block51,block52;

function preload(){

}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(120,450,80,80);

    // LINE
    sling = new Sling(polygon.body,{x:120, y:450});

    ground1 = new Ground(700,700,380,35);
    ground2 = new Ground(1200,550,400,35);
    ground3 = new Ground(600,350,400,35);
    ground4 = new Ground(800,785,1600,35);

// GROUND1/LANE1
    block1 = new Block(575,500,40,60,("blue"));
    block2 = new Block(620,500,40,60,("blue"));
    block3 = new Block(660,500,40,60,("blue"));
    block4 = new Block(700,500,40,60,("blue"));
    block5 = new Block(740,500,40,60,("blue"));
    block6 = new Block(780,500,40,60,("blue"));
    block7 = new Block(825,500,40,60,("blue"));
// GROUND1/LANE2
    block8 = new Block(620,450,40,60,("silver"));
    block9 = new Block(660,450,40,60,("silver"));
    block10 = new Block(700,450,40,60,("silver"));
    block11 = new Block(740,450,40,60,("silver"));
    block12 = new Block(780,450,40,60,("silver"));

// GROUND2/LANE1
    block13 = new Block(1050,300,40,60,("pink"));
    block14 = new Block(1090,300,40,60,("red"));
    block15 = new Block(1130,300,40,60,("pink"));
    block16 = new Block(1170,300,40,60,("red"));
    block17 = new Block(1210,300,40,60,("pink"));
    block18 = new Block(1250,300,40,60,("red"));
    block19 = new Block(1290,300,40,60,("pink"));
    block20 = new Block(1330,300,40,60,("red"));
// GROUND2/LANE2
    block21 = new Block(1090,250,40,60,("pink"));
    block22 = new Block(1130,250,40,60,("red"));
    block23 = new Block(1170,250,40,60,("pink"));
    block24 = new Block(1210,250,40,60,("red"));
    block25 = new Block(1250,250,40,60,("pink"));
    block26 = new Block(1290,250,40,60,("red"));
// GROUND2/LANE3
    block27 = new Block(1130,220,40,60,("pink"));
    block28 = new Block(1170,220,40,60,("red"));
    block29 = new Block(1210,220,40,60,("pink"));
    block30 = new Block(1250,220,40,60,("red"));
// GROUND2/LANE4
    block31 = new Block(1170,200,40,60,("pink"));
    block32 = new Block(1210,200,40,60,("red"));


// GROUND3/LANE1
    block33 = new Block(450,60,40,60,(100));
    block34 = new Block(490,60,40,60,(100));
    block35 = new Block(530,60,40,60,(100));
    block36 = new Block(570,60,40,60,(100));
    block37 = new Block(610,60,40,60,(100));
    block38 = new Block(650,60,40,60,(100));
    block39 = new Block(690,60,40,60,(100));
    block40 = new Block(730,60,40,60,(100));
// GROUND3/LANE2
    block41 = new Block(490,40,40,60,("pink"));
    block42 = new Block(530,40,40,60,("pink"));
    block43 = new Block(570,40,40,60,("pink"));
    block44 = new Block(610,40,40,60,("pink"));
    block45 = new Block(650,40,40,60,("pink"));
    block46 = new Block(690,40,40,60,("pink"));
// GROUND3/LANE3
    block47 = new Block(530,20,40,60,("red"));
    block48 = new Block(570,20,40,60,("red"));
    block49 = new Block(610,20,40,60,("red"));
    block50 = new Block(650,20,40,60,("red"));
// GROUND3/LANE4
    block51 = new Block(570,0,40,60,("white"));
    block52 = new Block(610,0,40,60,("white"));

    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(0);

    Engine.update(engine);
    drawSprites();

// POLYGON
    polygon.display();

// GROUNDS
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    sling.display();

// GROUND1/LANE1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
// GROUND1/LANE2
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
// GROUND2/LANE1
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
// GROUND2/LANE2
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
// GROUND2/LANE3
    block27.display();
    block28.display();
    block29.display();
    block30.display();  
// GROUN2/LANE4
    block31.display();
    block32.display();

// GROUND3/LANE1
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
// GROUND3/LANE2
    block41.display();
    block42.display();
    block43.display();
    block44.display();
    block45.display();
    block46.display();
// GROUND3/LANE3
    block47.display();
    block48.display();
    block49.display();
    block50.display();
    
// GROUND4/LANE4
    block51.display();
    block52.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
Matter.Body.applyForce(polygon.body,polygon.body.position,{x:5,y:-2});
    Matter.Body.setStatic(polygon.body,false);
}

function keyPressed(){
    if (keyCode===32){
        sling.attach(polygon.body);
    }
}

