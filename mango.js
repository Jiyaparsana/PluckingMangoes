class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x
        this.y=y
        this.radius= radius
        this.image = loadImage("Plucking mangoes/mango.png");
        this.body= Bodies.circle(x,y,radius,options)
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position
        imageMode(CENTER);
   image(this.image, pos.x, pos.y, this.radius);
    }
}