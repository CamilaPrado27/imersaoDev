var receberResposta = ""
var resposta = ""

function respostaCerta (){
    resposta = document.getElementById('respostaUsuario').value;
    receberResposta = resposta;
}

function mostrar(){
    respostaCerta();
    if(resposta == 'kakashi hatake'){
        let certo = document.getElementById('h2');
        certo.innerHTML = 'Correto! Parabéns!';
    } else{
        let certo = document.getElementById('h2');
        certo.innerHTML = 'Errado! Tente de novo';
    }
}

// alert('Conhece esse personagem ?')
// const personagem = prompt('Digite:\n1 - Sasuske Uchiha\n2 - Itachi Uchiha\n3 - Gaara\n4 - Naruto Usumaki\n5 - Kakashi Hatake\n6 - Hinata Hyuga')

// if(personagem == 1){
//   const respota1 = document.write('<h2> Errado! Tente de novo! </h2>')
// } else if(personagem == 2){
//  const resposta2 = document.write('<h2> Errado! Tente de novo! </h2>')
// } else if(personagem == 3){
//  const resposta3 = document.write('<h2> Errado! Tente de novo! </h2>')
// } else if(personagem == 4){
//  const resposta4 = document.write('<h2> Errado! Tente de novo! </h2>')
// } else if(personagem == 5){
//  const resposta5 = document.write('<h2> Kakashi Hatake</h2>')
//  alert('Parabéns! Você acertou!')
// } else if(personagem == 6){
//  const resposta6 = document.write('<h2> Errado! Tente de novo! </h2>')
// }else{
//   alert('Digite um valor de 1 a 6')
// }

