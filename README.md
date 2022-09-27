# TicTacToeWeek09CoreCodeExer

The exercise from Week 09 of CoreCode's Software Development Fundamentals. Finishing working with Typescript.

This is the general concept for Bidimensional Arrays in Typescript that I learned along with my colleague Edy:
```Typescript
let arrayMulti: number[][] = new Array(3)

for(let i = 0; i < arrayMulti.length; i++) {
    arrayMulti[i] = new Array(3)
}

//console.log(arrayMulti[i])

for(let i = 0; i < arrayMulti.length; i++) {
    for(let j = 0; j < arrayMulti[i].length; j++) {
        arrayMulti[i][j] = -1
    }
}
//console.log(arrayMulti)

function print(array: number[][]): void {
    let linea: string = ''
    let separador: string = '*'

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (j === 1) {
                linea += `| ${array[i][j]} |`
            } else {
                linea += ` ${array[i][j]} `
            }
        }
        //console.log(linea)
        if (i < 2) console.log(separador.repeat(14));
        linea = ''
    }
}

print(arrayMulti)
```
