var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var color = 'green';

exibeBackground = () => {

    pincel.fillStyle = 'darkgray';
    pincel.fillRect(0, 0, 600, 400);
}

exibePaleta = () => {

    pincel.fillStyle = 'red';
    pincel.fillRect(467, 0, 133, 133);
    pincel.fillStyle = 'green';
    pincel.fillRect(467, 133, 133, 133);
    pincel.fillStyle = 'blue';
    pincel.fillRect(467, 266, 133, 133);
}

mudaCor = (event) => {

    let mouseX = event.pageX - tela.offsetLeft;
    let mouseY = event.pageY - tela.offsetTop;
    if (mouseX >= 467 && mouseY <= 123){
        color = 'red';
    } else if (mouseX >= 467 && mouseY > 123 && mouseY <= 256){
        color = 'green';
    } else if (mouseX >= 467 && mouseY > 256){
        color = 'blue';
    }
}

exibeNomeCor = () => {

    pincel.fillStyle = color;
    pincel.fillRect(165, 10, 160, 25);
    pincel.fillStyle = 'white';
    pincel.font = '20px Georgia';
    pincel.fillText('Cor atual: ' + color, 173, 30);
}

desenhaCirculo = (x, y) => {

    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * Math.PI);
    pincel.fill();
}

localDoDesenho = (event) => {

    let mouseX = event.pageX - tela.offsetLeft;
    let mouseY = event.pageY - tela.offsetTop;
    console.log(mouseX + ',' + mouseY);
    if (mouseX < 457){ 
        desenhaCirculo(mouseX, mouseY);
    } else {
        console.log('Você não pode desenhar aqui!');
    }
    mudaCor(event);
    exibeNomeCor();
}

desenhaLinha = () => {

    tela.onmousemove = localDoDesenho;
}

cancelaLinha = () => {
    
    tela.onmousemove = null;
}





exibeBackground();
exibeNomeCor();
exibePaleta();
tela.onclick = localDoDesenho;
tela.onmousedown = desenhaLinha;
tela.onmouseup = cancelaLinha;