var turnSpeed = PI;
var walkSpeed = 20;
var perspect = 240;
var horizon = 70;
var tileWidth = 50;
var nodes = [];

var meX = 200;
var meY = 42;

var drawGrid = function() {
    for (var x = -100; x < 500; x += tileWidth) {
        for (var y = -100; y < 500; y += tileWidth) {
            if (y - meY > -tileWidth-100){
                if ((x/tileWidth + y/tileWidth) % 2) {
                    fill(30, 30, 30);
                } else {
                    fill(240, 240, 240); 
                }
                var p1 = perspect / (perspect + y - meY);
                var x1 = 200 + p1 * (x - meX);
                var y1 = horizon + p1 * 200;
                var p2 = perspect / (perspect + y + tileWidth - meY);
                var x2 = 200 + p2 * (x - meX);
                var y2 = horizon + p2 * 200;
    
                quad(x1, y1, x1 + tileWidth * p1, y1,
                     x2 + tileWidth * p2, y2, x2, y2);
            }
        }    
    }
};

var draw = function() {    
    background(1, 14, 66);
    stroke(0, 0, 0);
    drawGrid();
};

var keyPressed = function() { 
    if (keyCode === LEFT) {
        meX -= walkSpeed;
    } else if (keyCode === RIGHT) {
        meX += walkSpeed;
    } else if (keyCode === UP) {
        meY += walkSpeed;
    } else if (keyCode === DOWN) {
        meY -= walkSpeed;
    }
};

// Initial rotations
//rotateX3D(60*rotateAngle);
//rotateY3D(6*rotateAngle);