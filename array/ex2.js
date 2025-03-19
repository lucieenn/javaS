 
let resposta = window.document.getElementById('resposta');
let data = new Date();
let horas = data.getHours();
 
if(horas > 5 && horas < 12)
{
    resposta.innerText = ("Bom dia");
}
else if(horas >=12 && horas < 18)
{
    resposta.innerText = ("Boa tarde");
}
else if(horas >=18 && horas <23)
{
    resposta.innerText = ("Boa noite");
}
else
{
    resposta.innerText = ("Boa madrugada")
}
 