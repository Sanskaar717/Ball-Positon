var bat,database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    bat = createSprite(200,200,10,10);
    bat.shapeColor = "red";

    var batPosition = database.ref('bat/position');
    batPosition.on("value", readPosition, showError);
}

function draw(){
    background("pink");

    if(position !== undefined){

    if(keyDown(UP_ARROW)){
        writePosition(0,-2);
    }

    else if(keyDown(DOWN_ARROW)){
        writePosition(0,2);
    }

    else if(keyDown(RIGHT_ARROW)){
        writePosition(2,0);
    }

    else if(keyDown(LEFT_ARROW)){
        writePosition(-2,0);
    }
    drawSprites();
}

}

function writePosition(x,y){
    database.ref('bat/position').set({
     'x': position.x + x,
     'y': position.y + y
    })
}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    bat.x = position.x;
    bat.y = position.y;
}

function showError(){
    console.log(error);
}