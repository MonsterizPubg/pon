const form = document.forms.namedItem('todo');
let container = document.querySelector(".container");
let todos = [];
reload(todos, container);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fm = new FormData(form);

    const task = {
        id: crypto.randomUUID(),
        title: fm.get('title'), 
        time: new Date(Date.now()).toISOString(),
        isDone: false
    };
    todos.push(task);
    reload(todos, container);
});

function reload(arr, place) {
    place.innerHTML = ""; 

    for (let item of arr) {
        const divItem = document.createElement('div');
        const divTopSide = document.createElement('div');
        const buttonClose = document.createElement('button');
        const spanTitle = document.createElement('span');
        const spanTime = document.createElement('span');

        spanTitle.textContent = item.title;
        divTopSide.classList.add('top-side');
        buttonClose.textContent = 'x';
        buttonClose.addEventListener('click', () => {
            divItem.remove();
        });
        divItem.classList.add('item');
        spanTime.classList.add('time');
        spanTime.textContent = item.time;

        divTopSide.appendChild(buttonClose);
        divTopSide.appendChild(spanTitle);
        divItem.appendChild(divTopSide);
        divItem.appendChild(spanTime);
        place.appendChild(divItem);
    }
}
