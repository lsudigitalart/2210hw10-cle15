//var x =[];
//can be defined up in the variables tab it was called
var rocks = [];
//var x1 =10;
//var x2 =20;
//var x3 =30;
function setup(){
  createCanvas(1080, 1080);
  background(0);



  for(var i =0; i<400; i++)
  {
    rocks[i] = new rocks(10,2,290);
  }
}
function draw(){

  ellipse(540,20,10);
  for(var i = 0; i<rocks.length; i++)
  {
    //change in valuse of y
    var y = i *.66;
    //ellipse (x[i], y, 10);

    rocks.display();
    rocks.move();
    // it makes each thing a seperate instance
    //pa,pa. length uses it to assign mbodies to an arraynew p5.Image(/,height,pInst)
    //if 50 units long and use length set equal to something new and can be used to add onto the arrayCopy(srb,srcPosition,dst,dstPosition,length)
  }
  //ellipse(x[1],20,40);
}
function rocks(rockS, rockSpeed, rockXPosition) {
  this.rockS = rockS;

  this.speed = rockSpeed;

  this.xPosition = rockXPosition;

  this.fillColor = color(random(255), random(255), random(255));

  var ey = 0;

this.display = function() {

    fill(this.fillColor);
    ellipse(this.xPosition, ey, this.rockShelves, this.rockS);
    ellipse(this.xPosition-1, ey, this.rockShelves-random(3), this.rockS);
    ellipse(this.xPosition-2, ey, this.rockShelves-random(2), this.rockS);

};

this.move = function() {

    //++?
    ey = ey + this.speed;

};
}

  /*createCanvas(320 , 240);
  background(0);

  for(var i = 0; i < 3000; i++){
    //3000 random values
    x[i]=round(random(0, 100));
  }
}

function draw(){
  //length finds the length of the array for x.lenght
for (var i = 0; x.length; i++){
  x[i] +=0.5;
  var y = i * 0.4;
  ellipse(x[i], y, 20);
}

}
/*x1 = x1 + 0.5;
x2 = x2 + 0.5;
x3 = x3 + 0.5;
ellipse(x1, 20, 20);
ellipse(x3, 50, 20);
ellipse(x3, 100, 20);
