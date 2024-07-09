status = "";

function setup(){
    canvas = createCanvas(480,380);
    camera = createCapture(VIDEO);
    canvas.center();
    camera.size(480,380);
    camera.hide();
}

function draw(){
    image(camera,0,0,480,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}