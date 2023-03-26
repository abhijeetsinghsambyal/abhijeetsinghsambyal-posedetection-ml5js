// let capture;
// let posenet;

// function setup(){
//     createCanvas(800,500);
//     capture=createCapture(VIDEO);
//     capture.hide();
//     posenet = ml5.poseNet(capture, modelLoaded);
    
//     // console.log('setup function')
// }

// // 2nd program
// // function getRandomArbitracy(min,max){
// //     return Math.random() * (max-min)+min;
// // }
// function modelLoaded(){
//     console.log('Model has loaded');
// }

// function draw(){
//     Image(capture,0,0,800,600);
// //  1
//     // r=getRandomArbitracy(0,255);
//     // g=getRandomArbitracy(0,255);
//     // b=getRandomArbitracy(0,255);
//     // fill(r,g,b);
//     // ellipse(mouseX, mouseY,50,50);


// // 2nd program
//     // console.log('setup function')
// //     background(200);
// //     //making a point
// //     point(200,200);
// //     //make a line
// //     line(200,200,300,300);
// //     //make a triangle
// //     triangle(100,200,300,400,150,450);
// // //making different shapes



// }
let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

    actor_img = loadImage('images/shahrukh.png');
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');

}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    // webcam
    image(capture, 0, 0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        
        
    }

    

}