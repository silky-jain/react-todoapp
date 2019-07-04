import React  from 'react';
import { connect } from 'react-redux';
import {createToDo} from '../../Actions/ToDoActions';

class AddToDo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            description:""
        }
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    onSubmit=(event)=>{
        event.preventDefault();
        var todo ={
            title:this.state.title,
            description:this.state.description

        }
        this.props.createToDo(todo,this.props.history);
    }
    render(){
        return(
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create ToDo form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " placeholder="To Do Title" name="title" value={this.state.title} onChange={this.onChange}/>
                            </div>
                            
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="To Do Description" name="description" value={this.state.description} onChange={this.onChange}></textarea>
                            </div>
                           
    
                            <input type="submit" className="btn btn-primary btn-block mt-4"  />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
        )
        }
        
}
export default connect(null,{createToDo})(AddToDo);
