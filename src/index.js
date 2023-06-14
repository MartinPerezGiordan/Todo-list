import { createHTML } from "./createHTML";
import './style.css';
import { updateProjectHTML } from "./updateHTML";
import { updateTodosHTML } from "./updateHTML";
import { createTodo } from "./Todo";
import { createProject } from "./projects";

let projects = [
createProject('Daily', [createTodo('Make dinner', 'prepare a nice smoked chicken', 'hola','High')],500)
];

let selectedProject = projects[0]


createHTML();
updateProjectHTML(projects);
updateTodosHTML(selectedProject.name,selectedProject.todos);


const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const dueDateInput = document.querySelector('#dueDate');
const priorityInput = document.querySelector('#priority');
const addBtn = document.querySelector('.add')
const openAddBtn = document.querySelector('.btn-add-todo')
const addform = document.querySelector('.add-todo')
const cancel = document.querySelector('.cancel')
const newProjectBtn = document.querySelector('.new-project-btn')
const addProjectBtn = document.querySelector('.add-project')
const cancelProjectBtn = document.querySelector('.cancel-project')
const newProjectForm = document.querySelector('.add-project-form')
const projectNameInput = document.querySelector('.project-name-input')


let todoId = 0

addBtn.addEventListener('click',()=>{
    let newTodo = createTodo(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value,true,todoId);
    todoId++
    selectedProject.todos.push(newTodo);
    updateTodosHTML(selectedProject.name,selectedProject.todos);
    addform.style.display = 'none'
    openAddBtn.style.display = 'block'
    titleInput.value = ''
    descriptionInput.value = ''
    dueDateInput.value = ''
})
openAddBtn.addEventListener('click',()=>{
    addform.style.display = 'flex'
    openAddBtn.style.display = 'none'
})
cancel.addEventListener('click',()=>{
    addform.style.display = 'none'
    openAddBtn.style.display = 'block'
})



newProjectBtn.addEventListener('click',()=>{
    newProjectForm.style.display = 'block'
    newProjectBtn.style.display = 'none'
})

let projectId=0
addProjectBtn.addEventListener('click',()=>{
    let newProject = createProject(projectNameInput.value,[],projectId)
    projects.push(newProject)
    updateProjectHTML(projects);
    projectId++
    newProjectForm.style.display = 'none'
    newProjectBtn.style.display = 'block'
    chooseProjectListener()
})
cancelProjectBtn.addEventListener('click',()=>{
    newProjectForm.style.display = 'none'
    newProjectBtn.style.display = 'block'
})

function chooseProjectListener(){
    const projectBtns = document.querySelectorAll('.project-btn')

    projectBtns.forEach((projectBtn)=>{
        projectBtn.addEventListener('click', (e)=>{
            selectedProject = e.target.id

            projects.forEach(project => {
                if(e.target.id.substring(7)==project.id){
                    selectedProject=project
                }
            });
            updateTodosHTML(selectedProject.name,selectedProject.todos);
        })
    })
}
chooseProjectListener()
