
import React  from 'react';
import ToDoItem from './Todo/ToDoItem';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { getToDos } from './../Actions/ToDoActions';
class Dashboard extends React.Component{
    componentDidMount(){
        this.props.getToDos();
    }
    render(){
        const {todos}=this.props;
        return(

    <div className="projects">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1 className="display-4 text-center">TO-DOS</h1>
                <br />
                
                <Link to="/addtodo" className="btn btn-lg btn-info">
                Create a TO-DO
                </Link>
                  
             
                <br />
                <hr />

                {todos.map(todo=>{
                    return(  <ToDoItem key={todo.id} todo={todo}/>)
                })}
             
           

            </div>
        </div>
    </div>
</div>

        )
    }
}
const mapStateToProps=(state=>{
    return{
        todos:state.todos.todos
    }
})

export default connect(mapStateToProps,{getToDos}) (Dashboard);

