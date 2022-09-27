"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = __importDefault(require("./Input"));
class Main {
    constructor() {
        this.exit = false;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            //tiene que ser asíncrono porque va a recibir un await
            let res; //hay que declarar una variable de tipo any para poder filtrar la promesa y recibir el await
            const selectChoices = [
                { option: 1, message: "Start game" },
                { option: 2, message: "Show the last game" },
                { option: 3, message: "Finalizar Juego" }
            ];
            while (this.exit == false) { //La lógica de aquí es: que queremos 
                console.log('Welcome to tic-tac-toe game');
                res = yield Input_1.default.getSelect("Menu", selectChoices); //Aquí recibe el await
                this.selectOption(res.data);
            }
        });
    }
    selectOption(index) {
        //El index es number porque tenemos el caso 1, para la opción 1, el caso 2, para la opción 2, el caso 3, para numerar/nombrar la opción tres, etc.
        switch (index) {
            case 1:
                this.startGame();
                break;
            case 2:
                this.showHistory();
                break;
            case 3:
                this.showExit();
                //tenemos que indicar que exit es verdadero porque sabemos que en algún punto querremos salir del juego
                this.exit = true;
                break;
            default: //Este valor default nos permitirá saber 
                console.error('Wrong option, my dude. The code is not doing what you want hmmm...');
        }
    }
    startGame() {
        console.log(`Here starts the game!`);
    }
    showHistory() {
    }
    showExit() {
        console.log(`Thank you for playing TicTacToe!`);
    }
}
exports.default = Main;
