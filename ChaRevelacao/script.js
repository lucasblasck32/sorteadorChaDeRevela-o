var numeroSorteado = document.querySelector('div.box h1');
const botaoSortear = document.querySelector('div.box button');
var roleta = [];

const btnRafael = document.querySelector('#btnRafael');
const btnGiana = document.querySelector('#btnGiana');

for (i = 1; i <= 100; i++) {
  roleta.push(i);
}

botaoSortear.addEventListener('click', () => {
  document.getElementById('container').style.display = 'none';
  document.getElementById('loader').src = './img/loading.svg';
  document.getElementById('loader').style.width = '300px';
  document.getElementById('descubra').style.display = 'none';

  setTimeout(function () {
    numeroSorteado.innerHTML =
      'O número sorteado foi o ' +
      roleta[Math.floor(Math.random() * roleta.length)];

    var resultado = document.querySelector('#resultado');

    resultado.style.background = '#303030';
    resultado.style.margin = '50px';
    resultado.style.padding = '10px';
  }, 4 * 1000);
});

btnGiana.addEventListener('click', () => {
  document.getElementById('btnRafael').style.display = 'none';
  var btnGiana = document.querySelector('#btnGiana');
  btnGiana.style.transition = '400ms';
  btnGiana.style.padding = '0';
  btnGiana.style.width = '200px';
  btnGiana.style.background = '#B3A52E'
  btnGiana.style.border = 'none'
  btnGiana.style.color = 'white'
  document.querySelector('body').style.background = '#B3A52E';
  document.querySelector('body').style.transition = '1000ms';
});

btnRafael.addEventListener('click', () => {
  document.getElementById('btnGiana').style.display = 'none';
  var btnRafael = document.querySelector('#btnRafael');
  btnRafael.style.transition = '4ms';
  btnRafael.style.padding = '0';
  btnRafael.style.width = '200px';
  btnRafael.style.background = '#1C98FF'
  btnRafael.style.border = 'none'
  btnRafael.style.color = 'white'
  document.querySelector('body').style.background = '#1C98FF';
  document.querySelector('body').style.transition = '1000ms';
});
