class Rope{
 
  constructor(bodyA,pointB){
    var options={
      bodyA:bodyA,
      pointB:pointB,
      stiffness:1.2,
      length:250
    }
     this.pointB=pointB;
      this.rope=Constraint.create(options);
      World.add(world,this.rope);
  }
 display(){
   var pointA=this.rope.bodyA.position;
   var pointB= this.pointB;
   strokeWeight(5);
   stroke("yellow");
   line(pointB.x,pointB.y,pointA.x,pointA.y);
 }


}