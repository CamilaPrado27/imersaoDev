var numero = parseInt((Math.random()*100)/2)
console.log(numero)


function botao (){
    var buttonPress = document.querySelector('#respostaUsuario')
    var conteudo = buttonPress.value
    var respostaUsuario = parseInt(conteudo)
    var infoUsuario =document.querySelector('#infoUsuario')

    if (numero == respostaUsuario){
        
        infoUsuario.innerHTML = 'Parabéns você acertou!!'
        
    } else if (respostaUsuario < numero){
        infoUsuario.innerHTML = 'O número é maior'

    } else if (respostaUsuario > numero){
        infoUsuario.innerHTML = 'O número é menor'
    }
    buttonPress.value = ""
}

function resposta (){
    var answerButton = document.querySelector('#mostrarResposta')
    answerButton.innerHTML = `O número secreto é ${numero}`
}
