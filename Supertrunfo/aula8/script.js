var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem:"https://pm1.narvii.com/6809/ab20c7c73e900b9dfc40bed8f6e32bf9561f0bbcv2_hq.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem:"https://i.pinimg.com/originals/3d/f2/db/3df2dbe82ab0a446ef57bada79b5b277.png",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem:"https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    var nome = `<p class ="carta-subtitle">${cartaJogador.nome}</p>`

    var opcoesTexto = ""
    
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ' ' + cartaJogador.atributos[atributo] + "<br>" 
    }
    var html = "<div id='opcoes' class = 'carta-status'>"


    divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}

// function exibirOpcoes() {
//     var opcoes = document.getElementById('opcoes')
//     var opcoesTexto = ""
//     for (var atributo in cartaJogador.atributos) {
//         opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
//     }
//     opcoes.innerHTML = opcoesTexto
// }

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()

    var divResultado = document.getElementById('resultado')

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
    } else {
        htmlResultado = '<p class="resultado-final">Empate!</p>'
    }
    
    divResultado.innerHTML = htmlResultado

    exibeCartaMaquina()
}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var nome = `<p class ="carta-subtitle">${cartaMaquina.nome}</p>`

    var opcoesTexto = ""
    
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ' ' + cartaMaquina.atributos[atributo] + "<br>" 
    }
    var html = "<div id='opcoes' class = 'carta-status'>"


    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'
}
