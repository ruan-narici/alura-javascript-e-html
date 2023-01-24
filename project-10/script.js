var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');


bandeiraDoBrasil = () => {

    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(0,0,600,400);
    pincel.fillStyle = 'yellow';
    pincel.beginPath();
    pincel.moveTo(50,200);
    pincel.lineTo(300,50);
    pincel.lineTo(550,200);
    pincel.lineTo(300,350);
    pincel.fill();
    pincel.fillStyle = 'darkblue';
    pincel.beginPath();
    pincel.arc(300,200,100,0,2* Math.PI);
    pincel.fill();
    pincel.clearRect();
}

bandeiraDaAlemanha = () => {

    pincel.fillStyle = 'black';
    pincel.fillRect(0,0,600,133);
    pincel.fillStyle = 'red';
    pincel.fillRect(0,133,600,133);
    pincel.fillStyle = 'yellow';
    pincel.fillRect(0,266,600,134);
    pincel.clearRect();
}

trocarBandeira = () => {

    setInterval(bandeiraDoBrasil, 1000);
    setInterval(bandeiraDaAlemanha, 3000);
}

//EXECUTE
trocarBandeira();
