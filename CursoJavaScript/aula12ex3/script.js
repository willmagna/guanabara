function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoInfo = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(anoInfo.value.length == 0 || Number(anoInfo.value) > ano){
        window.alert('[EROO] Verifique os dados e tente novamente!')
    }else{
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoInfo.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'homem_bebe.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'homem_jovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem_adulto.png')
            }else{  
                //Idoso
                img.setAttribute('src', 'homem_idoso.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'mulher_bebe.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher_adolecente.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher_adulta.png')
            }else{  
                //Idoso
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
        res.appendChild(img)

    }
}