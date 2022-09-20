const tasksInput = document.querySelector('.tasks__input');
const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
const enter = 13;

tasksAdd.addEventListener('click', (i) => {
    i.preventDefault();
    i.keyCode = enter;

    const toDoListElement = document.createElement('div');
    toDoListElement.classList.add('task');

    toDoListElement.innerHTML += `
        <div class="task__title">${tasksInput.value}</div>
        <a href="#" class="task__remove">&times;</a>
    `;

    if (tasksInput.value.length === 0) {
        return false;
    }

    tasksList.appendChild(toDoListElement);
    tasksInput.value = '';
})

tasksList.addEventListener("click", e => {
    if (e.target.classList.contains("task__remove")) {
        e.target.parentElement.remove();
      }
})
