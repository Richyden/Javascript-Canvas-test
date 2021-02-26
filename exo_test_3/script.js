let canva = document.createElement("canvas");

canva.height = 600;
canva.width = 600;

let canva_context = canva.getContext("2d");

canva_context.fillStyle = "rgb(0, 0, 0)";

canva_context.fillRect(0, 0, 100, 600);
canva_context.fillRect(200, 0, 100, 600);
canva_context.fillRect(400, 0, 100, 600);

document.body.appendChild(canva);