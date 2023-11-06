// elements
const body = document.body;
const button = document.querySelector('#clickMe');
const span = document.querySelector('span');
const hexEle = document.querySelector('#hex')
const simpleEle = document.querySelector('#simple')

let isHex;

function generateRandomHexColor() {
    const hexDigits = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hexDigits[Math.floor(Math.random() * 16)];
    }

    return hexColor;
}
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const handleColorChange = () => {
    let color = '';
    if (isHex) color = generateRandomHexColor();
    else color = generateRandomColor();
    body.style.backgroundColor = color;
    span.innerHTML = color;
};

function init() {
    isHex = false;
    let color = `rgb(194, 159, 159)`;
    body.style.backgroundColor = color
    span.innerHTML = color
    simpleEle.style.color = "red"
}


// event listeners
button.addEventListener('click', handleColorChange, false);
hexEle.addEventListener('click', (e) => {
    isHex = true;
    hexEle.style.color = "red"
    simpleEle.style.color = "black"
})

simpleEle.addEventListener('click', (e) => {
    isHex = false;
    hexEle.style.color = "black"
    simpleEle.style.color = "red"
})

window.onload = init;

