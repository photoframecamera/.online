

function preload() {
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();


}



function draw() {
  image(video, 0, 0, 300, 300);
  fill(255, 255, 0); 
  circle(30, 30, 30);
  circle(270, 30, 30);
  circle(30, 270, 30);
  circle(270, 270, 30);
fill(	0, 255, 255);
rect(40, 25, 220, 10);
rect(40, 265, 220, 10);
rect(25, 40, 10, 220);
rect(265, 40, 10, 220);

}

function take_snapshot(){    
  save('myFilterImage.png');
}