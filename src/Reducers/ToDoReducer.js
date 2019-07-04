const initialState={
    todo:{},
    todos:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case "GET_TODOS":{
                return {
                    ...state,
                    todos:action.payload
                };
        }
        case "DELETE_TODO":{
            return{
                ...state,
                todos: state.todos.filter(todo=>todo.id!==action.payload)
            }
        }    
        case "GET_TODO":{
            return{
                ...state,
                todo:action.payload
            }
        }                                                                                                                                            
        default: return state;
    }

}