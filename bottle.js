status=""
objects=[];

function preload(){
    img=loadImage('image4.webp');
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
            text(objects[i].label+ " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("black");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            document.getElementById("status").innerHTML="Status: Objects Detected";
    
        }
    }
    }