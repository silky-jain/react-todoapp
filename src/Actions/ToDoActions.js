import axios from 'axios';

export const getToDos=()=>async dispatch=>{

    const res= await axios.get("http://localhost:9000/api/todos");
    dispatch({
        type : "GET_TODOS",
        payload: res.data
    });


}

export const createToDo=(todo,history)=>async dispatch=>{
    const res=await axios.post("http://localhost:9000/api/todos",todo);
    history.push("/dashboard");
   

}

export const deleteToDo=(id)=>async dispatch=>{
    await axios.delete(`http://localhost:9000/api/todos/${id}`);
  
    dispatch({
        type:"DELETE_TODO",
        payload:id
    });
}
export const updateToDo=(todo,history)=>async dispatch=>{
    const res= await axios.post(`http://localhost:9000/api/todos/${todo.id}`,todo);
    history.push("/dashboard");
}

export const getToDo=(id)=>async dispatch=>{
    const res=await axios.get(`http://localhost:9000/api/todos/${id}`);
  dispatch({
      type:"GET_TODO",
      payload:res.data
  });

}
