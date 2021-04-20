function adicionarFilme (){
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if (filmeFavorito.endsWith('.jpg')){
        listaFilmesNaTela(filmeFavorito)
    } else if(filmeFavorito.endsWith('.jpeg')) {
        listaFilmesNaTela(filmeFavorito)
    }else if (filmeFavorito.endsWith('.png')){
        listaFilmesNaTela(filmeFavorito)
    }
     else{
        alert("Imagem inválida ")
    }
    campoFilmeFavorito.value = ""
}

function listaFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img  class='filmes' src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}