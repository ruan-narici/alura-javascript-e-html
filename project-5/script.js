var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');

desenhaTexto = (texto,x,y) => {

    pincel.font = '20px Georgia';
    pincel.fillStyle = 'black';
    pincel.fillText(texto, x, y);
}

desenhaTexto('Qual é a fração?', 50, 30);

desenhaQuadrado = (x,y,color) => {

    pincel.fillStyle = color;
    pincel.fillRect(x,y,30,30);
    pincel.strokeStyle = 'black';
    pincel.strokeRect(x,y,30,30);
}

desenhaQuadrado(50,50,'green');
desenhaQuadrado(80,50,'green');
desenhaQuadrado(110,50,'green');
desenhaQuadrado(140,50,'white');