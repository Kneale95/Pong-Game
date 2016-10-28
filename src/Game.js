import Paddle from './Paddle';
import Ball from './Ball';
import { player1Keys, player2Keys } from './keys';

export default class Game {
	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';
        
        this.p1 = new Paddle(this.height, 5, 'lime', player1Keys);
		this.p2 = new Paddle(this.height, this.width - 10, 'red', player2Keys);
        this.ball = new Ball(this.height, this.width - 150,'blue');
	}

	drawLine() {
	this.context.fillStyle = "white"
      this.context.setLineDash([10, 10]);
      this.context.beginPath();
      this.context.moveTo(this.width / 2, 0);
      this.context.lineTo(this.width / 2, this.height);
      this.context.strokeStyle = "white";
      this.context.stroke();
	}
    
	drawBoard() {
		this.context.fillStyle = 'black'
		this.context.fillRect(0, 0, this.width, this.height)
	}
    
	render() {
		this.drawBoard();
		this.drawLine();
        this.p1.render(this.context);
        this.p2.render(this.context);
        this.ball.render(this.context, this.p1, this.p2)

	}
}