class SUPERMAN{
    constructor(x,y,w,h){
        var ops = {
            isstatic : false
        }
        this.body = Bodies.rectangle(x,y,w,h,ops);
        this.width = w;
        this.height = h;
        this.image = loadImage("Superhero-01.png");
        World.add(world,this.body);
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}