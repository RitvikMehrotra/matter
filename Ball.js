class dust{
    constructor(x,y,radius,opts,popo){
        var Options={
            isStatic=false,
            restitution=0.8,
            friction=0.5,
            density=1.2,
        }
        
        this.body = Matter.Bodies.circle(200,500,40,Options,0);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
  
  }
};