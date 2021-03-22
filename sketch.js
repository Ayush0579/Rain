const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxCount = 200;
var o = -40;
var drops = [];

function preload(){
    cloudImg = loadImage("images/cloud.png");
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
    blank = loadImage("images/blank.png");
    walking = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
}

function setup(){
    canvas = createCanvas(350, 700);

    engine = Engine.create();
    world = engine.world;

    for (let i = 0; i < maxCount; i++) {
        drops.push(new Drop());
    }

    cloud = createSprite(175, 75, 0, 0);
    cloud.addImage("cloudImage", cloudImg);
    cloud.scale = 0.75;

    manSprite = createSprite(175, 610, 0, 0);
    manSprite.addAnimation("walker", walking);
    manSprite.scale = 0.25;

    man = Bodies.circle(175, 590, 50, {isStatic: true});
    World.add(world, man);
}

function draw(){
    background("black");
    Engine.update(engine);

    for (let i = 0; i < drops.length; i++) {
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}