import {
    projectList,
    eventListeners
} from './addProject';

const toDoContainer = document.querySelector('.toDoContainer');
const projectNameInput = document.querySelector('#projectName');
const taskForm = document.querySelector('.taskForm');

const CreateTask = (title, description, date) => {
    return {
        title,
        description,
        date
    }
}

export const openTask = () => {
    toDoContainer.innerHTML = '';
    // Title container
    const taskTitleDiv = document.createElement('div');
    taskTitleDiv.classList.add('taskTitleDiv');
    toDoContainer.appendChild(taskTitleDiv);

    // Title heading
    const taskTitle = document.createElement('h1');
    taskTitle.classList.add('taskTitle');
    taskTitleDiv.appendChild(taskTitle);

    // Button container
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('taskBtnDiv');
    taskTitleDiv.appendChild(btnDiv);

    // Plus Button
    const addTaskBtn = document.createElement('button');
    addTaskBtn.addEventListener('click', function () {
        taskForm.classList.add('active');
    });

    const plus = document.createElement('plusContainer');
    addTaskBtn.appendChild(plus);
    plus.innerHTML = '<img src="imgs/bluePlus.png" alt="add" width="33" height="33">';
    addTaskBtn.classList.add('addTaskBtn');
    btnDiv.appendChild(addTaskBtn);

    taskTitle.innerHTML = projectNameInput.value;
    return taskTitleDiv;
}