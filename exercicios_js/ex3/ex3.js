function calcular(){
    let a = window.document.getElementById('a')
    let resp = window.document.getElementById('resp')
    let idade= Number(a.value)


    if(idade <= 15){
        resp.innerText = 'Você não pode votar'
    }
    else if( idade >= 18 && idade <= 64){
        resp.innerText='Voto obrigatorio'
    }
    else{
        resp.innerText='Voto facultativo'
    }
}