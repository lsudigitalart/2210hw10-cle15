//var x =[];
//can be defined up in the variables tab it was called
var rocks = [];
var rocks1 = [];
var rocks2 = [];
//var x1 =10;
//var x2 =20;
//var x3 =30;

function setup(){
  createCanvas(1080, 1080);
  background(20,40,20);

//var x = random(width);

  for(var i =0; i<1000; i++) {
    rocks[i] = new Rock(30,20,50);
    rocks1[i] = new Rock(30,20,500);
    rocks2[i] = new Rock(30,20,750);
  }
}
function draw(){

  for(var i = 0; i < rocks.length; i++)
  {
    //change in value of y
    //var y = i *.66;
    //ellipse (x[i], y, 10);
    rocks1[i].display();
    rocks1[i].move();
    //rocks1[i].interact();
    rocks2[i].display();
    //rocks2[i].interact()
    rocks2[i].move();
    rocks[i].display();
    rocks[i].move();
    //rocks[i].interact();
    // it makes each thing a seperate instance
    //pa,pa. length uses it to assign mbodies to an arraynew p5.Image(/,height,pInst)
    //if 50 units long and use length set equal to something new and can be used to add onto the arrayCopy(srb,srcPosition,dst,dstPosition,length)
  }
  //ellipse(x[1],20,40);
}
function Rock(rockS, rockSpeed, rockXPosition) {
  this.rockS = rockS;

  this.speed = rockSpeed;

  this.xPosition = rockXPosition;

  this.fillColor = color(random(255), random(255), random(255));

  var ey = random(width);

this.display = function() {

    fill(this.fillColor);
    ellipse(this.xPosition*random(3), ey, this.rockS-2, this.rockS);
    ellipse(this.xPosition-2 *random(2), ey, this.rockS-random(3), this.rockS);

};

this.move = function() {


    ey = ey + this.speed;

};

}
