var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var x;
var y;
var raio = 10;
var pontos = 0;

desenhaBackground = () => {

    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0,0,600,400);
}

desenhaCirculo = (x,y,raio,cor) => {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x,y,raio,0, 2 * Math.PI);
    pincel.fill();
}

desenhaAlvo = (x,y) => {

    limpaTela();
    mostraPontos();
    desenhaCirculo(x,y,raio*3,'red');
    desenhaCirculo(x,y,raio*2,'white');
    desenhaCirculo(x,y,raio,'red');
}

mostraPontos = () => {
    pincel.fillStyle = 'black';
    pincel.font = '20px Georgia';
    pincel.fillText('PONTOS: ' + pontos, 230, 30);
}

limpaTela = () => {
    pincel.clearRect(0,0,600,400);
    desenhaBackground();
}

alteraPosicao = () => {
    x = Math.floor(Math.random () * 600);
    y = Math.floor(Math.random () * 400);
    desenhaAlvo(x,y);
}

clickMouse = (evento) => {
    console.log((evento.pageX - tela.offsetLeft) + ',' + (evento.pageY - tela.offsetLeft));
    positionX = evento.pageX;
    positionY = evento.pageY;

    if (positionX > x - raio + 5
            && positionX < x + raio + 5
                && positionY > y - raio + 5
                    && positionY < y + raio + 5) {
                        alert('Acertou');
                        pontos++;
                    }
}





//EXECUTE
desenhaBackground();
mostraPontos();
setInterval(alteraPosicao, 1000);
tela.onclick = clickMouse;
