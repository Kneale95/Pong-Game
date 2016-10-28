
export default class Ball {
   constructor(boardHeight,x,color) {
    this.height = 10
    this.width = 5
    this.x = x
    this.y = (boardHeight / 2) - (this.height / 2);
    this.vy = Math.floor(Math.random() * 12 - 6); // y direction
    this.vx = (6 - Math.abs(this.vy)); // x direction
    this.radius = 5
    this.color = color
    this.boardHeight = boardHeight;

   }
bounce(context) {
    if (this.y <= 0 + this.radius || this.y >= 150 - this.radius  ) {
        this.vy *= -1
    }
    if (this.x <= 0 + this.radius || this.x >= 300 - this.radius) {
        this.vx *= -1
    }
}

   draw(context){
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    }

paddleCollision(p1, p2){
      if (this.vx > 0) {
          const inRightEnd = this.x + this.radius >= p2.x;
          if (inRightEnd) {
              if (this.y >= p2.y && this.y <= (p2.y + p2.height)){
                  this.vx *= -1;
              }
          }
      } else {
          const inLeftEnd = this.x - this.radius <= p1.x + p1.width
          
          if (inLeftEnd) {
              if (this.y >= p1.y && this.y <= (p1.y + p1.height)) {
                  this.vx *= -1;
              }
          } 
      } 
 }
  render(context, p1, p2) {
    context.fillStyle = this.color;
    this.draw(context);
    this.bounce(context);
    this.x += this.vx;
    this.y += this.vy;
    this.paddleCollision(p1, p2);
    
  }
}