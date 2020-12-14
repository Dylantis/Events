// ============ randcolor.html ==================

// const button = document.querySelector('button')
// const h1 = document.querySelector('h1');
// button.addEventListener('click', function () {
//     const newColor = makeRandomColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;

// })


// =========== randbox.html =============
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const container = document.querySelector('#container')

for (let i = 0; i <= 20; i++) {
    const newB = document.createElement('button')
    newB.innerText = "Buttons!"
    container.appendChild(newB)
}

const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}