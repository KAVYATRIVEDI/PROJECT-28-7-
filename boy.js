class Boy {
    constructor(x, y, width, height){

    var options = {
    
        isStatic:true
    }
    this.body=Bodies.rectangle(x-125, y-575, width, height,options);
    this.width=width;
    this.height=height;
    this.image = loadImage("boy.png");
    World.add(world, this.body);
    }
     display(){
     push();
     imageMode(CENTER);
     image(this.image,150,600,this.width,this.height);
     pop();
     }
}