const div = document.querySelector('#centre');

let rect = div.getBoundingClientRect();
let mid = Math.round(rect.left + (rect.right - rect.left) / 2);
console.log(rect.left, rect.right, mid);

div.addEventListener('mousemove', (e) => {
    if (e.x < mid) {
        div.style.backgroundColor = 'red';
    } else if (e.x > mid) {
        div.style.backgroundColor = 'blue';
    }
});

// div.addEventListener('click', (e) => {
//     console.log(e);
// })
