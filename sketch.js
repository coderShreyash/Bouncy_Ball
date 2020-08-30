var Ball,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    Ball = createSprite(250,250,10,10);
    Ball.shapeColor = "red";
    var BallPosition=database.ref('Ball/position');
    BallPosition.on("value",readPosition);
}

function draw(){
    background("white");
    if(position!=undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,3);
    }
    drawSprites();
}
}
function readPosition(data){
    position=data.val();
    Ball.x=position.x;
    Ball.y=position.y;
}

function writePosition(x,y){
    
   database.ref('Ball/position').set(
       {
       x:position.x+x,
       y:position.y+y
   }
   )

}
