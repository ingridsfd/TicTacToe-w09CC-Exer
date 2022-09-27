import Input, { SelectChoice } from "./Input";

export default class Main {
    private exit: boolean; //Aquí es donde definimos la opción de salir del programa

    constructor() {
        this.exit = false
    }

    
     async init() { //esto es para llamar incluso antes del StartGame. Primera llamada.
         //tiene que ser asíncrono porque va a recibir un await
         let res: any; //hay que declarar una variable de tipo any para poder filtrar la promesa y recibir el await
         const selectChoices: SelectChoice[] = [
             { option: 1, message: "Start game" },
             { option: 2, message: "Show the last game" },
             { option: 3, message: "Finalizar Juego"}
         ]
         
         while (this.exit == false) { //La lógica de aquí es: decirle al programa cuándo detenerlo del bucle
             console.log('Welcome to tic-tac-toe game')
             res = await Input.getSelect("Menu", selectChoices) //Aquí recibe el await
             this.selectOption(res.data)
         }
     }

     selectOption(index: number) { //También. Siempre habrá una opción que permita moverse entre las opciones principales. Recuerda el menú de un videojuego!<3
         //El index es number porque tenemos el caso 1, para la opción 1, el caso 2, para la opción 2, el caso 3, para numerar/nombrar la opción tres, etc.
         switch (index) {
             case 1:
                 this.startGame()
                 break;
             case 2:
                 this.showHistory()
                 break;
             case 3:
                 this.showExit() 
                 //tenemos que indicar que exit es verdadero porque sabemos que en algún punto querremos salir del juego
                 this.exit = true
                 break;
             default: //Este valor default nos permitirá saber 
                 console.error('Wrong option, my dude. The code is not doing what you want hmmm...')
         }
     }
     
     startGame() { //Aquí inicia el juego
        console.log(`Here starts the game!`)
     }
     
     showHistory() { //muestra el historial del juego
        
     }
    
     showExit() { //termina el programa
        console.log(`Thank you for playing TicTacToe!`)
    }
}