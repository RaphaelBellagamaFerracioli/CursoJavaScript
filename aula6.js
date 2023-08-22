const caixa1 = document.querySelector("#caixa1")
const btn =[...document.querySelectorAll(".curso")]

const c1_2= document.querySelector("#c1_2")


const cursos =["HTMl", "CSS", "JAVASRIPT", "PHP","MYSQL","REACTNATIVE"]



cursos.map((el,chave)=>{
    const novoelemnto=document.createElement("div")
    novoelemnto.setAttribute("id","c"+chave)
    novoelemnto.setAttribute("class","curso d1")
    novoelemnto.innerHTML=(el)
    caixa1.appendChild(novoelemnto)

    const btn_lixeira =document.createElement("img")
    btn_lixeira.setAttribute("src","./img/R (1).jpeg")
    btn_lixeira.setAttribute("class","btn_l")
    novoelemnto.appendChild(btn_lixeira)
   

    btn_lixeira.addEventListener("click",(evt)=>{

        console.log(evt.target.parentNode)
        caixa1.removeChild(evt.target.parentNode)//da a funcionalidade ao elemento dentro da div

    })

    console.log(chave)
    //novoelemnto.innerHTML="ReactNative"
})

caixa1.appendChild(novoelemnto)