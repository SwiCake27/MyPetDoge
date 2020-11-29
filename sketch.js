//Create variables here
var dog, doge, happyDog, foodS, foodstock,database;
function preload()
{
  //load images here
  dog=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  doge=createSprite(200,200,10,50)
foodStock=database.ref("Food")
doge.addImage(dog);
foodStock.on("value",readStock)
}

function draw() {  
background(46, 139, 87);

doge.scale=0.1;
if (keyWentDown(UP_ARROW)){
 writeStock(foodS);
  doge.addImage(happyDog);

}
if(keyWentUp(UP_ARROW)){
  doge.addImage(dog)
}
text("food remaing"+foodS,170,200)
  drawSprites();
  //add styles here
  text("Press Up Arrow To Feed The Dog Milk",150,100)
  

}

function readStock(data){
  foodS=data.val();
  }
  function writeStock(x){
    if (x<=0){
      x=0
    }
    else{
      x=x-1
    }
  database.ref('/').update({
    Food:x
  })

  }
