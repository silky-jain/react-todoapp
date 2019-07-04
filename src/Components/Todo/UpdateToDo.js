import React  from 'react';
import { connect } from 'react-redux';
import {updateToDo} from '../../Actions/ToDoActions';
import { getToDo } from './../../Actions/ToDoActions';

class UpdateToDo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:0,
            title:"",
            description:""
        }
    }
    componentDidMount(){
        const {id}= this.props.match.params;
        this.props.getToDo(id);
    }
    componentWillReceiveProps(nextProps){
        const {
            id,
            title,
            description
        }= nextProps.todo;

        this.setState({
            id,
            title,
            description
        })

    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    onSubmit=(event)=>{
        event.preventDefault();
        var todo ={
            id:this.state.id,
            title:this.state.title,
            description:this.state.description

        }
        this.props.updateToDo(todo,this.props.history);
    }
    render(){
        return(
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Update ToDo form</h5>
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
const mapStateToProps=state=>({
    todo:state.todos.todo
})
    

export default connect(mapStateToProps,{updateToDo,getToDo})(UpdateToDo);
