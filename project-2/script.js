var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');




firstTriangle = () => {
    pincel.fillStyle = 'black';
    pincel.beginPath();
    //top-left
    pincel.moveTo(50, 50);
    //bottom-left
    pincel.lineTo(50,400);
    //bottom-right
    pincel.lineTo(400, 400);
    pincel.fill();
}

secondTriangle = () => {
    pincel.fillStyle = 'white';
    pincel.beginPath();
    //top-left
    pincel.moveTo(100, 150);
    //bottom-left
    pincel.lineTo(100,350);
    //bottom-right
    pincel.lineTo(280, 350);
    pincel.fill();
}

firstTriangle();
secondTriangle();