"use strict"

import{text, reverseF,upperCaseF,lowerCaseF, textL} from "../view_model/index.js";

reverseF.addEventLIstener("click", reverse);
function reverse(text) {
    if (text <= 0) {
        alert('Nothing entered');
      } else {
        let newText = document.createElement("p");
        newText.classList.add("textL");
        newText.innerHTML = input.value;
        textL.append(newText);
        return text.split().reverse().join().split().reverse().join();}
    };


upperCaseF.addEventLIstener("click", upperCase);
function upperCase(text){
    if (text <= 0) {
        alert('Nothing entered');
      } else {
        let newText = document.createElement("p");
        newText.classList.add("textL");
        newText.innerHTML = input.value;
        textL.append(newText);
        return text[0].toUpperCase() + text.slice(1);}
    };



lowerCaseF.addEventLIstener("click", lowerCase);
function lowerCase(){
    if (text <= 0) {
        alert('Nothing entered');
     } else {
        let newText = document.createElement("p");
        newText.classList.add("textL");
        newText.innerHTML = input.value;
        textL.append(newText);
        newText.textContent = newText.textContent.toLowerCase();}
   };

export {lowerCase,upperCase, reverse};