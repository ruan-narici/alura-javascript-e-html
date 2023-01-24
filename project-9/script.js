var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');
var x = 30;
var y = 180;
var sentido = 1;
var raio = 20;
var pulsar = 1;

desenhaBackground = () => {

    pincel.fillStyle = 'lightgrey';
    pincel.fillRect(0,0,600,400);
}

desenhaBola = (x,y,raio) => {

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x,y,raio,0,2* Math.PI);
    pincel.fill();
}

limpaTela = () => {

    pincel.clearRect(0,0,600,400);
    desenhaBackground();
}

rebaterBola = () => {

    if (x >= 600 - 20) {
        sentido = -1;
    } else if (x <= 0 + 20) {
        sentido = 1;
    }
    x += sentido;
}

moverBola = (event) => {

    if (event.keyCode == 38 && y >= 0 + raio) {
        console.log('up');
        y -= 20;
        } else if (event.keyCode == 40 && y <= 400 - raio) {
            console.log('down');
            y += 20;
            } else if (event.keyCode == 39 && x <= 600 - raio) {
                console.log('right');
                x += 20;
                } else if (event.keyCode == 37 && x >= 0 + raio) {
                    console.log('left');
                    x -= 20;
    }
}

moverAoPressionar = () => {
    
    document.onkeydown = moverBola;
}

pulsarBola = () => {

    if (raio <= 20) {
        pulsar = 1;
    } else if (raio >= 30) {
        pulsar = -1; 
    }
    raio += pulsar;
}

atualizaTela = () => {

    limpaTela();
    desenhaBola(x,y,raio);
    // rebaterBola();
    pulsarBola();
}

//EXECUTE
desenhaBackground();
setInterval(atualizaTela, 20);
moverAoPressionar();
