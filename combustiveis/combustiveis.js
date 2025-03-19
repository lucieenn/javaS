let preco=  window.document.getElementById('preco')
let gasolina= window.document.getElementById('gasolina')
let etanol = window.document.getElementById('etanol')
let porcentagem = window.document.getElementById('porcentagem')
let resposta= window.document.getElementById('resposta')

function calcular(){
   if(gasolina==1)
   {
    let conta=porcentagem;
   }
   else{ 
    let conta=1/porcentagem;
   }
}