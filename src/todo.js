


const createTodo = function(title,description,dueDate,priority,checked){

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
        getDoneValue
    }
}


const todo1 = createTodo(
    'Finish project',
    'Complete the final tasks for the project',
    '2023-06-15',
    'High',
    false
  );


  console.log(todo1.getDoneValue())
  todo1.markDone();
  console.log(todo1.getDoneValue())


