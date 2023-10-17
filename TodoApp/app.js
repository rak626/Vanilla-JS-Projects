const inputBox = document.querySelector('#input-box');
const button = document.querySelector('button');
const listContainer = document.querySelector('#list-container');

const todoList = [];

function addTask() {
    if (inputBox.value === '') {
        alert('Input box is empty...');
    } else {
        const list = document.createElement('li');
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        list.append(span);
    }
    inputBox.value = '';
    saveData();
}

function handleAddTodo(e) {
    addTask();
}

function handleListContainer(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentNode.remove();
        saveData();
    }
}

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

// event listeners
button.addEventListener('click', handleAddTodo);
// button.addEventListener('keydown', handleAddTodo)
listContainer.addEventListener('click', handleListContainer, false);


showData();