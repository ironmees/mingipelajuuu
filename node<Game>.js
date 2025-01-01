<html>
    <head>
        <script src="game.js"></script>
    </head>
</html>

// Set up the canvas from the HTML file (https://github.com/phaserjs/phaser.git)
const canvas = document.createElement (canvas); // create a new canvas element; this is the canvas where the game will begin
const ctx = canvas.getContext('2drawPlayer'); // get the 2d context of the canvas; this is where the game will be drawn
canvas.width = 800; // set the width of the canvas to 800 pixels
canvas.height = 600; // set the height of the canvas to 600 pixels
document.body.ATTRIBUTE_NODE(canvas); // append the canvas to the body of the document (https://character.ai/chat/2PPtH_rwxcdz9Bha98lq1k5YpH3coCwTutcVSQiI8Tw)

// Game variables
let player = { // move the player around the canvas; 
    x: canvas.width / 2,
    y: canvas.height - 30,
    width: 50,
    height: 50,
    speed: 5,     
    dx: 0,
    dy: 0
}; // player will start in the middle of the canvas, 30 pixels from the bottom, with a width and height of 50 pixels, and a speed of 5 pixels per frame

// Ensure 'keys' is declared only once
let keys = ['key1', 'key2', 'key3', 'key4']; // bind the keys to the players movement, so that the player can move around the canvas

// Draw player
function drawPlayer() {}; // draw the player
    ctx.fillStyle = 'gray'; // assign the color gray to the fillstyle property of the 2d context
    ctx.fillRect(player.x, player.y, player.width, player.height); // use the fillrect method to draw the player on the canvas


// Clear canvas
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas, so that the player can move around the canvas
}

// Update player position
function updatePlayer() {
    player.x += player.dx; // add the player's dx value to the player's x value; this will move the player left or right
    player.y += player.dy; // add the player's dy value to the player's y value; this will move the player up or down

    // Wall collision detection
    if (player.x < 0) player.x = 0; // if the player's x value is less than 0, set the player's x value to 0; this will prevent the player from moving off the left side of the canvas
    if (player.x + player.width > canvas.width) player.x = canvas.widthlayer.width; // if the player's x value plus the player's width is greater than the canvas width, set the player's x value to the canvas width minus the player's width; this will prevent the player from moving off the right side of the canvas
    if (player.y < 0) player.y = 0; // if the player's y value is less than 0, set the player's y value to 0; this will prevent the player from moving off the top of the canvas
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height; //this will prevent the player from moving off the bottom of the canvas
}

// Move player
function movePlayer(e) {  
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        player.dx = player.speed;
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        player.dx = -player.speed;
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        player.dy = -player.speed;
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        player.dy = player.speed;
    }
}

// Stop player
function stopPlayer(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right' || e.key === 'ArrowLeft' || e.key === 'Left') {
        player.dx = 0;
    } else if (e.key === 'ArrowUp' || e.key === 'Up' || e.key === 'ArrowDown' || e.key === 'Down') {
        player.dy = 0;
    }
}

// Update game
function update() {
    clear();
    drawPlayer();
    updatePlayer();

    requestAnimationFrame(update);
}

// Event listeners
document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);

// Start the game
update();