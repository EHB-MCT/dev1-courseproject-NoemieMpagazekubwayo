"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawPoster();

function getRandomColor() {
    // Genereer een willekeurige kleur in hex formaat
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function drawRandomShape(x, y, w, h) {
    // Willekeurige vorm kiezen (rechthoek, cirkel, driehoek)
    const shapeType = Math.floor(Math.random() * 3); // Kies een vorm: 0 = rechthoek, 1 = cirkel, 2 = driehoek

    let color = getRandomColor();
    context.fillStyle = color;

    context.beginPath();
    if (shapeType === 0) {
        // Rechthoek
        context.rect(x, y, w, h);
    } else if (shapeType === 1) {
        // Cirkel
        let radius = Math.min(w, h) / 2;
        context.arc(x + w / 2, y + h / 2, radius, 0, Math.PI * 2);
    } else if (shapeType === 2) {
        // Driehoek
        context.moveTo(x + w / 2, y); // bovenpunt
        context.lineTo(x, y + h);     // linker onderpunt
        context.lineTo(x + w, y + h); // rechter onderpunt
        context.closePath();
    }
    context.fill(); // Teken de vorm
}
