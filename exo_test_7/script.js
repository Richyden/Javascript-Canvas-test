let canva = document.getElementById("canva");

let canvaH = 1250;
let canvaL = 1250;
canva.height = canvaH;
canva.width = canvaL;

let canva_context = canva.getContext("2d");

let space = 5;
let large = 50;

let cpt1 = 0;
let cpt2 = 0;

canva_context.fillStyle = "rgb(0, 0, 0)";

for(cpt1 = 0; cpt1 < 10; cpt1++) {
    for(cpt2 = 0; cpt2 < 10; cpt2++) {
        if(cpt1%2 != 0 && cpt2%2 == 0) {
            canva_context.fillStyle = "rgb(0, 0, 0)";
            canva_context.fillRect(cpt1 * (large + space), cpt2 * (large + space), large, large);
        }
        if(cpt1%2 != 0 && cpt2%2 != 0) {
            canva_context.fillStyle = "rgb(255, 255, 255)";
            canva_context.fillRect(cpt1 * (large + space), cpt2 * (large + space), large, large);
        }
        if(cpt1%2 == 0 && cpt2%2 == 0) {
            canva_context.fillStyle = "rgb(255, 255, 255)";
            canva_context.fillRect(cpt1 * (large + space), cpt2 * (large + space), large, large);
        }
        if(cpt1%2 == 0 && cpt2%2 != 0) {
            canva_context.fillStyle = "rgb(0, 0, 0)";
            canva_context.fillRect(cpt1 * (large + space), cpt2 * (large + space), large, large);
        }
    }
}  

/*while(cpt1 < 10) {
    cpt2 = 0;
    while(cpt2 < 10) {
        if(cpt1%2 != 0 && cpt2%2 == 0) {
            canva_context.fillStyle = "rgb(0, 0, 0)";
            canva_context.fillRect(cpt1 * (large + space), cpt2 * (large + space), large, large);
        }
        if(cpt1%2 != 0 && cpt2%2 != 0) {
            canva_context.fillStyle = "rgb(255, 255, 255)";
            canva_context.fillRect(cpt1 * (large + space), cpt2 * (large + space), large, large);
        }
        if(cpt1%2 == 0 && cpt2%2 == 0) {
            canva_context.fillStyle = "rgb(0, 0, 0)";
            canva_context.fillRect(cpt1 * (large + space), cpt2 * (large + space), large, large);
        }
        if(cpt1%2 == 0 && cpt2%2 != 0) {
            canva_context.fillStyle = "rgb(255, 255, 255)";
            canva_context.fillRect(cpt1 * (large + space), cpt2 * (large + space), large, large);
        }

        cpt2++;
    }

    cpt1++;
}*/

document.body.appendChild(canva);