"use strict";

const body = document.body;
const li = body.querySelectorAll("li");
const inputRedColor = body.querySelector('input[name="red"]');
const inputGreenColor = body.querySelector('input[name="green"]');
const inputBlueColor = body.querySelector('input[name="blue"]');
const inputAlphaColor = body.querySelector('input[name="alpha"]');
const add = body.querySelector("#add");

add.addEventListener("click", addRGBA);

class addRGBA{
    constructor(a, arg){
    this.colors = arg;
    this.a = a;
    arg.forEach((e) => {
      if (isNaN(e)) throw new TypeError("Color value must be a number");
      if (e < 0 || e > 255)
        throw RangeError("Value must be bigger than 0 and less than 255");
    });
    if (a < 0 || a > 10)
      throw RangeError("Value must be bigger than 0 and less than 10");
    if (isNaN(a)) throw new TypeError("Color value must be a number");
}}

getColor(){
let [r, g, b] = this.colors;
return `rgb(${r},${g},${b},${this.alpha / 10})`;
}

//setColor()  


function addStyle() {
  try {
    new RGB(
      Number(inputAlphaColor.value),
      Number(inputRedColor.value),
      Number(inputGreenColor.value),
      Number(inputBlueColor.value)
    );
    setColor();
  } catch (e) {
    inputAlphaColor.value = " ";
    inputBlueColor.value = " ";
    inputGreenColor.value = " ";
    inputRedColor.value = " ";
}
