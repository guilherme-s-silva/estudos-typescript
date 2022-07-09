const firstInput = document.querySelector('.first-input') as HTMLInputElement;
const secondInput = document.querySelector('.second-input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;

function sum (a: number, b: number){
    return a + b;
}

button.addEventListener('click', () => {
    console.log(sum(Number(firstInput.value), Number(secondInput.value)));
    
})