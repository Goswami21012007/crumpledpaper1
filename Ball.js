class  Ball  {
    constructor(x,y,radius){
var options={
isStatic:false,
restitution:0.8,
friction:0.3,
density:1.0,
}
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
this.image=loadImage("paper1.png")
World.add(world,this.body)
    }
display(){
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
}
}