let canva = document.createElement("canvas");

canva.height = 500;
canva.width = 500;

let canva_context = canva.getContext("2d");

canva_context.fillStyle = "rgb(0,0,0)";
canva_context.fillRect(100, 100, 250, 250);

document.body.appendChild(canva);
