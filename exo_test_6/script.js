let canva = document.createElement("canvas");

let canvaH = 500;
let canvaL = 500;
canva.height = canvaH;
canva.width = canvaL;

let canva_context = canva.getContext("2d");

canva_context.fillStyle = "rgb(0, 0, 0)";
canva_context.fillRect(0, 0, canvaL, canvaH);

for(let cpt = 50; cpt < canvaL; cpt+= 50) {
    canva_context.clearRect(cpt, 0, 1, canvaH);
    canva_context.clearRect(0, cpt, canvaL, 1);
}

document.body.appendChild(canva);