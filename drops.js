class Drops{
    constructor(x ,y){
        var options = {
            'restitution': 0.25,
            'friction': 1.0,
            'density': 1.0
        }

        this.body=Bodies.circle(x, y, 2, options);
        World.add(world, this.body);

    }

    update(){
        if(drops.y>= 550){
            drop.y=10;
        }
    }

    display(){
        push();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 2, 2);
        pop();
    }
}