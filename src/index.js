import { createHTML } from "./createHTML";
import './style.css';
import { updateProjectHTML } from "./updateHTML";
import { updateTodosHTML } from "./updateHTML";
import { createTodo } from "./Todo";

let projects = ['Work', 'Study', 'Gym'];

let todos = [ ];


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

let todoId = 0

addBtn.addEventListener('click',()=>{
    let newTodo = createTodo(titleInput.value,descriptionInput.value,dueDateInput.value,priorityInput.value,true,todoId);
    todoId++
    todos.push(newTodo);
    updateTodosHTML(todos);
})
openAddBtn.addEventListener('click',()=>{
    addform.style.display = 'flex'
    openAddBtn.style.display = 'none'
})
cancel.addEventListener('click',()=>{
    addform.style.display = 'none'
    openAddBtn.style.display = 'block'

})


