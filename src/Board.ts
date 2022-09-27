export default class Board {
    private _board: number[][]; //esto es la matrix
    private squareX: string = 'X' //esto es la X
    private squareO: string = 'O' //esto la O

    constructor() { //esto se refiere a filas y columnas x: number, y: number
        this._board = this.createBoard()
    }
    // arrayMulti[0][0] = -1 esto quiere decir que está vacío para empezar a colocarle

    get board() {
        return this._board
    }

    private createBoard(): number[][] {
        let board: number[][] = new Array(3)
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(3)
        }
        //this.initBoard(board)
        return board;
    }

}

private initBoard(board: number[][]) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = -1
        }
    }
}

private selectSquare(code: number, count: number): string {
    switch (code) {
        case -1: 
            return '${count}'
        case 0:
            return this.square0
        case 1: 
            return this.squareX
    }
    return 'error' 
}

printBoard() {
    let board: number[][] = this.board
    let linea: string = ''
    let separador: string = '*'
    let count: number = 0

    for (let i = 0; i < board.length; i++) {
        count++;
        for (let j = 0; j < board[i].length; j++) {
            if (j === 1) {
                linea += `| ${this.selectSquare(board[i][j], count)} |`
            } else {
                linea += ` ${this.selectSquare(board[i][j], count)} `
            }
        }

        console.log(linea)
        if (i < 2) console.log(separador.repeat(14));
        linea = ''
    }
}
