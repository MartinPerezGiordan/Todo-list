
const createHTML = function(){

    const header = document.createElement("div");
    header.id = "header";
    header.innerHTML = '<div class="logo">To-do-List</div>'

    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    sidebar.innerHTML = 'HOLAAAA'

    const mainContent = document.createElement("div");
    mainContent.id = "main-content";


    const footer = document.createElement("div");
    footer.id = "footer";

    document.body.appendChild(header);
    document.body.appendChild(sidebar);
    document.body.appendChild(footer);
    document.body.appendChild(mainContent);


}

export {createHTML}