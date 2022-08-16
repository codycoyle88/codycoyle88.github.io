//Set global variable that would contain the position, velocity and the html element "ball"
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var ball4 = document.getElementById('ball4');
var velocity = 100;
var positionX = 50;
var positionY = 0;
var positionX2 = 0;
var positionY2 = 50;
var positionX3 = 80;
var positionY3 = 0;
var positionX4 = 35;
var positionY4 = 0;
//var reverse = true;

// two fixed x-axis coordinates (you will use these variable in step 3)
var Xmin = 0;
var Xmax = 300;
var Ymin = 0;
var Ymax = 300;

// two fixed x-axis coordinates (you will use these variable in step 3)
var Xmin2 = 0;
var Xmax2 = 300;
var Ymin2 = 0;
var Ymax2 = 300;

// two fixed x-axis coordinates (you will use these variable in step 3)
var Xmin3 = 0;
var Xmax3 = 300;
var Ymin3 = 0;
var Ymax3 = 300;

// two fixed x-axis coordinates (you will use these variable in step 3)
var Xmin4 = 0;
var Xmax4 = 300;
var Ymin4 = 0;
var Ymax4 = 300;

//let Minposition = 0;
//let Minposition = 0;
//write a function that can change the position of the html element "ball"
function MyCircles(Min_pos, Max_pos, Position){
    var reverse = true;
    if (Position < Min_pos)
    {
    reverse = true;
    };

    if(Position > Max_pos)
    {
    reverse = false;
    };
    console.log(reverse);
    return reverse;
};

function moveBall() {
  // Section defined for movement of each ball
  //ball1
  ball1.style.left = positionX + 'px';
  ball1.style.top = positionY + 'px';

  if (MyCircles(Xmin, Xmax, positionX) === true)
  {
  positionX = positionX + velocity;
  }
  if (MyCircles(Xmin, Xmax, positionX) === false){
    positionX = positionX - velocity;
  }

if (MyCircles(Ymin, Ymax, positionY) === true)
  {
  positionY = positionY + velocity;
  }

  if (MyCircles(Ymin, Ymax, positionY) === false)
  {
  positionY = positionY - velocity;
  }

  // Section defined for movement of each ball
  //ball1
  ball2.style.left = positionX2 + 'px';
  ball2.style.top = positionY2 + 'px';

  if (MyCircles(Xmin2, Xmax2, positionX2) === true)
  {
  positionX2 = positionX2 + velocity;
  }
  if (MyCircles(Xmin2, Xmax2, positionX2) === false){
    positionX2 = positionX2 - velocity;
  }

if (MyCircles(Ymin2, Ymax2, positionY2) === true)
  {
  positionY2 = positionY2 + velocity;
  }

  if (MyCircles(Ymin2, Ymax2, positionY2) === false)
  {
  positionY2 = positionY2 - velocity;
  }

  // Section defined for movement of each ball
  //ball3
  ball3.style.left = positionX3 + 'px';
  ball3.style.top = positionY3 + 'px';

  if (MyCircles(Xmin3, Xmax3, positionX3) === true)
  {
  positionX3 = positionX3 + velocity;
  }
  if (MyCircles(Xmin3, Xmax3, positionX3) === false){
    positionX3 = positionX3 - velocity;
  }

if (MyCircles(Ymin3, Ymax3, positionY3) === true)
  {
  positionY3 = positionY3 + velocity;
  }

  if (MyCircles(Ymin3, Ymax3, positionY3) === false)
  {
  positionY3 = positionY3- velocity;
  }

    // Section defined for movement of each ball
  //ball4
  ball4.style.left = positionX4 + 'px';
  ball4.style.top = positionY4 + 'px';

  if (MyCircles(Xmin4, Xmax4, positionX4) === true)
  {
  positionX4 = positionX4 + velocity;
  }
  if (MyCircles(Xmin4, Xmax4, positionX4) === false){
    positionX4 = positionX4 - velocity;
  }

if (MyCircles(Ymin4, Ymax4, positionY4) === true)
  {
  positionY4 = positionY4 + velocity;
  }

  if (MyCircles(Ymin4, Ymax4, positionY4) === false)
  {
  positionY4 = positionY4- velocity;
  }

};

console.log(MyCircles(Ymin, Ymax, positionY));
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
