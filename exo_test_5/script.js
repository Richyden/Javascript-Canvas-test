let canva = document.createElement("canvas");

let canvaH = 500;
let canvaL = 500;
canva.height = canvaH;
canva.width = canvaL;

let canva_context = canva.getContext("2d");

canva_context.fillStyle = "rgb(0, 0, 0)";

canva_context.fillRect(0, 0, 500, 500);
let slide = canvaL / 20;

let cpt = 0;

for(cpt = 0; cpt < 10; cpt++) {
    if(cpt%2 != 0) {
        canva_context.fillStyle = "rgb(0, 0, 0)";
    }else {
        canva_context.fillStyle = "rgb(255, 255, 255)";
    }

    canva_context.fillRect(slide * cpt, slide * cpt, slide * (20-2 * cpt), slide * (20-2 * cpt));
}

document.body.appendChild(canva);