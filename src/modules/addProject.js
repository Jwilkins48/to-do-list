const projectForm = document.querySelector('.projectForm');
const projectAddBtn = document.getElementById('projectSubmitBtn');
const cancelBtn = document.querySelector('#projectCloseBtn');
const addBtn = document.querySelector('.addProjectBtn');
const projectNameInput = getElementById('projectName');

// Opening and closing project form
const addProject = () => {
    projectForm.classList.add('active');
}
const hideForm = () => {
    projectForm.classList.remove('active');
}

const submitProject = () => {

}





const eventListeners = () => {
    addBtn.addEventListener('click', addProject);
    cancelBtn.addEventListener("click", hideForm);

    projectAddBtn.addEventListener('click', submitProject);

    return eventListeners;
};

export {
    eventListeners
};