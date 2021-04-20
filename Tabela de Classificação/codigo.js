var paulo = { 
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos:0
}
var rafa = {
    nome: "Rafa",
    vitorias:3,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)

function calculaPontos(jogador){
    const pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [rafa, paulo]


function exibirJogadoresNaTela(jogadores){
  var html= ""

  for(var i = 0; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button class='green' onClick='adicionarVitoria("+ i +")'>Vitória</button></td> <button class='blue' onClick='adicionarEmpate("+ i +")'>Empate</button> <button class='red' onClick='adicionarDerrota("+ i +")'>Derrota</button></tr> <button class='purple' onClick='removerJogador("+ i +")'>Remover Jogador</button></td></tr>"
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

exibirJogadoresNaTela(jogadores)

function adicionarVitoria(i){

  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  
  exibirJogadoresNaTela(jogadores)
  // console.log("clicou no botão vitória")
}
function adicionarEmpate(i){

  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  
  exibirJogadoresNaTela(jogadores)
  // console.log("clicou no botão empate")
}
function adicionarDerrota(i){
    
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
  
  // console.log("clicou no botão Derrtota")
}


function adcionarNovoJogador() {
  var nome = "";
  var nomeJogador = document.querySelector("#novoJogador").value;
  nome = nomeJogador
  if (nome != "") {
    var novoJogador = {
      nome: nome,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    jogadores.push(novoJogador)
    exibirJogadoresNaTela(jogadores)
  } else {
      alert("Sem nome para o jogador!")
  }
}

function removerJogador(i){
  jogadores.splice(i, 1)
  exibirJogadoresNaTela(jogadores)
}
