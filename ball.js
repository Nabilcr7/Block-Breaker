class ball{
    constructor(x,y,width,height){
var options ={
    
    density:1,
}
   this.body=Bodies.rectangle(x,y,width,height,options)

   this.width=width
   this.height=height

   World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("yellow")
    
       ellipse(0,0,this.width,this.height)
        pop()
    }
}