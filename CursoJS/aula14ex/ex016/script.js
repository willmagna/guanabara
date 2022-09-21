function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando Passo1')
            p = 1
        }

        if(i<f){
            //contagem crescente
            for( var c = i; c <= f ; c += p){
                res.innerHTML += `${c} \u{1F449}`   
            }
        }else{
            //contagem regressiva
            for( var c = i; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1F449}`   
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }

} 