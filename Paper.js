class Ball {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:3,
          density:1.2
      }
      this.body = Bodies.circle(x, y, 20, options);   
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      
      ellipseMode(CENTER);
      stroke ("red");
      fill("purple");
      ellipse(pos.x,pos.y,38,38);
    }
  }
