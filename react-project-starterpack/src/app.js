import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import './styles/main.scss'
import Register from './auth/Register'
import Login from './auth/Login'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import TrailNew from './trails/TrailNew'
import CompleteForm from './trails/CompleteForm'

import Home from './common/Home'
import Navbar from './common/Navbar'
import Trails from './trails/Trails'
import TrailCard from './trails/TrailCard'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <main>
          <Switch>
            <Route path="/trails/:id" component={TrailCard}/>
            <Route path="/trails" component={Trails}/>
            <Route exact path="/" component={Home}/>
            <Route path="/register"component={Register}/>
            <Route path="/login"component={Login} />
            <Route path="/trails/new"component={TrailNew} />
            <Route path="/trails/:id/complete"component={CompleteForm}/>
          </Switch>
        </main>
      </BrowserRouter>
     
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)