"use strict";
import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawPoster();

function drawPoster() {
    let rows = 2;
    let columns = 3;
    let margin = 50;

    let w = (width - (margin * (columns + 1))) / columns;
    let h = (height - (margin * (rows + 1))) / rows;

    context.fillStyle = "darkred";

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            // Bereken de x- en y-posities met marges
            let x = margin + i * (w + margin);
            let y = margin + j * (h + margin);

            // Teken de rechthoek
            context.fillRect(x, y, w, h);
        }
    }
}