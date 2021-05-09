const ADD_TODO = "ADD_TODO";

const addTodo = (message) =>{
    return {
        type : ADD_TODO,
        message,
        id : Math.random()
    }
};

const DELETE_TODO = "DELETE_TODO";

const deleteTodo = (id) =>{
    return {
        type : DELETE_TODO,
        id
    }
};

export {addTodo, deleteTodo};