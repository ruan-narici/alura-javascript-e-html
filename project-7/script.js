var canvas = document.querySelector('canvas');
var pincel = canvas.getContext('2d');
var color = document.querySelector('input');
// var cores = ['blue', 'red', 'green'];


pincel.fillStyle = 'lightgrey';
pincel.fillRect(0,0,600,400);

// let c = 0;
let r = 10;

mostrarCor = () => {
    pincel.fillStyle = 'white';
    pincel.fillRect(240, 5, 90, 20);
    pincel.font = '15px Georgia';
    // pincel.fillStyle = cores[c];
    pincel.fillStyle = color.value;
    // pincel.fillText(cores[c], 250, 20);
    pincel.fillText(color.value, 250, 20);
}

mudarCor = () => {
    // if (c >= 2) {
    //     c = 0;
    // } else {
    //     c++;
    // }
    mostrarCor();
}

// desenharBolinhja = (event) => {
//     var x = event.pageX - canvas.offsetLeft;
//     var y = event.pageY - canvas.offsetTop;

//     pincel.beginPath();
//     pincel.fillStyle = cores[c];
//     if (event.shiftKey && r < 40) {
//         r += 10;
//     } else if (event.altKey && r > 10){
//        r -= 5;
//     } else {
//         r;
//     }
//     pincel.arc(x, y, r, 0, 2 * 3.14);
//     pincel.fill();
// }

desenharBolinhja = (event) => {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    pincel.beginPath();
    pincel.fillStyle = color.value;
    if (event.shiftKey && r < 40) {
        r += 10;
    } else if (event.altKey && r > 10){
       r -= 5;
    } else {
        r;
    }
    pincel.arc(x, y, r, 0, 2 * 3.14);
    mudarCor();
    pincel.fill();
}

paintOn = () => {
    canvas.onmousemove = desenharBolinhja;    
}

paintOff = () => {
    canvas.onmousemove = null;
}


canvas.onmousedown = paintOn;
canvas.onmouseup = paintOff;
// canvas.oncontextmenu = mudarCor;
mostrarCor();
