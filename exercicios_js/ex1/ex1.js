function calcular(){
    let  vel = window.document.getElementById('vel')
    let resp = window.document.getElementById('resp')
    let velocidade= Number(vel.value)


    if(velocidade<= 40){
        resp.innerText='Você está dentro da velocidade permitida'
    }
    else if(velocidade>40 && velocidade<100){
        resp.innerHTML='Você está  <strong> acima</strong> da velocidade permitida'
    }
    else{
        resp.innerHTML='Você está <strong>muito acima</strong> da velocidade permitida '
    }
}