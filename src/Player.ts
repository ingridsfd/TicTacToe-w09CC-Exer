export default class Player {
    private _nickName: string = 'Ingrid'

    constructor(nickName: string) {
        this._nickName = nickName
    }

    get nickName() { //para poder ir cambiando atributos privados y protegidos
        return this._nickName
    }

    set nickName(nickName: string) {
        this._nickName = nickName//poder cambiarle el nombre a nuestro player
    }

    displayMyName(): void {
        console.log(`My name is: ${this.nickName}`)
    }
}
//las clases son como las plantillas que nos dirán que tiene los atributos