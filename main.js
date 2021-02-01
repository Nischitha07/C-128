leftWristX = 0;
rightWristY = 0;
leftWristY = 0;
rightWristX = 0;
harry_potter = " ";
function preload()
{
    harry_potter = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(700, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    image(video , 0 , 0 , 700 , 600);
}

function modelLoaded()
{
    console.log("modelLoaded");

}
function play_sound()
{
    harry_potter.play();
    harry_potter.setVolume(0.5);
    harry_potter.rate(1.0);
}
function stop_sound()
{
    harry_potter.stop();
}
function gotPoses(results)
{
    if(results.length > 0)
    {
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX  " + leftWristX + "leftWristY  " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX  " + rightWristX + "rightWristY  " + rightWristY);
    }
}