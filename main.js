var leftWristX, rightWristX, difference;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(510, 100);
    
    video = createCapture(VIDEO);
    video.size(500, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightWristX = " + rightWristX + " leftWristX = " + leftWristX + " Diffrence between the two wrists = " + difference);
    }
}

function modelLoaded() {
    console.log("poseNet has initialized...")
}

function draw(){
    background("#6cb8eb");
    
    document.getElementById("size").innerHTML = "Width and height of the square = " + difference + "px";
    textSize(difference);
    fill("yellow");
    text("DIVA", 200, 200);
}
