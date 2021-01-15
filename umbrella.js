class Umbrella{
    constructor(x, y){
        var options = {
            'isStatic':true
        }
        this.width=51;
        this.height=30;
        this.animation=loadAnimation("images/walkingFrame/walking_1.png", "images/walkingFrame/walking_2.png", "images/walkingFrame/walking_3.png", "images/walkingFrame/walking_4.png", "images/walkingFrame/walking_5.png", "images/walkingFrame/walking_6.png");
        this.scale=0.5;
        this.body=Bodies.circle(x, y, 2,options);
        this.x=x;
        this.y=y;
        World.add(world, this.body);




    }



    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //rectMode(CENTER);
        imageMode(CENTER);
        animation(this.animation, this.body.position.x, 200, this.width, this.height);
        pop();
    }
}