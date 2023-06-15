


const createTodo = function(title,description,dueDate,priority, id){

    let isDone = checked;

    const markDone = ()=>{
        isDone = !isDone
    }

    const getDoneValue = ()=>{
        return isDone;
    }

    let deleted=false
    let checked=false


    return {
        title,
        description,
        dueDate,
        priority,
        checked,
        id,
        deleted,
    }
}

export {createTodo}