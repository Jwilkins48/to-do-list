import { saveLocalStorage } from "./addProject";

const toDoContainer = document.querySelector('.toDoContainer');
const projectNameInput = document.querySelector('#projectName');
const taskSubBtn = document.querySelector('#taskSubmitBtn');
const taskForm = document.querySelector('.taskForm');
const taskName = document.querySelector('#taskName');
const taskDesc = document.querySelector('#taskDesc');

let taskList = [];
let i = 0;
let id = Number(localStorage.getItem("currentId")) || i;

const CreateTask = (title, description) => { //Add Date
    const todo = {
        title,
        description,
        checked: false,
        id: i++,
    };
    taskList.push(todo);
    console.log(taskList);
};

export const submitTask = () => {
    if (taskName.value.trim() !== '') {
        CreateTask(taskName.value, taskDesc.value);
        saveLocalStorage();
        hideTaskForm();
        createTaskCard();
    } else {
        alert('Please enter task name')
    }
};

const createTaskCard = () => {
    // All Task Card Container
    let taskCardContainer = document.createElement('div');
    taskCardContainer.classList.add('taskCardContainer');

    let taskCard = document.createElement('div');
    taskCard.classList.add('taskCard');

    // Task Card Title
    let taskCardTitle = document.createElement('h1');
    taskCardTitle.classList.add('taskCardTitle');
    taskCardTitle.textContent = taskName.value;
    // Card description
    let taskDescription = document.createElement('p');
    taskDescription.classList.add('taskDescription');
    taskDescription.textContent = taskDesc.value;

    let taskOptions = document.createElement('button');
    taskOptions.classList.add('taskOptions');
    taskOptions.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    // Append all
    taskCard.appendChild(taskCardTitle);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskOptions);
    taskCardContainer.appendChild(taskCard);
    toDoContainer.appendChild(taskCardContainer);

    // Delete button
    taskOptions.addEventListener('click', () => {
        taskCardContainer.removeChild(taskCard);
        taskList.splice(taskCard, 1);
    });
}

const projectNameDisplay = () => {
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

//Hide form
const hideTaskForm = () => {
    taskForm.classList.remove('active')
};

taskSubBtn.addEventListener('click', submitTask);

export { id, projectNameDisplay }