function preload()
{}

function setup()
{
canvas = createCanvas(600, 600);
canvas.center();
video = createCapture(VIDEO);
video.size(200, 200)
video.hide();

}

function draw()
{
    image(video, 200, 200, 200, 200);
    fill(255,0,0);
    rect(10, 150, 50, 300, 20);
    rect(540, 150, 50, 300, 20);

    fill(255,100,100)
    circle(90,120,75)
    fill(200,255,100)
    circle(150,120,75)
    fill(200,0,200)
    circle(210,120,75)
    fill(0,255,255)
    circle(270,120,75)
    fill(255,255,0)
    circle(330,120,75)
    fill(255,0,255)
    circle(390,120,75)
    fill(0,0,255)
    circle(450,120,75)
    fill(0,255,0)
    circle(510,120,75)


    fill(0,255,0)
    circle(90,480,75)

    fill(0,0,255)
    circle(150,480,75)

    fill(255,0,255)
    circle(210,480,75)

    fill(255,255,0)
    circle(270,480,75)


    fill(0,255,255)    
    circle(330,480,75)


    fill(200,0,200)
    circle(390,480,75)


    fill(200,255,100)
    circle(450,480,75)


    fill(255,100,100)
    circle(510,480,75)

    fill(0, 200, 0)
    ellipse(300, 570, 500, 50);
    ellipse(300, 30, 500, 50);
}