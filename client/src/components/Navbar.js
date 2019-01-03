import React, { Component } from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {

  rightNavItems = () => {
    const {auth: {user, handleLogout}, location } = this.props

    if (user) {
      return( 
        <>
          <div 
            name='logout'
            onClick={ () => handleLogout(this.props.history)}
          />
        </>
      )
    } else {
      return(
        <>
          <Link to='/login'>
            <div 
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <div 
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </>
      )
    }
  }

  render() {
    return (
      <>
        <Link to='/'>
          <div 
            name='home'
            id='home'
            active={this.props.location.pathname === '/'}
          />
        </Link>
        { this.rightNavItems() }
      </>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return(
      <AuthConsumer>
        { auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar)