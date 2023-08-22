"use strict" //usado para restringir variaveis não declaradas

//let possui o escopo da funçao e var escopo global da classe

console.log("ola mundo")

function teste(){
    if(true){
        let nome = "Bruno"
        console.log(nome)
    }
    //console.log(nome) erro pois a variavel se encotra fora da função

}

let number = 3
let number2 = 4

console.log(!(number,number2))

teste()
console.log()

console.log(number===number2)

// let nome = prompt("Digite seu nome aqui")

// alert(nome)

let n1 = 2;
let n2 = 3;

console.log(!(n1 > n2))