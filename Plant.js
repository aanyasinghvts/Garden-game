class Plant{
  constructor(x,y,width,height){
      var options= {
          density: 1.0,
          friction: 1.0,
          restitution: 0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image= loadImage("sprites/dried_plant.jpg");
      World.add(world, this.body);
   }

   display(){
       var pos =this.body.position;
       push();
       translate(pos.x, pos.y);
       rectMode(CENTER);
       fill("brown");
       rect(0, 0, this.width, this.height);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
       pop();
  }
}