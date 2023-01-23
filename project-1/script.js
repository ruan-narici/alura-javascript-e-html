var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');

background = () => {
    //background
    pincel.fillStyle = 'darkgreen';
    pincel.fillRect(0,0,400,400);
}

olhoEsquerdo = () => {
    //olho-esquerdo
    pincel.fillStyle = 'black';
    pincel.fillRect(60,80,100,100);
}

olhoDireito = () => {
    //olho-direito
    pincel.fillStyle = 'black';
    pincel.fillRect(240,80,100,100);
}

nariz = () => {
    //nariz
    pincel.fillStyle = 'black';
    pincel.fillRect(160,180,80,120);
}

bocaEsquerda = () => {
    //boca-esquerda
    pincel.fillStyle = 'black';
    pincel.fillRect(110,230,50,170);
}

bocaDireita = () => {
    //boca-direita
    pincel.fillStyle = 'black';
    pincel.fillRect(240,230,50,170);
}

//EXECUTE
background();
olhoEsquerdo();
olhoDireito();
nariz();
bocaEsquerda();
bocaDireita();