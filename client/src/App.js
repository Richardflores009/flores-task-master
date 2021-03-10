import React,{ Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Join from './components/Join'
import Chat from './components/Chat'
import {Header} from './global/Header'


class App extends Component {
  

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Join}/>
          <Route path="/chat" exact component={Chat}/>
        </Switch>
        </Router>
    );
  }
}

export default App;
