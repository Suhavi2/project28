class Mango{
constructor(x,y){
    var options={
        isStatic:true,
        restitution:0,
        friction:0
    }

     this.r=20;
     this.body=Bodies.circle(x,y,this.r/2,options)
     World.add(world,this.body)

}
display(){
   var pos=this.body.position;
   push ()
   translate(pos.x,pos.y)
   fill("yellow")
   ellipseMode(CENTER);
   ellipse(0,0,this.r,this.r)
   pop()

}










}