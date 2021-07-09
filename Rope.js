class Rope {
    constructor(body1,body2,offsetX,offsetY){
 this.offsetX = offsetX
 this.offsetY = offsetY

 var options = {
    bodyA: body1,
     bodyB : body2,
     pointB:{x:this.offsetX,y:this.offsetY}
 }
 this.Rope = Constraint.create(options)
 World.add(world,this.Rope)
    }
display(){
    var Point1 = this.Rope.bodyA.position;
    var Point2 = this.Rope.bodyB.position;
strokeWeight(2)
var Anchor1X = Point1.x;
var Anchor1Y = Point1.y;

var Anchor2X = Point2.x+this.offsetX;
var Anchor2Y = Point2.y+this.offsetY;

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}
