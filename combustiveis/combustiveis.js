let gasolina= window.document.getElementById('gasolinaP')
let etanol = window.document.getElementById('etanolP')
let porcentagem = window.document.getElementById('porcentagem')
let resposta= window.document.getElementById('resposta')

function calcular(){
  
   switch (porcentagem){
      case 0:
          
          break
      case 1:
          porcentagem=0.65
          break
      case 2:
         porcentagem=0.66
          break
      case 3:
          porcentagem=0.67
          break
      case 4:
         porcentagem=0.68
          break
      case 5:
         porcentagem=0.69
          break
      case 6:
         porcentagem=0.70
          break
      case 7:
         porcentagem=0.71
          break
          case 7:
         porcentagem=0.72
          break
          case 7:
         porcentagem=0.73
          break
          case 7:
         porcentagem=0.74
          break
          case 7:
         porcentagem=0.75
          break
  }
  const diferenca= ((gasolina *100)/etanolp)*100
   
   if(diferenca<=30 && porcentagem>=0,65 && porcentagem<=0,70)
   {
    resposta.innerHTML='Abasteça com gasolina'
   }
   else{ 
    
    resposta.innerHTML='abasteça com alcool'
   }
}
//se o preço da gasolina for 30% a mais que o acool, compensa para o usuario usar o alcool.