
const updateProjectHTML = function(projects){
    const projectHTML = document.querySelector('.project-list')
    projects.forEach(project => {
        projectHTML.innerHTML+=`<li>${project}</li>`
    });
}

const updateTodosHTML = function(todos){
    const todosHTML = document.querySelector('.todos')
    todosHTML.innerHTML = ''
    todos.forEach(todo => {
        todosHTML.innerHTML+=`<div class="todo" id="todo${todo.id}">`
            todosHTML.innerHTML+=`<input type="checkbox" id="checkbox${todo.id}">`
            todosHTML.innerHTML+=`<label for="checkbox${todo.id}">finished</label>`
            todosHTML.innerHTML+=`<h3>${todo.title}</h3>`
            todosHTML.innerHTML+=`<p>${todo.description}</p>`
            todosHTML.innerHTML+=`<p>${todo.dueDate}</p>`
            todosHTML.innerHTML+=`<div>${todo.priority}</div>`
        todosHTML.innerHTML+='</div>'
    });

}

export {updateProjectHTML, updateTodosHTML}