var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');

pincel.fillStyle = 'lightgrey';
pincel.fillRect(0,0,600,400);

desenharCirculo = (x,y,r,color) => {
    pincel.beginPath();
    pincel.fillStyle = color;
    pincel.arc(x,y,r,0,2*3.14);
    pincel.fill();
}

desenharFlor = (x,y) => {
    desenharCirculo(x,y-40,20, 'yellow');
    desenharCirculo(x-40,y,20,'orange');
    desenharCirculo(x,y,20,'red');
    desenharCirculo(x+40,y,20,'black');
    desenharCirculo(x,y+40,20,'blue');
}

desenharFlor(300,200);