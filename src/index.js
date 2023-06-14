import { createHTML } from "./createHTML";
import './style.css';
import { updateProjectHTML } from "./updateHTML";
import { updateTodosHTML } from "./updateHTML";
import { createTodo } from "./Todo";
import { createProject } from "./projects";

let projects = ['Work', 'Study', 'Gym'];

let todos = [ 'hola'];


createHTML();
updateProjectHTML(projects);
updateTodosHTML(todos);


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
    todos.push(newTodo);
    updateTodosHTML(todos);
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
addProjectBtn.addEventListener('click',()=>{
    let newProject = createProject(projectNameInput.value)
    projects.push(newProject)
    updateProjectHTML(projects);
    newProjectForm.style.display = 'none'
    newProjectBtn.style.display = 'block'
})
cancelProjectBtn.addEventListener('click',()=>{
    newProjectForm.style.display = 'none'
    newProjectBtn.style.display = 'block'
})

let deafultProject = createProject('deafult', todos)
projects.push(deafultProject)

