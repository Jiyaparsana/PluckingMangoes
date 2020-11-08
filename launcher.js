
class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.005,
            length: 10
        }
        this.pointB = pointB
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    display(){
        if(this.throw.bodyA){
        var point1= this.throw.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(point1.x, point1.y, pointB.x, pointB.y);
        }
    }
    fly(){
    this.throw.bodyA = null
    }
attach(){
    launcherobj.attach(stoneObj.body)
}
}