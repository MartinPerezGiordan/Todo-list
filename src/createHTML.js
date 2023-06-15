
import { selectedProject } from ".";

const createHTML = function(){

    const header = document.createElement("div");
    header.id = "header";
    header.innerHTML = '<div class="logo">To-do-List</div>'

    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    sidebar.innerHTML = '<h2>Projects</h2><button class="new-project-btn">New Project</button><div class="add-project-form"><input type="text" class="project-name-input" maxlength="15" placeholder="Project name"><button class="add-project">+ Add</button><button class="cancel-project">Cancel</button></div>'
    sidebar.innerHTML += '<div class="projects"><ul class="project-list"></ul></div>'

    const addTodo = document.createElement("div");
    addTodo.classList.add('add-todo');
    addTodo.innerHTML = '<label for="title">Title:</label><input type="text" maxlength="150" id="title" name="title" required>'
    //addTodo.innerHTML +='<label for="description">Description:</label><textarea id="description" name="description" required></textarea>'
    addTodo.innerHTML +='<label for="dueDate">Due Date:</label><input type="date" id="dueDate" name="dueDate" required>'
    //addTodo.innerHTML +='<label for="priority">Priority:</label><select id="priority" name="priority"><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select>'
    addTodo.innerHTML +='<button class="add">+ Add</button>'
    addTodo.innerHTML +='<button class="cancel">Cancel</button>'


    const mainContent = document.createElement("div");
    mainContent.id = "main-content";
    mainContent.innerHTML += `<h2 class="project-title">List</h2>`
    mainContent.appendChild(addTodo);
    mainContent.innerHTML += '<button class="btn-add-todo">Add To-do</button><div class="todos"></div>'

    const footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML='  <p>Designed and developed by <a href="https://github.com/MartinPerezGiordan" target="_blank" rel="noopener noreferrer">Martin Perez</a></p>'

    document.body.appendChild(header);
    document.body.appendChild(sidebar);
    document.body.appendChild(mainContent);
    document.body.appendChild(footer);


}

export {createHTML}