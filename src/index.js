import './game.css';
import Game from './Game';


// game instance
var game = new Game();
const fps = 30;
// self invoking function
(function gameLoop() {
	game.render()
   setTimeout(gameLoop, fps);
}());
