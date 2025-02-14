const container = document.querySelector('.container');
const h1 = document.querySelector('h1');

let num = prompt('Size of grid:');
while (num > 100 || num < 1 || !Number.isInteger(parseInt(num))) 
    num = prompt('Please enter a number between 1 and 100')

function makeGrid(num1 = num) {
    while (num1 > 100 || num1 < 1 || !Number.isInteger(parseInt(num1))) 
        num1 = prompt('Please enter a number between 1 and 100')
    
    if (container.hasChildNodes()) {
        container.textContent=''
    }
    const side = 80/num1;
    h1.textContent = num1 + 'x' + num1 + ' Grid'

    for (let i = 0; i < num1 ** 2; i++) {
        const box = document.createElement('div');

        box.setAttribute('class', 'box');
        box.setAttribute('id', `num1${i}`);
        box.style.height = `${side}vh`;
        box.style.width = `${side}vw`;
        
        container.appendChild(box);
    };

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function () {
            if (!this.style.backgroundColor) {
                const s = Math.floor(Math.random() * 100);
                const l = Math.floor(Math.random() * 100);

                this.style.backgroundColor = `hsl(240 ${s} ${l})`;
                console.log(this.style.backgroundColor)
            };
        });
    });
}

const leftButt = document.querySelector('#leftButton');
const rightButt = document.querySelector('#rightButton');

leftButt.addEventListener('click', () => {
    num = prompt('Size of grid:');
    makeGrid(num);
});
rightButt.addEventListener('click', () => makeGrid(num))

makeGrid()