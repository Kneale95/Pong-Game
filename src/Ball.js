
export default class Ball {
   constructor(boardHeight,x,color) {
    this.height = 10
    this.width = 5
    this.x = x
    this.y = (boardHeight / 2) - (this.height / 2);
    this.vy = Math.floor(Math.random() * 12 - 6); // y direction
    this.vx = (7 - Math.abs(this.vy)); // x direction
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

paddleCollision(player1, player2) {
   if (this.vx > 0) {
      const inRightEnd = player2.x <= this.x + this.width &&
      player2.x > this.x - this.vx + this.width;
      if (inRightEnd) {
         const collisionDiff = this.x + this.width - player2.x;
         const k = collisionDiff / this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitRightPaddle = y >= player2.y && y + this.height <=
         player2.y + player2.height;
         if (hitRightPaddle) {
            this.x = player2.x - this.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
            }
        }
    } 
else {
      const inLeftEnd = player1.x + player1.width >= this.x;
      if (inLeftEnd) {
         const collisionDiff = player1.x + player1.width - this.x;
         const k = collisionDiff / -this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitLeftPaddle = y >= player1.y && y + this.height <=
         player1.y + player1.height;
         if (hitLeftPaddle) {
            this.x = player1.x + player1.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
        }
      }
   }
}
  render(context, player1, player2) {
    context.fillStyle = this.color;
    this.draw(context);
    this.bounce(context);
    this.x += this.vx;
    this.y += this.vy;
    this.paddleCollision(player1, player2);
    
  }
}