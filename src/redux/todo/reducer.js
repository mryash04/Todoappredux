const initialState = {
    data : [],
};

const todoReducer = (state = initialState, action) =>{
    switch(action.type){
        case "ADD_TODO" : return {
            ...state,
            data : [
                ...state.data,
                {
                    message : action.message,
                    id : action.id
                }
            ]
        }
        case "DELETE_TODO" :
            const newTodo = state.data.filter((todo) => todo.id !== action.id);
            console.log(newTodo);
        return {
            data : newTodo
        }
        default : return state
    }
}

export default todoReducer;