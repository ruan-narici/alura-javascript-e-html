var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');

var em2015 = [50,25,20,5];
var em2016 = [65,20,13,2];
var cores = ['blue', 'green', 'yellow', 'red'];

background = () => {
    pincel.strokeRect(100,0,450,300);
    pincel.font = '25px Georgia';
    pincel.fillText('Gráfico', 280, 50);
    pincel.fillStyle = 'black';
}


mostraGrafico = (text, dados, x, y) => {

    let somaAltura = 0;

    pincel.font = '15px Georgia';
    pincel.fillStyle = 'black';
    pincel.fillText(text, x + 10, y - 20);
    pincel.strokeStyle = 'black';
    for (i = 0; i < dados.length; i++) {
        pincel.fillStyle = cores[i];
        pincel.strokeRect(x, y + somaAltura, 50, dados[i]);
        pincel.fillRect(x, y + somaAltura, 50, dados[i]);
        somaAltura += dados[i];
    }

}

background();
mostraGrafico('2015', em2015, 200, 200);
mostraGrafico('2016', em2016, 400, 200);
