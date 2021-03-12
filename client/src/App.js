import React,{ useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginUser } from './actions/user'
import Room from './components/room/room'
import Login from './components/login/login'
import SignUp from './components/SignUp/signUp'
import TaskForm from './components/room/tasks/taskForm'
import Task from './components/room/tasks/task'



const App = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(loginUser())
    
  // }, [dispatch])

  return (
    <Router>
      <Link to="/">
        <h1>Room</h1>
      </Link>
      <Switch>
        <Route path="/room" exact component={Room}/>
        <Route path="/" exact component={Login}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/taskForm" exact component={TaskForm}/>
        <Route path="/task" exact component={Task}/>
        
      </Switch>
      </Router>
    );
}

export default App;
