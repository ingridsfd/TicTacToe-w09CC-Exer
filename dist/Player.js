"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(nickName) {
        this._nickName = 'Ingrid';
        this._nickName = nickName;
    }
    get nickName() {
        return this._nickName;
    }
    set nickName(nickName) {
        this._nickName = nickName; //poder cambiarle el nombre a nuestro player
    }
    displayMyName() {
        console.log(`My name is: ${this.nickName}`);
    }
}
exports.default = Player;
