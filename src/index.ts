import Board from "./Board";
import Main from "./Main";
import Player from "./Player";

/*
let program: Main = new Main() //1. tenemos que asignar una variable al momento de crear el archivo índice que tendrá las funciones principales
program.selectOption(2); //2. hay que llamar también a la función que está en otro archivo
program.init(); //Esto despliega el Menú */

//let player: Player = new Player('Ingrid')
//player.displayMyName()

let board: Board = new Board() 

board.printBoard()