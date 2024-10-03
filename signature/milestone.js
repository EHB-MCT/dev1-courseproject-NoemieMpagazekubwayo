drawMile();

function drawMile() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

context.lineWidth = 1;
context.strokeStyle ="black";
context.fillStyle = "black";
context.beginPath();
context.rect(100, 100, 300, 300);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(225, 150, 50, 50);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(225, 200, 50, 50);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(225, 250, 50, 50);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(275, 250, 50, 50);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(325, 250, 50, 50);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(175, 250, 50, 50);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(125, 250, 50, 50);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(170, 325, 50, 50);
context.fill();
context.stroke();

context.lineWidth = 1;
context.strokeStyle ="blue";
context.fillStyle = "blue";
context.beginPath();
context.rect(275, 325, 50, 50);
context.fill();
context.stroke();

}