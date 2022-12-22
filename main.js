noseX=0;
noseY=0;
function preload() {
clown_nose = loadImage('https://th.bing.com/th/id/R.755928c777cc7f2e1a330e772422efee?rik=XkK0hsnBPvrXCw&riu=http%3a%2f%2fclipart-library.com%2fdata_images%2f375112.png&ehk=UFpVG8f3K6fSCTiJHo%2bGef2Ej%2b0k0yHKJ0tumsrcRjU%3d&risl=&pid=ImgRaw&r=0&adlt=strict');
}

function setup() 
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded() {
    console.log('PoseNet Is Initialized');
}



function draw() {
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 89, 50);
}

function take_snapshot() {
    save("myFilterImage.png");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-44;
        noseY = results[0].pose.nose.y-40;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}