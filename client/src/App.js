import React,{ useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { loginUser } from './actions/user'
import Room from './components/room/room'
import {Header} from './global/Header'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginUser())
    
  }, [dispatch])

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Room}/>
        
      </Switch>
      </Router>
    );
}

export default App;
