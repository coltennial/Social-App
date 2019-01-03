import React from 'react'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import MyPosts from './components/MyPosts'
import { Switch, Route } from 'react-router-dom'

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <ProtectedRoute exact path='/my_posts' component={MyPosts} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)

export default App;
