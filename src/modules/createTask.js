import {
    projectList
} from './addProject';

const toDoContainer = document.querySelector('.toDoContainer');
const projectNameInput = document.querySelector('#projectName');

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

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('taskBtnDiv');
    taskTitleDiv.appendChild(btnDiv);

    const addTaskBtn = document.createElement('button');
    const plus = document.createElement('plusContainer');
    addTaskBtn.appendChild(plus);
    plus.innerHTML = '<img src="imgs/bluePlus.png" alt="add" width="35" height="35">';
    addTaskBtn.classList.add('addTaskBtn');
    btnDiv.appendChild(addTaskBtn);

    taskTitle.innerHTML = projectNameInput.value;

    return taskTitleDiv;
}