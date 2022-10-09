status=""
objects=[];

function preload(){
    img=loadImage('image 2.jpeg');
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    imageDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects!";
}

function modelLoaded(){
    console.log("Model is Successfully Loaded")
   status=true;
   imageDetector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.log("The error is " + error);
}
else{
    console.log(results);
    objects=results;
}
}

function draw(){
    image(img, 25, 25, 590, 370);
    if(status != ""){
        
        for(i=0; i < objects.length; i++){
            percent=floor(objects[i].confidence*100);
            fill("blue");
            text(objects[i].label+ " " + percent + "%", objects[i].x-205, objects[i].y-165);
            noFill();
            stroke("black");
            rect(objects[i].x-215, objects[i].y-175, objects[i].width, objects[i].height);
            document.getElementById("status").innerHTML="Status: Objects Detected";
    
        }
    }
    }