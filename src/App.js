import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './Components/Layout/Header';
import Dashboard from './Components/Dashboard';
import store from './store';
import AddToDo from './Components/Todo/AddToDo';
import UpdateToDo from './Components/Todo/UpdateToDo';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Router>
     <Header/>
     <Route exact path="/dashboard" component={Dashboard}></Route>
     <Route exact path="/addtodo" component={AddToDo}></Route>
     <Route exact path="/updatetodo/:id"component={UpdateToDo}></Route>
     </Router>
     </Provider>
    </div>
  );
}

export default App;
