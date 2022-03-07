import {
    projectNameDisplay
} from './createTask';

const projectForm = document.querySelector('.projectForm');
const projectAddBtn = document.querySelector('#projectSubmitBtn');
const cancelBtn = document.querySelector('#projectCloseBtn');
const addBtn = document.querySelector('.addProjectBtn');
const projectNameInput = document.querySelector('#projectName');
const projectNameContainer = document.querySelector('#projectNameContainer');
const taskCloseBtn = document.querySelector('#taskCloseBtn');
const taskForm = document.querySelector('.taskForm');

let projectList = [];

let project = localStorage.getItem("projectsList");
project = JSON.parse(project || JSON.stringify(projectList));

let i = 0;
const NewProject = (name) => {
    const allTasks = [];
    return {
        name,
        id: i++,
        allTasks
    };
};

export const eventListeners = () => {
    addBtn.addEventListener('click', addProject);
    cancelBtn.addEventListener("click", hideForm);
    projectAddBtn.addEventListener('click', submitProject);
    taskCloseBtn.addEventListener('click', hideTaskForm);

    hideForm();
    return eventListeners;
};


//After hitting add inside project form
const submitProject = (e) => {
    hideForm();
    let projectTitle = projectNameInput.value;

    const createProject = NewProject(projectTitle);
    project.push(createProject);

    localStorage.setItem("projectsList", JSON.stringify(project));
    localStorage.setItem("currentId", createProject.id.toString());

    console.log(project);
    project.forEach(project => {
        createProjectForm(createProject.name);
    });

    e.preventDefault();
}


// // Project form in sidebar
const createProjectForm = (name) => {
    let projectDiv = document.createElement('button');
    projectDiv.addEventListener('click', projectNameDisplay);
    projectDiv.classList.add('projectDiv');

    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonContainer');

    let deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.textContent = 'Delete';
    deleteProjectBtn.classList.add('deleteBtn');

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');

    // Creating title
    let titleDiv = document.createElement('p');
    titleDiv.textContent = name;
    titleDiv.classList.add('projectDisplay');
    projectDiv.appendChild(titleDiv);

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteProjectBtn);
    projectDiv.appendChild(buttonDiv);

    projectNameContainer.appendChild(projectDiv);

    deleteProjectBtn.addEventListener('click', () => {
        projectNameContainer.removeChild(projectDiv);
        projectList.splice(projectDiv, 1);

    });
};

// // Opening and closing project form
const addProject = () => {
    projectNameInput.value = '';
    projectForm.classList.add('active');
}
const hideForm = () => {
    projectForm.classList.remove('active');
}
const hideTaskForm = () => {
    taskForm.classList.remove('active');
}

export default {
    eventListeners,
    projectList
};