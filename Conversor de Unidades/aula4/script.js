var listaFilmes = [
 "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg",
 "https://ingresso-a.akamaihd.net/img/cinema/cartaz/19592-cartaz.jpg",
 "https://a-static.mlcdn.com.br/1500x1500/dvd-harry-potter-e-o-prisioneiro-de-azkaban-daniel-radclif-warner-home-video/theoriginals/4480389218/68db78b1a254f9b0b34765ed8fbbca6d.jpg",
 "https://static.wikia.nocookie.net/vvikipedia/images/d/d8/Poster_Harry_Potter_e_o_C%C3%A1lice_de_Fogo.jpg/revision/latest/scale-to-width-down/340?cb=20200413041610&path-prefix=pt",
 "https://static.wikia.nocookie.net/harrypotter/images/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg/revision/latest?cb=20161002074140",
 "https://images-na.ssl-images-amazon.com/images/I/81irhjzNBeL._AC_SY550_.jpg",
 "https://upload.wikimedia.org/wikipedia/pt/6/64/Harry_Potter_Deathly_Hallows_2010.jpg",
 "https://static.wikia.nocookie.net/vvikipedia/images/6/6f/Poster_Harry_Potter_e_as_Rel%C3%ADquias_da_Morte-_Parte_2.jpg/revision/latest/scale-to-width-down/340?cb=20200401223511&path-prefix=pt"



]


  for (var i = 0; i < listaFilmes.length; i++){
  document.write("<img class='filmes' src=" + listaFilmes[i] + ">")
}

