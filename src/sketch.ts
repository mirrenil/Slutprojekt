//---- GLOBAL VARIABLES ----//
let game: Game;
let animalWarzon: p5.Image;

// let sound: p5.SoundFile

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    // sound: p5.SoundFile = loadSound('../assets/mySound.wav');
    animalWarzon = loadImage('/assets/images/startMenuPicture.png');
} 
/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    // noCursor();
    
    // game = new Game();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    background('blue');
    fill('green');
    stroke('white');
    strokeWeight(10);
    circle(width * .5, height * .5, width * 0.2);
    

    imageMode(CENTER);
    image(animalWarzon, windowHeight /2, windowWidth / 2);

    // game.update();
    // game.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}