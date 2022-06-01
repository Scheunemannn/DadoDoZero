function getRandomInt(min, max) {
  min = Math.ceil(0);
  max = Math.floor(6);
  return Math.ceil(Math.random() * (max - min)) + min;
}

botao.onclick = function () {
  var texto = document.getElementById("texto");
  var resultado = getRandomInt();
  var numero = document.getElementById("numero");
  
  if (resultado == 6) {
    document.getElementById("foto").src ="face6.png"
    texto.innerHTML = "Perfeito"
  } else if (resultado == 5) {
    document.getElementById("foto").src ="face5.png"
    texto.innerHTML = "Quase perfeito!"
  } else if (resultado == 4) {
    document.getElementById("foto").src ="face4.png"
    texto.innerHTML = "Boa!"
  } else if (resultado == 3) {
    document.getElementById("foto").src ="face3.png"
    texto.innerHTML = "Tá na média"
  } else if (resultado == 2) {
    document.getElementById("foto").src ="face2.png"
    texto.innerHTML = "Tá mal ein"
  } else if (resultado == 1) {
    document.getElementById("foto").src ="face1.png"
    texto.innerHTML = "Só lamento"
  }
};
