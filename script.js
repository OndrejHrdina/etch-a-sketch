const body = document.querySelector('body');
body.addEventListener('mouseover', () => body.style.backgroundColor = randomRGB(4));

const sliderX = document.querySelector('.sliderX');
const labelX = document.querySelector('.labelX');
let gridSizeX = 8;

const sliderY = document.querySelector('.sliderY');
const labelY = document.querySelector('.labelY');
let gridSizeY = 8;

sliderX.oninput = function() {
    gridSizeX = this.value;
    labelX.textContent = `x : ${gridSizeX}`;
    clear(gridSizeX, gridSizeY);
}
sliderY.oninput = function() {
    gridSizeY = this.value;
    labelY.textContent = `y : ${gridSizeY}`;
    clear(gridSizeX, gridSizeY);
}

const container = document.querySelector(".container");
container.addEventListener('mouseover',() => {
    let randomColor = randomRGB(0.6);
    container.style.backgroundColor = randomColor;
    container.style.boxShadow = `0 0 100px ${randomRGB(1)}`;
    sliderX.style.backgroundColor = randomColor;
    sliderY.style.backgroundColor = randomColor;
    labelX.style.color = randomColor;
    labelY.style.color = randomColor;
    });

let pixels = [];
let rows = [];

function generateGrid (gridSizeX, gridSizeY) {
    for (let y = 0; y < gridSizeY; y++) {
        let row = document.createElement('div');
        for (let x = 0; x < gridSizeX; x++) {
            let pixel = document.createElement('div');
            pixel.classList.add("pixel", `x=${x}`);
            pixel.style.transition = `${Math.sqrt(gridSizeX*gridSizeY)/3}s`;
            pixel.addEventListener('mouseover',() => {
                pixel.style.backgroundColor = randomRGB(1.7);
                pixel.style.boxShadow = `0 0 30px ${randomRGB(1)}`;
                });
            pixels.push(pixel);
            row.append(pixel);
        }
        row.classList.add("row", `y=${y}`);
        rows.push(row);
        container.append(row);
    }
}

function removeArray (array) {
    for (let i = 0; i < array.length; i++) {
        array[i].remove();
    }
}

function randomRGB(factor){
    return `rgb(${Math.random() * 255 * factor},${Math.random() * 255 * factor},${Math.random() * 255 * factor})`;
}

function clear (gridSizeX, gridSizeY) {
    removeArray(pixels);
    removeArray(rows);
    generateGrid(gridSizeX, gridSizeY);
}

generateGrid(8,8);
