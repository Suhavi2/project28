class Tree{
constructor(x,y){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,70,90,options)
this.width=70;
this.height=90;
this.image=loadImage("tree.png")
World.add(world,this.body)


}
display(){
var pos=this.body.position;
push()
translate(pos.x,pos.y);
fill("green");
imageMode(CENTER);
image(0,0,this.width,this.height);
pop()
}
}




