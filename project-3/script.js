var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');

backgroundRect = () => {
    pincel.fillStyle = 'green';
    pincel.fillRect(0,0,600,400);
}

backgroundLosang = () => {
    pincel.fillStyle = 'yellow';
    pincel.beginPath();
    pincel.moveTo(50, 200);
    pincel.lineTo(300, 50);
    pincel.lineTo(550, 200);
    pincel.lineTo(300, 350);
    pincel.fill();
}

backgroundBall = () => {
    pincel.fillStyle = 'darkblue';
    pincel.beginPath();
    pincel.arc(300, 200, 100, 0, 2*3.14);
    pincel.fill();
}

backgroundRect();
backgroundLosang();
backgroundBall();