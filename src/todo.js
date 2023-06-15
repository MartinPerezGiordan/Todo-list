


const createTodo = function(title,description,dueDate,priority,checked, id){

    let isDone = checked;

    const markDone = ()=>{
        isDone = !isDone
    }

    const getDoneValue = ()=>{
        return isDone;
    }

    let deleted=false


    return {
        title,
        description,
        dueDate,
        priority,
        markDone,
        getDoneValue,
        id,
        deleted,
    }
}

export {createTodo}