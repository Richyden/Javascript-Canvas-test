let canva = document.createElement("canvas");

canva.height = 500;
canva.width = 500;

let canva_context = canva.getContext("2d");

canva_context.fillStyle = "rgb(0, 0, 0)";

canva_context.fillRect(0, 0, 250, 250);
canva_context.fillRect(250, 250, 500, 500);

document.body.appendChild(canva);