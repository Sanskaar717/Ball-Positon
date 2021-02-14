var bat;

function setup(){
    createCanvas(400,400);

    bat = createSprite(200,200,10,10);
    bat.shapeColor = "red";
}

function draw(){
    background(0);

    if(keyDown("up")){
        changePosition(0,-2);
    }

    if(keyDown("down")){
        changePosition(0,2);
    }

    if(keyDown("right")){
        changePosition(2,0);
    }

    if(keyDown("left")){
        changePosition(-2,0);
    }

    drawSprites();
}

function changePosition(x,y){
    bat.x = bat.x + x;
    bat.y = bat.y + y;
}