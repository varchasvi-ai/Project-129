leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() 
{
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    
    canvas = createCanvas(600,400);
    canvas.position(775,200);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function draw()
{
    image(video,0,0,600,500);

    fill("#FFOOOO");
    stroke("#FF0000");
    circle(leftWristX,leftWristY,20);
    InNumberLeftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberLeftWristY);
}
function modelLoaded()
{
    console.log("PoseNet has been initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY);

    }
}