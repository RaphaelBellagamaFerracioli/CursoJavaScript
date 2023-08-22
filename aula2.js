//exemplo do uso de arrow function 

let n1 = 2;
let n2 = 3;

console.log(!(n1!=n2))


// exemplo de uma arrow function 
const soma = (a, b) =>{

    return a + b;
} 

console.log(soma(2, 3)); // 5

let res = 24

let number = res <<2

console.log(number)


//lembre-se 0 é falso qualquer outro numero é true

//comparção
ParOuImpar = (res%2==0 ? "Par":"impar")

console.log(ParOuImpar)

var n =10
//faz o retorno do tipo da variavel
console.log("O resultado de n:",n,typeof(n))

//utilazndo o sprad( espalha os elementos) dentro de uma variavel

n1 = [1,2,4,5,6,7]
n2 = [...n1];
console.log(n2, number)

var jogador = [ 
    
    {nome:"Lucas", categoria:"grande", idade:19,apelido:"Lulu"},
    {nome:"João", categoria:"grande", idade:19,apelido:"Lulu"},
    {nome:"lucio", categoria:"grande", idade:19,apelido:"Lulu"},
    {nome:"Rafa", categoria:"grande", idade:19,apelido:"Lulu"},

    ]
                
let jogadores = {...jogador}

console.log(jogadores)

const obj = document.getElementsByTagName("div")
const obj2 = [...(obj), document.getElementsByTagName("div")]

console.log(obj2)
console.log(obj, obj2)

//faz a chamada dos itens no console 
obj2.forEach(element =>{

    console.log(element)
    element.innerHTML="Curso"//faz a alteração de todos os elementos

})

//usando o switch

let primeiro = 1;


switch(primeiro){

case 1:
        console.log("Primeira parte")
    break

case 2:
    console.log("Segunda")
    break
}

//uso do for in 
let array =  [1,2,3,4,54]

for(i in array){

    console.log(array[i])

} 