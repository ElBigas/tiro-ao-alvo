/**
 * Quando a tela é clicada, a função dispara é chamada e verifica se o ponto clicado está 
 * dentro do raio do alvo. O alvo é sorteado na tela a cada 1 segundo pela função 
 * sorteiaPosicao. A função desenhaAlvo desenha o alvo com três círculos de 
 * tamanhos diferentes na tela de acordo com as coordenadas x e y. 
 * A função desenhaCirculo desenha um círculo na tela com as coordenadas x e y, raio 
 * e cor fornecidas. A função limpaTela limpa a tela antes de desenhar o novo alvo sorteado.
 */

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

var XAleatorio;
var YAleatorio; //declarar fora da função(sorteiaPosicao) para poder usar na função(dispara)!!!

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function desenhaAlvo(x, y) {
    desenhaCirculo(x, y, raio + 20, "red");
    desenhaCirculo(x, y, raio + 10, "white");
    desenhaCirculo(x, y, raio, "red");
}

function sorteiaPosicao() {
    limpaTela()
    XAleatorio = (Math.random() * 600);
    YAleatorio = (Math.random() * 400);
    desenhaAlvo(XAleatorio, YAleatorio);
}

setInterval(sorteiaPosicao, 1000)

function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    console.log(x, y);

    if (x > XAleatorio - raio
        && x < XAleatorio + raio
        && y > YAleatorio - raio
        && y < YAleatorio + raio) {

        alert('Acertou!');
    }
}

tela.onclick = dispara;