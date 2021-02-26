let canva = document.createElement("canvas");

let canvaH = 600;
let canvaL = 600;
canva.height = canvaH;
canva.width = canvaL;

let canva_context = canva.getContext("2d");
canva_context.fillStyle = "rgb(0, 0, 0)";

document.body.appendChild(canva);

var axe_x = 0;
var axe_y = 0;
var speed = 10;

function move() {
    if(axe_x == 0) {
        canva_context.clearRect(0, 0, canvaL, canvaH);
        canva_context.fillRect(axe_x, axe_y, 100, 600);
        canva_context.fillStyle = "rgb(0, 0, 0)";
    }
    if(axe_x == 200) {
        canva_context.clearRect(0, 0, canvaL, canvaH);
        canva_context.fillRect(axe_x, axe_y, 100, 600);
        canva_context.fillStyle = "rgb(0, 0, 0)";
    }
    if(axe_x == 400) {
        canva_context.clearRect(0, 0, canvaL, canvaH);
        canva_context.fillRect(axe_x, axe_y, 100, 600);
        canva_context.fillStyle = "rgb(0, 0, 0)";
    }
    if(axe_x == 600) {
        canva_context.clearRect(0, 0, canvaL, canvaH);
        canva_context.fillRect(axe_x, axe_y, 100, 600);
        canva_context.fillStyle = "rgb(0, 0, 0)";

        axe_x = 0;
        speed = 0;
    } else {
        axe_x = speed;
        speed += 10;
    }
}

window.setInterval(move, 50);