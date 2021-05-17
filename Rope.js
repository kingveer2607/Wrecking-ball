class Rope{
    constructor(bodyA, pointB){
    var options = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness : 1.2,
        length : 250
    }
    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.pointB;
        push()
        strokeWeight(5);
        stroke("Black");
        line(posB.x,posB.y,posA.x,posA.y);
        pop();
    }
}