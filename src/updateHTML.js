import { todoDeleteBtnsListener } from ".";
import { editTodoListener } from ".";
import { checkboxListener } from ".";
import { projectDeleteBtnsListener } from ".";

const updateProjectHTML = function(projects){
    const projectHTML = document.querySelector('.project-list')
    projectHTML.innerHTML = ''
    console.log(projects)

    projects.forEach(project => {
        if(!project.deleted){
            projectHTML.innerHTML+=`<li class="project-btn" id="project${project.id}">${project.name}</li><button id="delete-project${project.id}" class="project-delete-btn">X</button>`
        }

    });
    projectDeleteBtnsListener();
}

const updateTodosHTML = function(projectName, todos){
    const projectTitle = document.querySelector('.project-title')
    projectTitle.innerHTML = projectName
    const todosHTML = document.querySelector('.todos')
    todosHTML.innerHTML = ''
    let addTodoBtn = document.querySelector('.btn-add-todo')

    if(projectName===''){
        addTodoBtn.style.display='none'
    }
    else{
        addTodoBtn.style.display='block'

    }

    todos.forEach(todo => {
        if(!todo.deleted){
            let todoTask = document.createElement('div')
            todoTask.classList.add('todo-task')
            todoTask.id=`todo${todo.id}`
            if(todo.checked){
                todoTask.innerHTML+=`<input type="checkbox" checked="true" class="checkbox" id="checkbox${todo.id}">`
                todoTask.classList.add('checked')
            }
            else{
                todoTask.innerHTML+=`<input type="checkbox" class="checkbox" id="checkbox${todo.id}">`
                todoTask.classList.remove('checked')
            }
            
            //todoTask.innerHTML+=`<label for="checkbox${todo.id}">finished</label>`
            todoTask.innerHTML+=`<div class="todo-title" id="todo-title${todo.id}">${todo.title}</div>`
            //todoTask.innerHTML+=`<p>${todo.description}</p>`
            todoTask.innerHTML+=`<p>${todo.dueDate}</p>`
            //todoTask.innerHTML+=`<div>${todo.priority}</div>`
            todoTask.innerHTML+=`<button class="todo-delete-btn" id="deleteTodo${todo.id}">X</button>`

            todosHTML.appendChild(todoTask);
        }

    });
    checkboxListener();
    editTodoListener();
    todoDeleteBtnsListener();

}

export {updateProjectHTML, updateTodosHTML}