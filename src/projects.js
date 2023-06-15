

const createProject = function(name, todos, id){

    let deleted =false
    return{
        name,
        todos,
        id, 
        deleted
    }
}

export {createProject}