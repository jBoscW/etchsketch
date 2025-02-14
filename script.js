const container = document.querySelector('.container')

function paint(square) {
    h = 240;
    s = Math.floor(Math.random() * 100);
    l = Math.floor(Math.random() * 100);
    
};

function makeGrid() {
    const num = prompt('Size of grid:');
    const side = 80/num;

    for (let i = 0; i < num ** 2; i++) {
        const box = document.createElement('div');

        box.setAttribute('class', 'box');
        box.setAttribute('id', `num${i}`);
        box.style.height = `${side}vh`;
        box.style.width = `${side}vw`;

        container.appendChild(box);
    };
}

makeGrid()