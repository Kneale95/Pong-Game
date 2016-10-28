export default class Ball {
    constructor(boardHeight, x){
        this.x = 150
        this.y = (boardHeight / 2) - (this.height / 2);
        this.vx = 1
        this.vy = 1
    }
}
