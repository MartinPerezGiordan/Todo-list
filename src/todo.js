


const createTodo = function(title,description,dueDate,priority,checked, id){

    let isDone = checked;

    const markDone = ()=>{
        isDone = !isDone
    }

    const getDoneValue = ()=>{
        return isDone;
    }

    return {
        title,
        description,
        dueDate,
        priority,
        markDone,
        getDoneValue,
        id
    }
}

export {createTodo}