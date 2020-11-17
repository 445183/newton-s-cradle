class Chain{
    constructor(bodyX,bodyY){
      var options={
          bodyA:bodyX,
          bodyB:bodyY,
          length:1,
          stifness:0.4,
      }
      this.chain=Constraint.create(options);
    }
    display(){
       var point1=this.chain.bodyA.position;
       var point2=this.chain.bodyB.position;

       strokeWeight(3.5); 
       stroke("yellow");
       line(point1.x,point1.y,point2.x,point2.y);
    }
}