function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 

    if(hora >= 0 && hora < 12){
        //BOMDIA
        img.src = 'manha.png'
        document.body.style.background = '#fea843'
    }else if (hora >= 12 && hora <= 18){
        //BOATARDE
        img.src = 'tarde.png'
        document.body.style.background = '#edbe9c'
    }else{
        //BOA noite
        img.src = 'noite.png'
        document.body.style.background = '#4f4f4d'
    }
}