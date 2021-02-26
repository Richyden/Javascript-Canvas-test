let canva = document.createElement("canvas");

canva.height = 600;
canva.width = 600;

let canva_context = canva.getContext("2d");

canva_context.fillStyle = "rgb(0, 0, 0)";

canva_context.fillRect(0, 0, 600, 100);
canva_context.fillRect(0, 200, 600, 100);
canva_context.fillRect(0, 400, 600, 100);

document.body.appendChild(canva);