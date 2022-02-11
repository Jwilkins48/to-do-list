import {
    projectList,
    eventListeners
} from './addProject';

const toDoContainer = document.querySelector('.toDoContainer');
const projectNameInput = document.querySelector('#projectName');
const taskForm = document.querySelector('.taskForm');
const taskName = document.querySelector('#taskName');
const taskDesc = document.querySelector('#taskDesc');

let taskList = [];


const CreateTask = (title, description) => { //Add Date
    return {
        title,
        description,
        date
    }
}

export const submitTask = () => {
    let taskTitle = taskName.value;
    let description =  taskDesc.value;
    // let date

    const createTask = CreateTask(taskTitle, description);
    taskList.push(createTask);

    // createTaskForm(taskTitle);
    hideForm();
}

export const projectNameDisplay = () => {
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