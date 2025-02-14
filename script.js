const container = document.querySelector('.container');
const h1 = document.querySelector('h1');

function makeGrid() {
    const num = prompt('Size of grid:');
    const side = 80/num;
    h1.textContent = num + 'x' + num + ' Grid'

    for (let i = 0; i < num ** 2; i++) {
        const box = document.createElement('div');

        box.setAttribute('class', 'box');
        box.setAttribute('id', `num${i}`);
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


makeGrid()