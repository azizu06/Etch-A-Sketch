const header = document.querySelector(".header");
const mainContainer = document.querySelector(".main-container");
const options = document.querySelector(".options");
const canvas = document.querySelector(".canvas");

let title = document.createElement("h1");
let color = document.createElement("button");
let eraser = document.createElement("button");
let rainbow = document.createElement("button");
let clear = document.createElement("button");
let gridPicker = document.createElement("input");
let gridSize = document.createElement("h2");
let colorPicker = document.createElement("input")
let square = document.createElement("div");


colorPicker.type = "color";
colorPicker.vaule = "#000000";
gridPicker.type = "range";
gridPicker.min = "1";
gridPicker.max = "100";
gridPicker.value = "16";
gridSize.textContent = "16x16";

colorPicker.classList.add("colorPicker");
gridSize.classList.add("gridSize");
gridPicker.classList.add("gridPicker");

title.textContent = "Etch-A-Sketch";
title.classList.add("title");
header.appendChild(title);

color.textContent = "Color";
eraser.textContent = "Eraser";
rainbow.textContent = "Rainbow";
clear.textContent = "Clear";


options.appendChild(colorPicker);
options.appendChild(gridSize);
options.appendChild(gridPicker);
options.appendChild(eraser);
options.appendChild(color);
options.appendChild(eraser);
options.appendChild(rainbow);
options.appendChild(clear);

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.classList.add("option-buttons");
});