
var hero;
var end;
var level = 1, gameState = 1;
var level1Sprites, level2Sprites;
var level3Sprites, level4Sprites;
var trophy;
var hup
var hdow
var hrig
var hlef

function preload() {

    trophy = loadImage("gg.png");
    hup = loadImage("heroup.png");
    hdown = loadImage ("herodown.png");
    hright = loadImage ("heroright.png");
    hleft = loadImage ("heroleft.png");

}

function setup() {

    createCanvas(400, 400);
    level1Sprites = new Group();
    level2Sprites = new Group();
    level3Sprites = new Group();
    level4Sprites = new Group();

    hero = createSprite(90, 90, 10, 10);
    hero.addImage(hleft);
   
    
    //hero.debug = true;
    hero.scale = 0.3
    hero.setCollider("circle",0,0,40);

    var wall1 = createSprite(160, 30, 80, 10);
    var wall2 = createSprite(148, 80, 10, 100);
    var wall3 = createSprite(50, 30, 100, 10);
    var wall4 = createSprite(50, 170, 100, 10);
    var wall5 = createSprite(160, 170, 100, 10);
    var wall9 = createSprite(120, 270, 100, 10);
    var wall10 = createSprite(169, 270, 10, 100);
    var wall11 = createSprite(209, 170, 100, 10);
    var wall12 = createSprite(256, 100, 10, 100);
    var wall13 = createSprite(256, 67, 10, 100);
    var wall14 = createSprite(224, 315, 100, 10);
    var wall21 = createSprite(208, 260, 10, 100);
    var wall22 = createSprite(375, 270, 100, 10);
    var wall23 = createSprite(330, 180, 10, 100);
    var wall24 = createSprite(320, 271, 100, 10);
    var wall25 = createSprite(275, 385, 10, 100);
    var wall26 = createSprite(11, 299, 100, 10);
    var wall27 = createSprite(337, 24, 10, 100);
    var wall28 = createSprite(131, 361, 100, 10);
    var wall29 = createSprite(286, 177, 10, 100);
    end = createSprite(360, 350, 20, 50);
    end.addImage(trophy);

    end.scale = 0.4;

    wall1.shapeColor = "red";
    wall2.shapeColor = "red";
    wall3.shapeColor = "red";
    wall4.shapeColor = "red";
    wall5.shapeColor = "pink";
    wall9.shapeColor = "pink";
    wall10.shapeColor = "red";
    wall11.shapeColor = "pink";
    wall12.shapeColor = "red";
    wall13.shapeColor = "pink";
    wall14.shapeColor = "pink";
    wall21.shapeColor = "pink";
    wall22.shapeColor = "red";
    wall23.shapeColor = "pink";
    wall24.shapeColor = "pink";
    wall25.shapeColor = "pink";
    wall26.shapeColor = "pink";
    hero.shapeColor = "gold";
    wall27.shapeColor = "red";
    wall28.shapeColor = "pink";
    wall29.shapeColor = "red";
    end.shapeColor = "gold";

    level1Sprites.add(wall1);
    level1Sprites.add(wall1);
    level1Sprites.add(wall1);
    level1Sprites.add(wall1);
    level1Sprites.add(wall2);
    level1Sprites.add(wall3);
    level1Sprites.add(wall4);
    level1Sprites.add(wall5);
    level1Sprites.add(wall9);
    level1Sprites.add(wall10);
    level1Sprites.add(wall11);
    level1Sprites.add(wall12);
    level1Sprites.add(wall13);
    level1Sprites.add(wall14);
    level1Sprites.add(wall21);
    level1Sprites.add(wall22);
    level1Sprites.add(wall23);
    level1Sprites.add(wall24);
    level1Sprites.add(wall25);
    level1Sprites.add(wall26);
    level1Sprites.add(wall27);
    level1Sprites.add(wall28);
    level1Sprites.add(wall29);
    // level1Sprites.add(end);


    //create the level 2 obstacle sprites 


    var ob1 = createSprite(0, 200, 80, 10);
    var ob2 = createSprite(130, 70, 200, 10);//1 big line
    var ob3 = createSprite(90, 150, 80, 10);//under the ball
    var ob4 = createSprite(200, 190, 10, 200);// 3 big line 
    var ob5 = createSprite(130, 80, 10, 150);// 2 big line 
    var ob6 = createSprite(80, 229, 80, 10);
    // plinko game inspired maze part 
    var ob7 = createSprite(140, 200, 100, 10);// line touching the ob4
    var ob8 = createSprite(290, 100, 80, 10);// line face to face ob4
    var ob9 = createSprite(240, 130, 80, 10);// touchibg ob4
    var ob10 = createSprite(340, 160, 120, 10);// line just below ob9 
    var ob11 = createSprite(280, 190, 100, 10);
    var ob12 = createSprite(280, 230, 150, 10);// line 2 touching ob4 
    var ob13 = createSprite(200, 300, 230, 10);
    // line under ob4 not particularly part of the inpir

    // another plinko one :)
    var ob14 = createSprite(160, 260, 80, 10);
    var ob15 = createSprite(40, 260, 100, 10);
    var ob16 = createSprite(40, 310, 10, 100);
    var ob17 = createSprite(120, 350, 130, 10);
    var ob18 = createSprite(250, 340, 10, 90);
    var ob19 = createSprite(340, 260, 170, 10);
    var ob20 = createSprite(320, 340, 110, 10);
    var ob21 = createSprite(330, 90, 10, 100);



    level2Sprites.add(ob1);
    level2Sprites.add(ob2);
    level2Sprites.add(ob3);
    level2Sprites.add(ob4);
    level2Sprites.add(ob5);
    level2Sprites.add(ob6);
    level2Sprites.add(ob7);
    level2Sprites.add(ob8);
    level2Sprites.add(ob9);
    level2Sprites.add(ob10);
    level2Sprites.add(ob11);
    level2Sprites.add(ob12);
    level2Sprites.add(ob13);
    level2Sprites.add(ob14);
    level2Sprites.add(ob15);
    level2Sprites.add(ob16);
    level2Sprites.add(ob17);
    level2Sprites.add(ob18);
    level2Sprites.add(ob19);
    level2Sprites.add(ob20);
    level2Sprites.add(ob21);



    //level 3 work --- -_-
























    





    level1Sprites.setVisibleEach(false);
    level2Sprites.setVisibleEach(false);


   
}

function draw() {
    if (level === 1) {
        background("black");
        level1Sprites.setVisibleEach(true);
        hero.collide(level1Sprites);
        if (gameState === 1) {
           
            if (hero.isTouching(end)) {
                gameState = 2;

            }
            playerMovements();
        } else if (gameState === 2) {
            textSize(20);
            stroke("blue");
            text("YOU WIN", 100, 200);
            stroke(rgb(25, 128, 128));
            text("Press SPace to Level UP", 100, 300);
            if (keyDown("space")) {
                level = 2;
                gameState = 1;
                hero.x = 20;
                hero.y = 20;
                level1Sprites.setVisibleEach(false);
                //end.visible = false;
            }
        }
    }
    else if (level === 2) {
        // end.visible = false;
        end.x = 330;
        end.y = 240;

        background("teal");
        level2Sprites.setVisibleEach(true);
        hero.collide(level2Sprites);
        playerMovements();
        if (gameState === 1) {
           
            if (hero.isTouching(end)) {
                gameState = 2;

            }
            playerMovements();
        } else if (gameState === 2) {
            textSize(20);
            stroke("blue");
            text("YOU WIN", 100, 200);
            stroke(rgb(25, 128, 128));
            text("Press Space to Level UP", 100, 300);
            if (keyDown("space")) {
                level = 3;
                gameState = 1;
                hero.x = 20;
                hero.y = 20;
                level2Sprites.setVisibleEach(false);
                //end.visible = false;
            }
        }


    }
    else if (level === 3) {

    }
    else if (level === 4) {

    }

    drawSprites();

}


function playerMovements() {
    if (keyDown(UP_ARROW)) {

       hero.y -= 5;
       hero.addImage(hup);

    }

    if (keyDown(DOWN_ARROW)) {

        hero.y += 5;
        hero.addImage(hdown);

    }
    if (keyDown(LEFT_ARROW)) {

        
        hero.x -= 5;
        hero.addImage(hleft);


    }
    if (keyDown(RIGHT_ARROW)) {

        
        hero.x += 5;
        hero.addImage(hright);

    }
}


function level2() {

}

function level3() {

}

function level4() {
}