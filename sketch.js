function setup() {
  createCanvas(800,400);
 //creating hour minute and clock
hr = hour()
mn = minute()
sc = second()

}

function draw() {
  background(0);
  //creating the circle of clock
  fill("black ")  
  stroke("lime")
  strokeWeight(10)
  ellipse(400,200,200,200)
  angleMode(DEGREES)
//creating line
scAngle = map(sc,0,60,0,360)


push()
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,400,0)

translate(100,220)
pop()
drawSprites();
}