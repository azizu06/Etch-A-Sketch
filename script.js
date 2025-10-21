const header = document.querySelector(".header");
const mainContainer = document.querySelector(".main-container");
const options = document.querySelector(".options");
const canvas = document.querySelector(".canvas");

let title = document.createElement("h1");
let color = document.createElement("button");
let eraser = document.createElement("button");
let rainbow = document.createElement("button");
let darken = document.createElement("button");
let clear = document.createElement("button");
let gridPicker = document.createElement("input");
let gridSize = document.createElement("h2");
let colorPicker = document.createElement("input")
let currentMode = "color";



colorPicker.type = "color";
colorPicker.value = "#000000";
gridPicker.type = "range";
gridPicker.min = 1;
gridPicker.max = 100;
gridPicker.value = 16;
gridSize.textContent = "16 x 16";

colorPicker.classList.add("colorPicker");
gridSize.classList.add("gridSize");
gridPicker.classList.add("gridPicker");

title.textContent = "Etch-A-Sketch";
title.classList.add("title");
header.appendChild(title);

color.textContent = "Color";
eraser.textContent = "Eraser";
darken.textContent = "Rainbow";
rainbow.textContent = "Darken";
clear.textContent = "Clear";


options.appendChild(colorPicker);
options.appendChild(gridSize);
options.appendChild(gridPicker);
options.appendChild(eraser);
options.appendChild(color);
options.appendChild(eraser);
options.appendChild(darken);
options.appendChild(rainbow);
options.appendChild(clear);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.classList.add("option-buttons");
    button.addEventListener("click", () => {
        buttons.forEach(button => {
            button.classList.remove("activeButton")
        });
        currentMode = button.innerText;
        button.classList.add("activeButton");
    });
});

gridPicker.addEventListener("input", () => {
    canvas.innerHTML = "";
    const sliderValue = gridPicker.value;
    const squareSize = 100 / sliderValue;
    gridSize.textContent = `${sliderValue} x ${sliderValue}`;
    for(let i = 0; i < sliderValue * sliderValue; i++){
        const square = document.createElement("div");
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        square.classList.add("square");
        canvas.appendChild(square);
        square.addEventListener("mouseover", () => {
            if(currentMode === "Color"){
                const colorChoice = colorPicker.value;
                square.style.backgroundColor = colorChoice;
            }
            else if(currentMode === "Eraser"){
                square.style.backgroundColor = "white";
            }
            else if(currentMode === "Rainbow"){
                const red = Math.floor(Math.random() * 255) + 1;
                const blue = Math.floor(Math.random() * 255) + 1;
                const green = Math.floor(Math.random() * 255) + 1;
                const randomColor = `rgb(${red}, ${blue}, ${green})`;
                square.style.backgroundColor = randomColor;
            }
            else if(currentMode === "Darken"){
                const currentStyle = window.getComputedStyle(square);
                const currentColor = currentStyle.backgroundColor;
                const colorFlag = currentColor.slice(0, 3);
                if(!(colorFlag === "rgb")){
                    let red2 = Math.max(255 - (255*0.1), 0);
                    let blue2 = Math.max(255 - (255*0.1), 0);
                    let green2 = Math.max(255 - (255*0.1), 0);
                    const newColor = `rgb(${red2}, ${blue2}, ${green2})`;
                    square.style.backgroundColor = newColor;
                }
                else{
                    const str = currentColor.slice(4, -1);
                    const newStr = str.split(",");
                    const red3 = Number(newStr[0]);
                    const blue3 = Number(newStr[1]);
                    const green3 = Number(newStr[2]);
                    let red4 = Math.max(red3 - (red3*0.1), 0);
                    let blue4 = Math.max(blue3 - (blue3*0.1), 0);
                    let green4 = Math.max(green3 - (green3*0.1), 0);
                    const newColor2 = `rgb(${red4}, ${blue4}, ${green4})`;
                    square.style.backgroundColor = newColor2
                }
            }
        });
    }
});

clear.addEventListener("click", () => {
    const clearGrid = document.querySelectorAll(".square");
    clearGrid.forEach(square => {
        square.style.backgroundColor = "white";
    });
});