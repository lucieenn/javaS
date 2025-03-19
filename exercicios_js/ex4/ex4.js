function calcular() {
    let selecao = window.document.getElementById('Dia')
    let dia = Number(selecao.value)
    let resp = window.document.getElementById('resp')

    console.log(selecao.value);

    switch (dia){
        case 0:
            resp.innerHTML = 'Hoje é domingo'
            break
        case 1:
            resp.innerHTML = 'Hoje é segunda'
            break
        case 2:
            resp.innerHTML = 'Hoje é segunda'
            break
        case 3:
            resp.innerHTML = 'Hoje é segunda'
            break
        case 4:
            resp.innerHTML = 'Hoje é segunda'
            break
        case 5:
            resp.innerHTML = 'Hoje é segunda'
            break
        case 6:
            resp.innerHTML = 'Hoje é segunda'
            break
        case 7:
            resp.innerHTML = 'Hoje é segunda'
            break


    }

}