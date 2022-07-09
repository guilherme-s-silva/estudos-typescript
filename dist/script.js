"use strict";
const firstInput = document.querySelector('.first-input');
const secondInput = document.querySelector('.second-input');
const button = document.querySelector('button');
function sum(a, b) {
    return a + b;
}
button.addEventListener('click', () => {
    console.log(sum(Number(firstInput.value), Number(secondInput.value)));
});
