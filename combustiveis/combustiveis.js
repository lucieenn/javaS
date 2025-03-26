function calcular() {
    const preco = parseFloat(document.getElementById('preco').value);
    const combustivel = document.querySelector('input[name="combustivel"]:checked').value;
    const porcentagem = parseFloat(document.getElementById('porcentagem').value) /100;

    let resp;   

    if (combustivel === 'gasolina') {
        const alcoolpreco = preco * porcentagem 
        resp = `É vantajoso abastecer com álcool se o preço for até R$ ${alcoolpreco.toFixed(2)}`;
    } else {
        const gasolinapreco =preco * porcentagem / 100;
        resp = `É vantajoso abastecer com gasolina se o preço for até R$ ${gasolinapreco.toFixed(2)}`;
    }

    document.getElementById('resp').innerText = resp;
}