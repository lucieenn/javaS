function calcular(){
    let  nac = window.document.getElementById('nac')
    let resp = window.document.getElementById('resp')
    let nacionalidade = nac.value;


    if(nacionalidade == 'brasil'){
        resp.innerText='Brasileiro'
    }
    else{
        resp.innerHTML='Estrangeiro'
    }
}