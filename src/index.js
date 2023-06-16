import { createHTML } from "./createHTML";
import './style.css';
import { updateProjectHTML } from "./updateHTML";
import { updateTodosHTML } from "./updateHTML";
import { createTodo } from "./Todo";
import { createProject } from "./projects";



let projects = [
createProject('Nada', [
    
    createTodo('Make dinner', '15/6/2023', 540)],
    500),
];
console.log(projects)

let selectedProject = projects[0]
let savedProjects = JSON.parse(localStorage.getItem('projects'));
if(savedProjects!=''){
    projects=savedProjects
}
console.log(savedProjects)



createHTML();
updateProjectHTML(projects);
updateTodosHTML(selectedProject.name,selectedProject.todos, projects);


const titleInput = document.querySelector('#title');
const descriptionInput = document.querySelector('#description');
const dueDateInput = document.querySelector('#dueDate');
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
    let newTodo = createTodo(titleInput.value,dueDateInput.value,todoId);
    todoId++
    selectedProject.todos.push(newTodo);
    updateTodosHTML(selectedProject.name,selectedProject.todos, projects);
    addform.style.display = 'none'
    openAddBtn.style.display = 'block'
    titleInput.value = ''
    dueDateInput.value = ''

})
openAddBtn.addEventListener('click',()=>{
    addform.style.display = 'flex'
    openAddBtn.style.display = 'none'
})
cancel.addEventListener('click',()=>{
    addform.style.display = 'none'
    openAddBtn.style.display = 'block'
    titleInput.value = ''
    dueDateInput.value = ''
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
    projectNameInput.value = ''
    chooseProjectListener()

})
cancelProjectBtn.addEventListener('click',()=>{
    newProjectForm.style.display = 'none'
    newProjectBtn.style.display = 'block'
    projectNameInput.value = ''

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
            updateTodosHTML(selectedProject.name,selectedProject.todos, projects);
        })
    })
}
chooseProjectListener()

function todoDeleteBtnsListener(){
    const todoDeleteBtns = document.querySelectorAll('.todo-delete-btn')

    todoDeleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click',(e)=>{
            selectedProject.todos.forEach(todo => {
            if(e.target.id.substring(10)==todo.id){
                todo.deleted=true
            }
            updateTodosHTML(selectedProject.name,selectedProject.todos, projects);
            });
        })
    });
}

function projectDeleteBtnsListener(){
    const projectDeleteBtns = document.querySelectorAll('.project-delete-btn')

    projectDeleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click',(e)=>{

            projects.forEach(project => {

            if(e.target.id.substring(14)==project.id){
                project.deleted = true
                if(project.name==selectedProject.name){
                    updateProjectHTML(projects);
                    updateTodosHTML('',[], projects)
                }
                else{
                    updateProjectHTML(projects);
                    updateTodosHTML(selectedProject.name,selectedProject.todos, projects)
                }
            }

            });
        })
    });
}

function editTodoListener(){
    const editTitleBtns = document.querySelectorAll('.todo-title')

    editTitleBtns.forEach(editBtn =>{
        editBtn.addEventListener('click', (e)=>{
            selectedProject.todos.forEach(todo=>{
                if(e.target.id.substring(10)==todo.id){
                    let input = document.createElement('input')
                    input.value = e.target.textContent
                    e.target.parentNode.replaceChild(input, e.target);
                    input.focus();

                    input.addEventListener('blur', ()=>{
                        const newDiv = document.createElement('div');
                        input.parentNode.replaceChild(newDiv, input);  
                        newDiv.textContent = input.value;
                        updateTodosHTML(selectedProject.name,selectedProject.todos, projects);

                    });

                    input.addEventListener('keydown', (event)=>{
                        if(event.keyCode===13){
                            event.preventDefault();
                            const newDiv = document.createElement('div');
                            newDiv.classList.add('todo-title');
                            newDiv.textContent = input.value;
                            todo.title=input.value;
                            input.parentNode.replaceChild(newDiv, input);
                            updateTodosHTML(selectedProject.name,selectedProject.todos, projects);
                        }
                    })


                }
            })
        })
    })
}

function checkboxListener(){
    const checkboxes = document.querySelectorAll('.checkbox')

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click',(e)=>{
            selectedProject.todos.forEach(todo =>{

                if(e.target.id.substring(8)==todo.id){
                    if(!todo.checked){
                        todo.checked=true
                    }
                    else{
                        todo.checked=false
                    }
                    updateTodosHTML(selectedProject.name,selectedProject.todos, projects);

                }
            })
        })
    });
}

export {todoDeleteBtnsListener, editTodoListener, checkboxListener, projectDeleteBtnsListener}