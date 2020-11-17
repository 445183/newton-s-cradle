class Roof{
    constructor(x,y){
       this.body=Bodies.rectangle(x,y,50,20,{isStatic:true});
       World.add(world,this.body);
    }
    display(){
        var x=this.body.position.x;
        var y=this.body.position.y;
        rectMode(CENTER);
        stroke("red");
        fill("red");
        rect(x,y,50,20);
    }
}