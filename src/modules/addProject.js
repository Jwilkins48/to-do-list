// const cancelBtn = document.querySelector('.cancelBtn');
const projectForm = document.querySelector('.projectForm');
const addBtn = document.querySelector('.addProjectBtn');

const addProject = () => {
    projectForm.classList.add('active');
}

const hideForm = () => {

}

const eventListeners = () =>{
    addBtn.addEventListener('click', addProject);
    // cancelBtn.addEventListener("click", hideForm);

    return eventListeners;  
};

export {eventListeners};