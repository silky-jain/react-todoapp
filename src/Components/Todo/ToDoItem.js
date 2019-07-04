import  React  from 'react';
import { connect } from 'react-redux';
import { deleteToDo } from './../../Actions/ToDoActions';

import { Link } from 'react-router-dom';
class ToDoItem extends React.Component{
    render(){
        const {todo}= this.props;
        return(
            <div className="container">
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto">{todo.id}</span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                           
                            <Link to={`/updatetodo/${todo.id}`}>
                                <li className="list-group-item update">
                                    <i className="fa fa-edit pr-1">Update Project Info</i>
                                </li>
                           </Link>
                           
                                <li className="list-group-item delete" onClick={()=>this.props.deleteToDo(todo.id)}>
                                    <i className="fa fa-minus-circle pr-1">Delete Project</i>
                                </li>
                          
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default connect(null,{deleteToDo})(ToDoItem);