


const createTodo = function(title,dueDate,id){

    let deleted=false
    let checked=false

    return {
        title,
        dueDate,
        checked,
        id,
        deleted,
    }
}

export {createTodo}