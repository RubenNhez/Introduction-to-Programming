/*

The Game Project 7 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var clouds;
var mountains;
var trees_x;
var collectables;
var canyons;
var flagpole;
var flagpole1;
var lives;

var game_score;

var platforms;

var enemies;




function setup()
{
	createCanvas(1024, 576);

    lives = 4;
    textSize(20);
    
    startGame();
    
}

function startGame()
{
    floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;



	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
    
    trees_x = [-300,-200,-100,0,100,200,300,400,500,600,700,800,900,1000,1100,1400,1750,1900,2200,2300,2400,2500,3100,3200,3500,-2000,2100,-2300,-2500,-3000.-3100,-3400,-3700,-3800,-3900];
    
    clouds = [
        {x_pos : 250, width : 150},
        {x_pos : 790, width : 150},
        {x_pos : 1500, width : 20},
        {x_pos : -700, width : 80},
        {x_pos : -1100, width : 80},
        {x_pos : -2000, width : 20},
        {x_pos : -2600, width : 20},
        {x_pos : -3500, width : 20},
        {x_pos : 2000, width : 20},
        {x_pos : 3000, width : 20},
        {x_pos : 3500, width : 20},
    ]
    
    mountains = [ 
        {x_pos :floorPos_y, width : 50},
        {x_pos :floorPos_y - 1000, width : 50},
        {x_pos :floorPos_y - 2000, width : 50},
        {x_pos :floorPos_y - 2200, width : 50},
        {x_pos :floorPos_y - 2400, width : 50},
        {x_pos :floorPos_y - 2700, width : 50},
        {x_pos :floorPos_y - 3500, width : 50},
        {x_pos :floorPos_y + 1200, width : 50},
        {x_pos :floorPos_y + 2200, width : 50},
        {x_pos :floorPos_y + 3300, width : 50}
    ]
    canyons = [
        {x_pos : 0, width : 100},
        {x_pos : -500, width : 100},
        {x_pos : -980, width : 100},
        {x_pos : -1300, width : 100},
        {x_pos : -1500, width : 100},
        {x_pos : -1700, width : 100},
        {x_pos : -1900, width : 100},
        {x_pos : -3000, width : 100},
        {x_pos : -3300, width : 100},
        {x_pos : 1300, width : 100},
        {x_pos : 1900, width : 100},
        {x_pos : 2100, width : 100},
        {x_pos : 2500, width : 100}
    ]
    collectables = [
        {x_pos: -600, y_pos: 422, size: 50, isFound: false},
        {x_pos: -800, y_pos: 422, size: 50, isFound: false},
        {x_pos: -1100, y_pos: 342, size: 50, isFound: false},
        {x_pos: -1600, y_pos: 422, size: 50, isFound: false},
        {x_pos: -1800, y_pos: 422, size: 50, isFound: false},
        {x_pos: -2200, y_pos: 422, size: 50, isFound: false},
        {x_pos: -2400, y_pos: 422, size: 50, isFound: false},
        {x_pos: -2600, y_pos: 342, size: 50, isFound: false},
        {x_pos: -2700, y_pos: 342, size: 50, isFound: false},
        {x_pos: -3100, y_pos: 422, size: 50, isFound: false},
        {x_pos: -3200, y_pos: 422, size: 50, isFound: false},
        {x_pos: -3500, y_pos: 422, size: 50, isFound: false},
        {x_pos: 100, y_pos: 422, size: 50, isFound: false},
        {x_pos: 600, y_pos: 422, size: 50, isFound : false},
        {x_pos: -400, y_pos: 422, size: 50, isFound: false},
        {x_pos: 800, y_pos: 422, size: 50, isFound: false},
        {x_pos: 250, y_pos: 342, size: 50, isFound: false},
        {x_pos: 2900, y_pos: 342, size: 50, isFound: false},
        {x_pos: 3300, y_pos: 342, size: 50, isFound: false},
        {x_pos: 1200, y_pos: 422, size: 50, isFound: false},
        {x_pos: 1400, y_pos: 422, size: 50, isFound: false},
        {x_pos: 1500, y_pos: 422, size: 50, isFound: false},
        {x_pos: 1600, y_pos: 422, size: 50, isFound: false},
        {x_pos: 1800, y_pos: 422, size: 50, isFound: false},
        {x_pos: 2250, y_pos: 422, size: 50, isFound: false},
        {x_pos: 2600, y_pos: 422, size: 50, isFound: false},
        {x_pos: 3350, y_pos: 422, size: 50, isFound: false},
        {x_pos: 3400, y_pos: 422, size: 50, isFound: false},
        {x_pos: 2000, y_pos: 422, size: 50, isFound: false},
        {x_pos: 2050, y_pos: 422, size: 50, isFound: false},
        {x_pos: 3500, y_pos: 422, size: 50, isFound: false},
        {x_pos: 3600, y_pos: 422, size: 50, isFound: false},
        {x_pos: 3700, y_pos: 422, size: 50, isFound: false},
        {x_pos: 3800, y_pos: 422, size: 50, isFound: false},
        {x_pos: 3900, y_pos: 422, size: 50, isFound: false}
            
    ]
    
    flagpole = {x_pos: -4000, isReached: false, height: 300};
    flagpole1 = {x_pos: 4000, isReached: false, height: 300};
    
    
    game_score = 0;
    
    platforms = [];
    
    platforms.push(createPlatform(200,floorPos_y - 80,100));
    platforms.push(createPlatform(400,floorPos_y - 160,100));
    platforms.push(createPlatform(2900,floorPos_y - 80,100));
    platforms.push(createPlatform(3300,floorPos_y - 80,100));
    platforms.push(createPlatform(-2600,floorPos_y - 80,100));
    platforms.push(createPlatform(-2700,floorPos_y - 80,100));
    platforms.push(createPlatform(-1100,floorPos_y - 80,100));
    
    
    
    lives -= 1;
    
    enemies = [];
    
    enemies.push(new Enemy(100,floorPos_y));
    enemies.push(new Enemy(-2750,floorPos_y));
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    push();
    translate(scrollPos, 0);
   

	// Draw clouds.
    for(var i = 0; i < clouds.length; i++)
    {
        fill(128,128,128)
        ellipse(clouds[i].x_pos,80,200,130)
        ellipse(clouds[i].x_pos + 100,80,200,130)
        ellipse(clouds[i].x_pos + 200,80,200,130)

        strokeWeight(3);
        fill(100,155,255)
        stroke(255,255,0)
        beginShape();
        vertex(clouds[i].x_pos + 67,140)
        vertex(clouds[i].x_pos + 42,173)
        vertex(clouds[i].x_pos + 81,198)
        vertex(clouds[i].x_pos + 47,223)
        endShape()

        strokeWeight(3);
        fill(100,155,255)
        stroke(255,255,0)
        beginShape();
        vertex(clouds[i].x_pos + 207,140)
        vertex(clouds[i].x_pos + 182,173)
        vertex(clouds[i].x_pos + 241,198)
        vertex(clouds[i].x_pos + 207,223)
        endShape()

        strokeWeight(3);
        fill(100,155,255)
        stroke(255,255,0)
        beginShape();
        vertex(clouds[i].x_pos - 40,140)
        vertex(clouds[i].x_pos - 80,173)
        vertex(clouds[i].x_pos - 20,198)
        vertex(clouds[i].x_pos - 85,223)
        endShape()
        noStroke()
    
    
    }


	// Draw mountains.
    for(var i = 0; i < mountains.length; i++)
    {
        fill(119,136,153)
        stroke(0,0,0)
        rect(mountains[i].x_pos - 110,370,mountains[i].width,62)
        rect(mountains[i].x_pos - 61,322,mountains[i].width,110)
        rect(mountains[i].x_pos - 11,272,mountains[i].width + 20,160)
        rect(mountains[i].x_pos + 58,339,mountains[i].width + 30,93)
        point(mountains[i].x_pos - 97,400)
        point(mountains[i].x_pos - 70,387)
        point(mountains[i].x_pos - 45,333)
        point(mountains[i].x_pos - 40,376)
        point(mountains[i].x_pos - 30,402)
        point(mountains[i].x_pos + 10,400)
        point(mountains[i].x_pos + 20,300)
        point(mountains[i].x_pos + 30,409)
        point(mountains[i].x_pos + 70,354)
        point(mountains[i].x_pos + 90,382)
        point(mountains[i].x_pos + 120,401)
            
    }

	// Draw trees.
    for(var i = 0; i < trees_x.length; i++)
    {
        noStroke()
        fill(139,69,19)
        rect(trees_x[i] - 5,floorPos_y - 60,10,60)
        fill(255,105,180)
        ellipse(trees_x[i] + 16,floorPos_y - 76,50,50)
        ellipse(trees_x[i] - 14,floorPos_y - 76,50,50)
        ellipse(trees_x[i] + 1,floorPos_y- 98,50,50)  
    }

	// Draw canyons.
    for(var i = 0; i < canyons.length; i++)
    {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
        fill(255,140,0)
        stroke(139,69,19)
        rect(canyons[i].x_pos,432,canyons[i].width,200)
        stroke(0,191,255)
        fill(0,191,255)
        rect(canyons[i].x_pos,561,canyons[i].width,15)
        strokeWeight(3)
        fill(255,140,0)
        stroke(139,69,19)
        beginShape()
        vertex(canyons[i].x_pos,450)
        vertex(canyons[i].x_pos + 20,450)
        vertex(canyons[i].x_pos + 40,455)
        vertex(canyons[i].x_pos + 60,455)
        vertex(canyons[i].x_pos + 80,460)
        vertex(canyons[i].x_pos + 100,460)
        endShape()

        strokeWeight(3)
        fill(255,140,0)
        stroke(139,69,19)
        beginShape()
        vertex(canyons[i].x_pos,475)
        vertex(canyons[i].x_pos + 20,475)
        vertex(canyons[i].x_pos + 40,480)
        vertex(canyons[i].x_pos + 60,480)
        vertex(canyons[i].x_pos + 80,485)
        vertex(canyons[i].x_pos + 100,485)
        endShape()

        fill(128,128,128)
        triangle(canyons[i].x_pos + 20,575,canyons[i].x_pos + 25,550,canyons[i].x_pos + 30,575)
        triangle(canyons[i].x_pos+ 75,575,canyons[i].x_pos + 80,550,canyons[i].x_pos + 85,575)
    }


	// Draw collectable items.
    for(var i = 0; i < collectables.length; i++)
    {
        if(!collectables[i].isFound)
        {
        drawCollectable(collectables[i]);
        checkCollectable(collectables[i]);
        
        noStroke()
        strokeWeight(3)
        fill(0,255,0)
        beginShape();
        vertex(collectables[i].x_pos,collectables[i].y_pos);
        vertex(collectables[i].x_pos + 10,collectables[i].y_pos + 10);
        vertex(collectables[i].x_pos + 20,collectables[i].y_pos);
        vertex(collectables[i].x_pos + 10,collectables[i].y_pos- 10);
        endShape();
        }
    }

        
    
    if(!checkFlagpole.isReached)
    {
        checkFlagpole(flagpole);
    }
    drawFlagpole(flagpole);
    
    
    if(!checkFlagpole1.isReached)
    {
        checkFlagpole1(flagpole1);
    }
    drawFlagpole1(flagpole1);
    
    for(var i =0; i < platforms.length; i++)
        {
            platforms[i].draw();
        }
    
    for(var i = 0; i <enemies.length; i++)
    {
        enemies[i].update();
        enemies[i].draw();
        if(enemies[i].isContact(gameChar_world_x, gameChar_y))
            {
                startGame();
                break;
            }
    }
    
    
    pop();


	// Draw game character.
	
	drawGameChar();
    
    text("score: " + game_score, 20, 40);
    text("lives: " + lives, 20, 60);
    
    if(lives < 0)
    {
        text("game over - press reload to try again",
        width/2 - 100, height/2);
        return;
    }
    else if (flagpole.isReached)
    {
        text("level complete - press reload to play again",
        width/2 - 100, height/2);
        return;
    }
    else if (flagpole1.isReached)
    {
        text("level complete - press reload to play again",
        width/2 - 100, height/2);
        return;
    }
    
    if(gameChar_y > height)
    {
        if(lives > 0)startGame();
    }

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
    
    if (isLeft)
    {
        gameChar_x -= 1;
    }
    if (isRight)
    {
        gameChar_x += 1;
    }
    if (isFalling)
    {
        gameChar_y -= 5
    }
    else if (gameChar_y < floorPos_y)
    {
        var isContact = false;
        
        for(var i = 0; i < platforms.length; i++)
        {     
            if(platforms[i].checkContact(gameChar_world_x, gameChar_y) == true)
                {
                    isContact = true;
                    break;
                }
        }
        
        if(isContact == false)
        {
        gameChar_y += 4;
        }
        else
        {
            isFalling = false;
        }
        
    }

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){
    
    if(flagpole.isReached && key == ' ')
    {
        nextLevel();
    }
    else if(flagpole1.isReached && key == ' ')
    {
        nextLevel();
    }
    else if(lives == 0 && key == ' ')
    

	console.log("press" + keyCode);
	console.log("press" + key);
    
    if (key == "A")
    {
        isLeft = true;
    }
    
    if (key == "D")
    {
        isRight = true;
    }
    if (key == "W" && gameChar_y == floorPos_y)
    {
        gameChar_y = gameChar_y - 120;
    }
    else if (key == "W")
    {
        isFalling = true;
    }
}


function keyReleased()
{

	console.log("release" + keyCode);
	console.log("release" + key);
    
    if (key == "A")
    {
        isLeft = false;
    }
    if (key == "D")
    {
        isRight = false;
    }
    if (key == "W")
    {
        isFalling = false;
    }

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
    if(isLeft && isFalling)
	{
		// add your jumping-left code
        fill(0)
        ellipse(gameChar_x,gameChar_y-60,20)
        rect(gameChar_x-1,gameChar_y-50,4,32)
        rect(gameChar_x-4,gameChar_y-21,4,15)
        rect(gameChar_x+3,gameChar_y-21,4,15)
        rect(gameChar_x,gameChar_y-45,8,5)
        rect(gameChar_x+1,gameChar_y-38,5,5)
        rect(gameChar_x,gameChar_y-40,-6,-5)
        rect(gameChar_x-14,gameChar_y-33,8,-5)
        rect(gameChar_x-4,gameChar_y-45,-5,10)
        rect(gameChar_x-4,gameChar_y-45,-5,12)
        rect(gameChar_x+11,gameChar_y-45,-5,12)


	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
        fill(0)
        ellipse(gameChar_x,gameChar_y-60,20)
        rect(gameChar_x-1,gameChar_y-50,4,32)
        rect(gameChar_x-4,gameChar_y-21,4,15)
        rect(gameChar_x+3,gameChar_y-21,4,15)
        rect(gameChar_x,gameChar_y-45,8,5)
        rect(gameChar_x+10,gameChar_y-38,5,5)
        rect(gameChar_x,gameChar_y-40,-6,-5)
        rect(gameChar_x-7,gameChar_y-33,8,-5)
        rect(gameChar_x-4,gameChar_y-45,-5,10)
        rect(gameChar_x-4,gameChar_y-45,-5,12)
        rect(gameChar_x+11,gameChar_y-45,-5,12)

	}
	else if(isLeft)
	{
		// add your walking left code
        fill(0)
        ellipse(gameChar_x,gameChar_y-60,20)
        rect(gameChar_x-1,gameChar_y-50,4,32)
        rect(gameChar_x-4,gameChar_y-21,4,22)
        rect(gameChar_x+3,gameChar_y-21,4,22)
        rect(gameChar_x,gameChar_y-45,8,5)
        rect(gameChar_x+1,gameChar_y-38,5,5)
        rect(gameChar_x,gameChar_y-40,-6,-5)
        rect(gameChar_x-14,gameChar_y-33,8,-5)
        rect(gameChar_x-4,gameChar_y-45,-5,10)
        rect(gameChar_x-4,gameChar_y-45,-5,12)
        rect(gameChar_x+11,gameChar_y-45,-5,12)


	}
	else if(isRight)
	{
		// add your walking right code
        fill(0)
        ellipse(gameChar_x,gameChar_y-60,20)
        rect(gameChar_x-1,gameChar_y-50,4,32)
        rect(gameChar_x-4,gameChar_y-21,4,22)
        rect(gameChar_x+3,gameChar_y-21,4,22)
        rect(gameChar_x,gameChar_y-45,8,5)
        rect(gameChar_x+10,gameChar_y-38,5,5)
        rect(gameChar_x,gameChar_y-40,-6,-5)
        rect(gameChar_x-7,gameChar_y-33,8,-5)
        rect(gameChar_x-4,gameChar_y-45,-5,10)
        rect(gameChar_x-4,gameChar_y-45,-5,12)
        rect(gameChar_x+11,gameChar_y-45,-5,12)


	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        fill(0)
        ellipse(gameChar_x,gameChar_y-60,20)
        rect(gameChar_x-1,gameChar_y-50,4,32)
        rect(gameChar_x-4,gameChar_y-21,4,15)
        rect(gameChar_x+3,gameChar_y-21,4,15)
        rect(gameChar_x,gameChar_y-45,8,5)
        rect(gameChar_x,gameChar_y-40,-6,-5)
        rect(gameChar_x-4,gameChar_y-45,-5,10)
        rect(gameChar_x-4,gameChar_y-45,-5,12)
        rect(gameChar_x+11,gameChar_y-45,-5,12)

	}
	else
	{
		// add your standing front facing code
        fill(0)
        ellipse(gameChar_x,gameChar_y-60,20)
        rect(gameChar_x-1,gameChar_y-50,4,32)
        rect(gameChar_x-4,gameChar_y-21,4,22)
        rect(gameChar_x+3,gameChar_y-21,4,22)
        rect(gameChar_x,gameChar_y-45,8,5)
        rect(gameChar_x,gameChar_y-40,-6,-5)
        rect(gameChar_x-4,gameChar_y-45,-5,10)
        rect(gameChar_x-4,gameChar_y-45,-5,12)
        rect(gameChar_x+11,gameChar_y-45,-5,12)

	}
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function clouds()
{
    for(var i = 0; i < clouds.length; i++)
    {
        fill(128,128,128)
        ellipse(clouds[i].x_pos,80,200,130)
        ellipse(clouds[i].x_pos + 100,80,200,130)
        ellipse(clouds[i].x_pos + 200,80,200,130)

        strokeWeight(3);
        fill(100,155,255)
        stroke(255,255,0)
        beginShape();
        vertex(clouds[i].x_pos + 67,140)
        vertex(clouds[i].x_pos + 42,173)
        vertex(clouds[i].x_pos + 81,198)
        vertex(clouds[i].x_pos + 47,223)
        endShape()

        strokeWeight(3);
        fill(100,155,255)
        stroke(255,255,0)
        beginShape();
        vertex(clouds[i].x_pos + 207,140)
        vertex(clouds[i].x_pos + 182,173)
        vertex(clouds[i].x_pos + 241,198)
        vertex(clouds[i].x_pos + 207,223)
        endShape()

        strokeWeight(3);
        fill(100,155,255)
        stroke(255,255,0)
        beginShape();
        vertex(clouds[i].x_pos - 40,140)
        vertex(clouds[i].x_pos - 80,173)
        vertex(clouds[i].x_pos - 20,198)
        vertex(clouds[i].x_pos - 85,223)
        endShape()
        noStroke()
    
    
    }
    
}
// Function to draw mountains objects.
function mountains()
{
    for(var i = 0; i < mountains.length; i++)
    {
        fill(119,136,153)
        stroke(0,0,0)
        rect(mountains[i].x_pos - 110,370,mountains[i].width,62)
        rect(mountains[i].x_pos - 61,322,mountains[i].width,110)
        rect(mountains[i].x_pos - 11,272,mountains[i].width + 20,160)
        rect(mountains[i].x_pos + 58,339,mountains[i].width + 30,93)
        point(mountains[i].x_pos - 97,400)
        point(mountains[i].x_pos - 70,387)
        point(mountains[i].x_pos - 45,333)
        point(mountains[i].x_pos - 40,376)
        point(mountains[i].x_pos - 30,402)
        point(mountains[i].x_pos + 10,400)
        point(mountains[i].x_pos + 20,300)
        point(mountains[i].x_pos + 30,409)
        point(mountains[i].x_pos + 70,354)
        point(mountains[i].x_pos + 90,382)
        point(mountains[i].x_pos + 120,401)
            
    }
}
// Function to draw trees objects.
function trees()
{
    for(var i = 0; i < trees_x.length; i++)
    {
        noStroke()
        fill(139,69,19)
        rect(trees_x[i] - 5,floorPos_y - 60,10,60)
        fill(255,105,180)
        ellipse(trees_x[i] + 16,floorPos_y - 76,50,50)
        ellipse(trees_x[i] - 14,floorPos_y - 76,50,50)
        ellipse(trees_x[i] + 1,floorPos_y- 98,50,50)  
    }

}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    for(var i = 0; i < canyons.length; i++)
    {   
        fill(255,140,0)
        stroke(139,69,19)
        rect(t_canyon.posX,432,canyons[i].width,200)
        stroke(0,191,255)
        fill(0,191,255)
        rect(t_canyon.posX,561,canyons[i].width,15)
        strokeWeight(3)
        fill(255,140,0)
        stroke(139,69,19)
        beginShape()
        vertex(t_canyon.posX,450)
        vertex(t_canyon.posX + 20,450)
        vertex(t_canyon.posX + 40,455)
        vertex(t_canyon.posX + 60,455)
        vertex(t_canyon.posX + 80,460)
        vertex(t_canyon.posX + 100,460)
        endShape()

        strokeWeight(3)
        fill(255,140,0)
        stroke(139,69,19)
        beginShape()
        vertex(t_canyon.posX,475)
        vertex(t_canyon.posX + 20,475)
        vertex(t_canyon.posX + 40,480)
        vertex(t_canyon.posX + 60,480)
        vertex(t_canyon.posX + 80,485)
        vertex(t_canyon.posX + 100,485)
        endShape()

        fill(128,128,128)
        triangle(t_canyon.posX + 20,575,t_canyon.posX + 25,550,t_canyon.posX + 30,575)
        triangle(t_canyon.posX + 75,575,t_canyon.posX + 80,550,t_canyon.posX + 85,575)
    }

}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
    if(gameChar_world_x > t_canyon.x_pos && gameChar_world_x < t_canyon.x_pos + t_canyon.width && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
    }
    else if ( isPlummeting == true)
        {
            gameChar_y += 5
        }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
    for(var i = 0; i < collectables.length; i++)
    {
        noStroke()
        strokeWeight(3)
        fill(0,255,0)
        beginShape();
        vertex(t_collectable.posX,t_collectable.posY);
        vertex(t_collectable.posX + 10,t_collectable.posY + 10);
        vertex(t_collectable.posX + 20,t_collectable.posY);
        vertex(t_collectable.posX + 10,t_collectable.posY - 10);
        endShape();
    }

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
    
    if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < t_collectable.size)
    {
        t_collectable.isFound = true;
        game_score += 1;
    }


}

// Function to draw flag pole

function drawFlagpole(t_flagpole)
{
    push();
    strokeWeight(10);
    stroke(180);
    line(t_flagpole.x_pos, floorPos_y, t_flagpole.x_pos, floorPos_y - flagpole.height);
    pop();
    
    if(t_flagpole.isReached)
    {
        fill(255,0,255);
        rect(t_flagpole.x_pos, floorPos_y - flagpole.height, 60,40);
    }
}

//Function to check flag
function checkFlagpole(t_flagpole)
{
    if(dist(gameChar_world_x, 0, flagpole.x_pos, 0) < 20)
        {
            t_flagpole.isReached = true;
        }
}

function drawFlagpole1(t_flagpole1)
{
    push();
    strokeWeight(10);
    stroke(180);
    line(t_flagpole1.x_pos, floorPos_y, t_flagpole1.x_pos, floorPos_y - flagpole1.height);
    pop();
    
    if(t_flagpole1.isReached)
    {
        fill(255,0,255);
        rect(t_flagpole1.x_pos, floorPos_y - flagpole.height1, 60,40);
    }
}

//Function to check flag
function checkFlagpole1(t_flagpole1)
{
    if(dist(gameChar_world_x, 0, flagpole1.x_pos, 0) < 20)
        {
            t_flagpole1.isReached = true;
        }
}

function Enemy (x,y,range)
{
    this.x = x;
    this.y = y;
    this.range = range;
    this.current_x = x;
    this.incr = 1;
    
    this.draw = function()
    {
        fill(0);
        ellipse(this.current_x,this.y - 20, 40);
        fill(255,0,0);
        ellipse(this.current_x - 5,this.y - 20, 5);
        ellipse(this.current_x + 5,this.y - 20, 5);
    }
    
    this.update = function()
    {
        this.current_x += this.incr;
        
        if(this.current_x < this.x)
        {
           this.incr = 1; 
        }
        else if(this.current_x > this.x + this.range)
        {
            this.incr = -1;
        }
    }
    
    this.isContact = function(gc_x, gc_y)
    {
        //returns true if contact is made
        var k = dist(gc_x, gc_y, this.current_x, this.y)
        
        if(k < 20)
            {
                return true;
            }
        return false;
    }
}


function createPlatform(x,y, length)
{
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function()
        {
            fill(255,255,0);
            stroke(0);
            rect(this.x, this.y, this.length, 20);
        },
        
        checkContact : function(gc_x, gc_y)
        {
            //checks whether game char is incontact with the platform
            if(gc_x > this.x && gc_x < this.x + this.length)
            {
                var d = this.y - gc_y;
                if(d >= 0 && d < 5)
                {
                    return true;
                }
                
                return false;
            }
        }
    }
    
    return p;

}