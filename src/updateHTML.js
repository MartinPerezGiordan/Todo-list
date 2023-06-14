
const updateProjectHTML = function(projects){
    const projectHTML = document.querySelector('.project-list')
    projectHTML.innerHTML = ''

    projects.forEach(project => {
        projectHTML.innerHTML+=`<li class="project-btn" id="project${project.id}">${project.name}</li>`
    });
}

const updateTodosHTML = function(projectName, todos){
    const projectTitle = document.querySelector('.project-title')
    projectTitle.innerHTML = projectName
    const todosHTML = document.querySelector('.todos')
    todosHTML.innerHTML = ''
    todos.forEach(todo => {
        let todoTask = document.createElement('div')
        todoTask.classList.add('todo-task')
        todoTask.id=`todo${todo.id}`
        todoTask.innerHTML+=`<input type="checkbox" id="checkbox${todo.id}">`
        //todoTask.innerHTML+=`<label for="checkbox${todo.id}">finished</label>`
        todoTask.innerHTML+=`<h3>${todo.title}</h3>`
        todoTask.innerHTML+=`<p>${todo.description}</p>`
        todoTask.innerHTML+=`<p>${todo.dueDate}</p>`
        todoTask.innerHTML+=`<div>${todo.priority}</div>`
        todosHTML.appendChild(todoTask);
    });

}

export {updateProjectHTML, updateTodosHTML}