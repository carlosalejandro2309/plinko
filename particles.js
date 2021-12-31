class Particles{
    constructor(x,width,height){
        var options={
            restitution:0.4,
            friction:0

        }
        this.particle=Bodies.circle(x,0,width,height);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.particle);
        this.width=width;
        this.height=height;
       
    }
    display(){
       push();
       translate(this.particle.position.x,this.particle.position.y);
    fill(this.color);
    circle( this.particle.position.x,this.particle.position.y,this.width,this.height);
    pop();
    }
}