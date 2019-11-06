const GAMEBOARD_WIDTH = 1130;
const GAMEBOARD_HEIGHT =600;

const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";

const NINJA_WIDTH = 50;
const NINJA_HEIGHT = 80;

const DEFAULT_NINJA_X_POSITION = 100;
const DEFAULT_NINJA_Y_POSITION = 100;
const DEFAULT_NINJA_ORIENTATION = ORIENTATION_DOWN;
const DEFAULT_NINJA_SPEED = 50;

function Ninja(){
    this.xPosition = DEFAULT_NINJA_X_POSITION;
    this.yPosition = DEFAULT_NINJA_Y_POSITION;
    this.orientation = ORIENTATION_DOWN;
    this.speed = DEFAULT_NINJA_SPEED;
    this.step = 1;

    this.buildImage = function(){
        this.image = this.orientation + this.step + '.png';
    };

    this.buildImage();

    
this.move = function(){
       switch (this.orientation) {
           case ORIENTATION_DOWN:
               if(this.yPosition<500 ){
                   this.yPosition += this.speed;
                //    console.log("yPosition " + this.yPosition )
                //    console.log("xPosition " + this.xPosition )
               }
               break;
           case ORIENTATION_UP:
               if(this.yPosition>0 ){
                   this.yPosition -= this.speed;
                //    console.log("yPosition " + this.yPosition )
                //    console.log("xPosition " + this.xPosition )
               }
               break;
           case ORIENTATION_LEFT:
               if(this.xPosition >0){
                   this.xPosition -= this.speed;
                //    console.log("yPosition " + this.yPosition )
                //    console.log("xPosition " + this.xPosition )
               }
               break;
           case ORIENTATION_RIGHT:
               if(this.xPosition <1030){
                   this.xPosition += this.speed;
                   break;
               }
       }
       if(this.step === 2){
           this.step = 1;
       } else {
           this.step = 2;
       }
       this.buildImage();
   };

    this.turn = function(orientation){
        this.orientation = orientation;
        this.step = 1;
        this.buildImage();
    };

    this.show = function(ctx){
        var image = new Image();
        var xPosition = this.xPosition;
        var yPosition = this.yPosition;
        image.onload = function(){
            ctx.drawImage(image, xPosition, yPosition);
        };
        image.src = './image/' + this.image;
    }
}

function GameBoard() {
    this.ninja = new Ninja();
    this.ctx = undefined;
    this.start = function(){
        this.ctx = document.getElementById('gameCanvas').getContext('2d');
        this.ninja.show(this.ctx);
    };

    this.render = function(){
        this.ctx.clearRect(0, 0, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
        this.ninja.show(this.ctx);
    };

    this.moveNinja = function(event){
        var orientation = 0;
        switch (event.which){
            case 37:
                orientation = ORIENTATION_LEFT;
                break;
            case 38:
                orientation = ORIENTATION_UP;
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                break;
            case 40:
                orientation = ORIENTATION_DOWN;
                break;
        }

        if(orientation){
            if(this.ninja.orientation !== orientation){
                this.ninja.orientation = orientation;
            } else {
                this.ninja.move();
            }
            this.render();
        }
    }
}

var gameBoard = new GameBoard();
gameBoard.start();