leftWrist_x = 0;
rightWrist_x = 0;

difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(600,400);
    video.position(100,160);
    canvas = createCanvas(550,400);
    canvas.position(700,160);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    fill("green");
    background("#ECFF80");
    document.getElementById("width_height").innerHTML = difference+"px";
    textSize(difference);
    text('Hi',130,280);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotposes(results,error){
    if(error){
        console.log(error);
    }
    if(results.length > 0){
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftWrist_x - rightWrist_x);
        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}