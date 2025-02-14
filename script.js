const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
let num = prompt('Size of grid:');

function makeGrid(num1 = num) {
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