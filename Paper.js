class Paper {
    constructor(x,y)
    {
        var options={
        restitution:0.2,
        friction:0.5,
        density:1.0,
        }

        this.body = Bodies.circle(x,y,20,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);

    }
    display(){
        fill ("yellow");
        imageMode(CENTER);
        //ellipse(this.body.position.x,this.body.position.y,20,20);
        image(this.image, this.body.position.x,this.body.position.y,60,60);
    }

}
