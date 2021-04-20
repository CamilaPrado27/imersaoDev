// let valorEmAnosLuz = prompt("Qual o valor do seu destino?(em anos-luz)")

// const valorEmKm = (parseFloat(valorEmAnosLuz) * 9.461).toFixed(2)

// if(valorEmKm == 0){
//   //alert ('Provavelmente você irá ficar na Terra')
// }else{
//   //alert('Distância ' + valorEmKm+'  trilhões de Km')
//   //alert('Será uma viagem longa')
// }

// const valorInput = document.getElementById('valor')
// const submitButton = document.getElementById('submit')

// submitButton.addEventListener('click', (e)=>{
//     e.preventDefault()
//     converter()
// })

// function converter(){
//     if (valorInput.value==0){
//         alert('Provavelmente você irá ficar na Terra')
//     }else if(valorInput > 0){
//         const valorEmKm = (parseFloat(valorEmAnosLuz) * 9.461).toFixed(2)
//         alert('Distância ' + valorEmKm+'  trilhões de Km')
//         alert('Será uma viagem longa')
//     }

// }

var valorEmAnosLuz = prompt("Qual o valor do seu destino?(em anos-luz)")

var valorEmKm = (parseFloat(valorEmAnosLuz) * 9.461).toFixed(2)

if(valorEmKm == 0){
  alert ('Provavelmente você irá ficar na Terra')
}else if (valorEmAnosLuz == "") {
  alert('Provavelmente você irá ficar na Terra')
}else{
  alert('Distância ' + valorEmKm+'  trilhões de Km')
  alert('Será uma viagem longa')
}
