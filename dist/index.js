"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("./Player"));
/*
let program: Main = new Main() //1. tenemos que asignar una variable al momento de crear el archivo índice que tendrá las funciones principales
program.selectOption(2); //2. hay que llamar también a la función que está en otro archivo
program.init(); //Esto despliega el Menú */
let player = new Player_1.default('Ingrid');
player.displayMyName();
