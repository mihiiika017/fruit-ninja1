var sword, swordImage;
var monster, monsterImage;
var fruit, fruit1Image, fruit2Image, fruit4Image, fruit3Image;
var gameOver;
var PLAY = 1;
var END = 0;
var GameState = 1;
var score = 0;

function preload(){
  enemyGroup = new Group ();
  fruitGroup = new Group ();
  swordImage = loadImage ("sword.png");
  monsterImage = loadAnimation ("alien1.png" ,"alien2.png");
  fruit1Image = loadImage ("fruit1.png");
  fruit2Image = loadImage ("fruit2.png");
  fruit3Image = loadImage ("fruit3.png");
fruit4Image = loadImage ("fruit4.png");
  gameOverImage = loadImage ("gameover.png");
  
  
}

function setup () {
  createCanvas (600,600);
  sword = createSprite (40,200,20,20);
  sword.addImage (swordImage);
  sword.scale = 0.7;

}

function draw(){
 
  background ("lightblue");
  
  
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  
  if (fruitGroup.isTouching (sword)) {
    fruitGroup.destroyEach ();
    score = score + 2;
  }
  textSize (20) ; 
  fill ("red");
  text ("score: "+ score , 200,50);
   
  
  fruits ();
  enemy ();
  drawSprites ();
}

function fruits () {
  if (frameCount % 80 === 0 ) {
    fruit = createSprite (600,200,20,20);
    var r = Math.round (random (1,4))
    switch (r) {
      case 1 : fruit.addImage (fruit1Image);
        break 
        case 2: fruit.addImage (fruit2Image);
      break
      case 3: fruit.addImage (fruit3Image);
    break
    case 4: fruit.addImage (fruit4Image);
    break
    }
    fruit.velocityX = -7;
    fruit.y = Math.round (random (60,300));
    fruit.setLifetime = 100;
    fruit.scale = 0.3;
        
    fruitGroup.add (fruit);
        
  }
}

function enemy () {
  if (frameCount %200 === 0) {
    monster = createSprite (400,200,20,20)
    monster.addAnimation ("moving", monsterImage);
    monster.y = Math.round (random (100,300));
    monster.velocityX = -8;
    monster.setLifetime = 50;
    
    enemyGroup.add(monster);
    }
 function end () {
   
   if (sword.isTouching (enemy)) {
     sword.addImage (gameOver);
     sword.x = 200;
     sword.y = 200;
   }
 }
  }
  
  