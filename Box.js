class BOX{
    constructor(x,y){

        var ops = {
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,60,60,ops);
        this.width = 60;
        this.height = 60;
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}