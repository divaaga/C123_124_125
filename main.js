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
    }
}

function modelLoaded() {
}

function draw(){
    background("#6cb8eb"); 
}
