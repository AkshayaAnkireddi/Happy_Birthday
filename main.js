function preload(){

}
function setup() {
  canvas = createCanvas(500, 100);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
}

function take_snapshot(){
    save('Happy-Birthday!');
}


function draw() {
   circle(40,12,20);
   circle(60,10,20);
   circle(80,20,20);
   //Inner Circles
   circle(40,12,10);
   circle(60,10,10);
   circle(80,20,10);
   //Outer Circles
   circle(100,12,20);
   circle(120,10,20);
   circle(140,20,20);
   //Inner Circles
   circle(100,12,10);
   circle(120,10,10);
   circle(140,20,10);
   //Outer Circles
   circle(160,12,20);
   circle(180,10,20);
   circle(200,20,20);
   //Inner Circles
   circle(160,12,10);
   circle(180,10,10);
   circle(200,20,10);
 //--
  //Outer Circles
  circle(220,12,20);
  circle(240,10,20);
  circle(260,20,20);
  //Inner Circles
  circle(220,12,10);
  circle(240,10,10);
  circle(260,20,10);
//--
 //Outer Circles
 circle(280,12,20);
 circle(300,10,20);
 circle(320,20,20);
 //Inner Circles
 circle(280,12,10);
 circle(300,10,10);
 circle(320,20,10);

 //Title Right
 rect(30, 30, 10, 1000000);

 //Outer Circles
 circle(340,12,20);
 circle(360,10,20);
 circle(380,20,20);
 //Inner Circles
 circle(340,12,10);
 circle(360,10,10);
 circle(380,20,10);

  //Outer Circles
  circle(400,12,20);
  circle(420,10,20);
  circle(440,20,20);
  //Inner Circles
  circle(400,12,10);
  circle(420,10,10);
  circle(440,20,10);

  circle(460,12,20);
  circle(480,10,20);
  circle(460,12,10);
  circle(480,10,10);

  rect(60, 60, 10, 1000000);

  rect(60,60,10,10);

}
