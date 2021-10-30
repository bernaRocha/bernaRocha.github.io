const botao = document.getElementById('botao');
const fotoNova = document.getElementById('gato')
const textoNovo = document.getElementById('texto-humor')

let imagensNaTela = {
      0: 'img/aguardando.jpg', 
      1: 'img/deuruim.jpg', 
      2: 'img/excesso.jpg',
      3: 'img/gatozen.jpg', 
      4: 'img/happy.jpg', 
      5: 'img/pistola.jpg', 
      6: 'img/puto.jpg', 
      7: 'img/relax.png', 
      8: 'img/servidor.jpg'
}

let frasesNaTela = {
      0: 'Tá faltando comida aqui', 
      1: 'Vai tom* (&&^%$ $$&*', 
      2: 'Tem de mais',
      3: 'Tô numa nice', 
      4: 'Tô felizzzz', 
      5: 'Se fu%&*$#@', 
      6: 'NO', 
      7: 'NHOM NHOM', 
      8: 'Deu ruim'}

function pegaFoto(min, max){
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
}      

botao.addEventListener('click', function () {
      let i = pegaFoto(0, 9)
      
      fotoNova.src = imagensNaTela[i]
      textoNovo.innerHTML = frasesNaTela[i]
})