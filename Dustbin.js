class Dustbin{
    constructor(x,y,width,height){
        var options={
            'isStatic' : true
        }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
 this.image=loadImage("dustbin.png");
  this.image.scale=0.6;
  World.add(world,this.body);
         
    }

    display(){
       // var angle = this.body.angle;
      push();
     //  translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        fill("yellow");
        //rect(0, 0, this.width, this.height);
        image(this.image, this.body.position.x,this.body.position.y);
       pop();
    }

}
