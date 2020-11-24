var backgroung_image = "racing.gif";
var backgroung_imgTag;
var car1_imgTag;
var car2_imgTag;

var canvas = document.getElementById('myCanavs');
var ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.jpg";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "car2.jpg";
var car2_x = 10;
var car2_y = 100;

function addstuff(){
    backgroung_imgTag - new Image();
    backgroung_imgTag.onload = uploadBackground;
    backgroung_imgTag.src = backgroung_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(backgroung_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function car1_up(){
    car1_y = car1_y - 1;
}
function car1_down(){
    car1_y = car1_y + 1;
}
function car1_right(){
    car1_x = car1_x + 1;
}
function car1_left(){
    car1_x = car1_x - 1;
}
function car2_up(){
    car2_y = car2_y - 1;
}
function car2_down(){
    car2_y = car2_y + 1;
}
function car2_right(){
    car2_x = car2_x + 1;
}
function car2_left(){
    car2_x = car2_x - 1;
}
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        car1_up();
        console.log("Car 1 went uppppppppppppppppppp!")
    }
    if(keyPressed == '40'){
        car1_down();
        console.log("Car 1 went downnnnnnnnnnnnnnnnnnnn!")
    }
    if(keyPressed == '37'){
        car1_left();
        console.log("Car 1 went lefttttttttttttttttttttttttttttttttttttt!")
    }
    if(keyPressed == '39'){
        car1_right();
        console.log("Car 1 went rightttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt!")
    }
    if(keyPressed == '87'){
        car2_up();
        console.log("Car 2 went uppppppppppppppppppp!")
    }
    if(keyPressed == '83'){
        car2_down();
        console.log("Car 2 went downnnnnnnnnnnnnnnnnnnn!")
    }
    if(keyPressed == '65'){
        car2_left();
        console.log("Car 2 went lefttttttttttttttttttttttttttttttttttttt!")
    }
    if(keyPressed == '68'){
        car2_right();
        console.log("Car 2 went rightttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt!")
    }
}