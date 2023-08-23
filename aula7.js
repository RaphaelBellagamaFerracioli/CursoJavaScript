const filtroMaior18=(valor)=>{
    if(valor>=18){
        console.log(valor)
        return valor
    }   
}



const idade = [15,21,30,17,44,10]

const maior=idade.filter((valor,indic,arr)=>{

    if(valor>=18){
        
        return valor
    }
})

const menor=idade.filter((valor,indic,arr)=>{

    if(valor<=18){
        
        return valor
    }
})
console.log((maior))
console.log((menor))

console.log(idade)

