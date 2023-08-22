//utilizando o gtelementbyid

const doc = document.getElementById("c1")
const doc1 = document.getElementById("c2")
const doc2 = document.getElementById("c3")
const doc3 = document.getElementById("c4")
const doc4 = document.getElementById("c5")
const doc5 = document.getElementById("c6")

const arrayelementos = [doc,doc1,doc2,doc3,doc4,doc5]

for(i of arrayelementos) i.innerHTML ="array"

console.log(doc)
console.log(doc.innerHTML)
console.log(doc.id)


arrayelementos.map((e)=>{

    e.innerHTML="Novo"
    console.log(e)


})

let doctag =[...document.getElementsByTagName("div")]

doctag=[...doctag]//transforma o elemnto em um array
console.log(doctag)

//uso do class name

const todosCursos =[...document.getElementsByClassName("curso")]

const cursos1 =[...document.getElementsByClassName("d1")]
const cursos2 =[...document.getElementsByClassName("d2")]

console.log(todosCursos)
console.log(cursos1)
console.log(cursos2)

cursos2.map((el,indice) =>{

        el.classList.add("destaque")

})

// let u = document.getElementById("#9")
 const msg=() =>{
     alert("Mensagem alerta");
}
// //mostrando o uso do addEventListener

// u.addEventListener("click", msg())

const elements = document.querySelectorAll('#outt');
elements.forEach(element => {
  element.addEventListener('click', (evt) => {
    // your code here
             msg()

        const el=evt.target
        el.classList.add("destaque")//adiciona a classe destaque ao componente
    

  });
});