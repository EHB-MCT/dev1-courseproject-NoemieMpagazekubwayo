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
function drawPoster() {
    let rows = 2;
    let columns = 3;
    let margin = 50;

    // Bereken de maximale breedte en hoogte per poster (zonder marges)
    let maxWidth = (width - (margin * (columns + 1))) / columns;
    let maxHeight = (height - (margin * (rows + 1))) / rows;

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            // Bereken de x- en y-posities met marges
            let x = margin + i * (maxWidth + margin);
            let y = margin + j * (maxHeight + margin);

            // Vaste afmetingen voor de achtergrondrechthoek
            let w = maxWidth;  // De rechthoek neemt de volledige breedte van de poster in
            let h = maxHeight; // De rechthoek neemt de volledige hoogte van de poster in

            // Teken de achtergrondrechthoek voor elke poster (dit is de vaste rechthoek)
            context.fillStyle = "lightblue"; // Vaste achtergrondkleur (bijv. lichtblauw)
            context.fillRect(x, y, w, h); // Achtergrondrechthoek tekenen
            // Teken meerdere lagen van willekeurige vormen op de achtergrond
            let numberOfLayers = Math.floor(Math.random() * 5) + 2; // Willekeurig aantal lagen (minimaal 2, maximaal 6)
            for (let layer = 0; layer < numberOfLayers; layer++) {
                // Willekeurige x, y, w, h voor elke laag
                let layerX = x + Math.random() * (w / 2);
                let layerY = y + Math.random() * (h / 2);
                let layerWidth = Math.random() * (w / 2);
                let layerHeight = Math.random() * (h / 2);

                // Teken een willekeurige vorm op de laag
                drawRandomShape(layerX, layerY, layerWidth, layerHeight);
            }
        }
    }
}
