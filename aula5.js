const doc =document.querySelector("#caixa1")
const doc2 =document.querySelector("#caixa2")

const botton =document.querySelector("#btn_copiar")

const todosCursos =[...document.querySelectorAll(".curso")]


todosCursos.map((ele)=>{

    ele.addEventListener("click", (evt) =>{

    const curso =evt.target;
    curso.classList.toggle("destaque")
    console.log(curso)

    })
})


botton.addEventListener("click", ()=>{

    const cursosselecionados=[...document.querySelectorAll(".destaque")]
    const cursosNaoselecionados=[...document.querySelectorAll(".curso:not(.destaque)")]
    console.log(cursosselecionados)

    cursosselecionados.map((el) =>{

        doc2.appendChild(el)
        
    })

    //poassa diretamente todos os parametros
    cursosNaoselecionados.map((el) =>{

        doc.appendChild(el)

    })


})

doc.addEventListener("click",(event)=>{

    console.log(event.target)//target seria para onde ele aponta

})


botton.addEventListener("click",(event)=>{
    event.stopPropagation()//deixa o botão unitilizavel
    console.log("Clicou")

})

//elementos do doom

console.log(doc.children[doc.children.length])//retonra um elemnto especifico da coleção

console.log(doc.lastElementChild)

console.log(doc.firstElementChild)
console.log(doc.children)//todos os elemntos filhos

console.log(todosCursos[3].hasChildNodes());
console.log(botton[0].hasChildNodes())
console.log(botton.childNodes)

