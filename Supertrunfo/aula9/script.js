var cartaPaulo = {
    nome: "Seiya de Pegaso - TRUNFO",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    atributos: {
        ataque: 1000,
        defesa: 1000,
        magia: 1000
    }
}

var cartaRafa = {
    nome: "Bulbasauro - TRUNFO",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 1000,
        defesa:1000,
        magia: 1000
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader - TRUNFO",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 1000,
        defesa: 1000,
        magia: 1000
    }
}

var cartaJett = {
    nome: "Jett",
    imagem: "https://images.hdqwalls.com/download/valorant-jett-4k-rz-750x1334.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 20
    }
}

var cartaRaze = {
    nome: "Raze",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/6b/2020/07/01/raze-valorant-1593620920574_v2_1920x1080.jpg",
    atributos: {
        ataque: 100,
        defesa: 60,
        magia: 20
    }
}

var cartaBreach = {
    nome: "Breach",
    imagem: "https://i.imgur.com/ObTogY4.jpg",
    atributos: {
        ataque: 70,
        defesa: 60,
        magia: 35
    }
}

var cartaOmen = {
    nome: "Omen",
    imagem: "https://steamuserimages-a.akamaihd.net/ugc/1004809754727921526/F058C665987655F3EFD44F03C08272A7AB7AC884/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    atributos: {
        ataque: 65,
        defesa: 90,
        magia: 40
    }
}

var cartaBrimstone = {
    nome: "Brimstone",
    imagem: "https://steamuserimages-a.akamaihd.net/ugc/1010440411339444255/60360452E41E5F17A84CDE0A9AB37F07FAA68B80/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}
var cartaPhoenix = {
    nome: "Phoenix",
    imagem: "https://observatoriodegames.uol.com.br/wp-content/uploads/2020/08/phoenix.jpg",
    atributos: {
        ataque: 70,
        defesa: 10,
        magia: 85
    }
}
var cartaSage = {
    nome: "Sage",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZSjH1gERPn7G5Syy0PYlbHFwZwFT1WPyUA&usqp=CAU",
    atributos: {
        ataque: 30,
        defesa: 100,
        magia: 80
    }
}
var cartaSova = {
    nome: "Sova",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2020/07/valorant-sova-arrows-lineups.jpg",
    atributos: {
        ataque: 80,
        defesa: 90,
        magia: 60
    }
}
var cartaViper = {
    nome: "Viper",
    imagem: "https://storage.googleapis.com/stateless-married-games/2020/05/f0fae80b-valorant-viper-4k-04-1920x1080-1.jpg",
    atributos: {
        ataque: 60,
        defesa: 105,
        magia: 20
    }
}
var cartaCypher = {
    nome: "Cypher",
    imagem: "https://cdna.artstation.com/p/assets/images/images/027/950/170/large/ei-ji-chyper.jpg?1593040540",
    atributos: {
        ataque: 50,
        defesa: 95,
        magia: 50
    }
}
var cartaReyna = {
    nome: "Reyna",
    imagem: "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_843,h_472/https://comofazer.site/wp-content/uploads/2020/06/Valorant-Como-jogar-de-Reyna-1024x573.png",
    atributos: {
        ataque: 90,
        defesa: 25,
        magia: 95
    }
}
var cartaKilljoy = {
    nome: "Killjoy",
    imagem: "https://yougogirls.com.br/wp-content/uploads/2020/07/Valorant-Killjoy.jpg",
    atributos: {
        ataque: 65,
        defesa: 95,
        magia: 30
    }
}
var cartaSkye = {
    nome: "Skye",
    imagem: "https://i.ytimg.com/vi/ODvI4u2Bcm4/maxresdefault.jpg",
    atributos: {
        ataque: 65,
        defesa: 95,
        magia: 88
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui, cartaJett, cartaRaze, cartaBreach, cartaBrimstone, cartaOmen, 
    cartaPhoenix, cartaSage, cartaSova, cartaViper, cartaCypher, cartaReyna, cartaKilljoy, cartaSkye]
//            0           1           2          3         4            5            6           7     

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = `Quantidade de cartas no jogo: ${cartas.length}`

    divQuantidadeCartas.innerHTML = html
}


function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    // var html = `Jogador ${pontosJogador} / Maquina ${pontosMaquina}`

    divPlacar.innerHTML = `Jogador ${pontosJogador} / Maquina ${pontosMaquina}`
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0){
            alert('Fim de jogo!')
            if(pontosJogador > pontosMaquina){
                htmlResultado = '<p class="resultado-final">Venceu!</p>'
            }else if (pontosMaquina > pontosJogador){
                htmlResultado ='<p class="resultado-final">Perdeu!</p>'
            } else{
                htmlResultado ='<p class="resultado-final">Empate!</p>'
            }
    } else{
           document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
 

    

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta">`

    document.getElementById('btnSortear').disabled =false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('proximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""

    // console.log('proxima Rodada')
}