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
console.log("----------------------------------------")//continue pula uma interação
var j =0
let npar = 0
while(j <100){
    j++
    if(j%2==0){
        continue
    }
    if (j ==41){

        break
    }
    console.log(j)
}


function parametros (...valores){

    let res = valores.length
    let soma =0  

    for(let p=0; p <valores.length;p++){

        soma +=valores[p];

    }
    return soma

}
console.log("==========================")

console.log(parametros(1,2,3,4,5,6))

//uso de arow function
const arow=(v1,v2) => {

    return v1+v2

}
var render= arow(1,3)
console.log(render)

//usando uma funcao dentro de outra

const soma=(...valores) =>{
    const somar=(n)=>{
        let res =0

        for(v of n) res+=v

        return res
    }
    return somar(valores)
}
console.log(soma(1,5))


//conversor
const valor=(e)=>parseInt(e)
let n = ["1","2","3"].map(valor)

console.log(n)


//funçoes geradoras precisam de function
 
function* cores(){

    yield "Vermelho"
    yield "Preto"

}
const itc= cores()

console.log(itc.next().value)
console.log(itc.next().value)

//usando o this
function aluno (nome,nota){

    this.nome =nome
    this.nota = nota


    this.dadosAnonimos= function(){
        setTimeout(function(){ //gera um atraso de 1 segundo na função

           
            console.log(nome)
            console.log(nota)

        },1000)
    }

        this.arowFunction =function(){
        setTimeout(()=>{ //gera um atraso de 1 segundo na função

            console.log(nome)
            console.log(nota)

            },1000)

        }
    }

const li = new aluno("Bruno",10)
li.dadosAnonimos()
li.arowFunction()


//funcão do map
const cursos =["TI","Eletronica","Biologo"]
let c=cursos.map((ele, i)=>{

    return "<div>"+ele+"</div>"

})
console.log(c)

let o = document.getElementsByTagName("div")
o =[...o]
o.map((e,i)=>{

    console.log(e)
    //e.innerHTML="cursos" faz alteração
})
