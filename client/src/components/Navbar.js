import React, { Component } from 'react'
import { AuthConsumer } from '../providers/AuthProvider'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

class Navbar extends Component {

  rightNavItems = () => {
    const {auth: {user, handleLogout}, location } = this.props

    if (user) {
      return( 
        <div>
          <div onClick={ () => handleLogout(this.props.history)}>
          Logout
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <Link to='/login'>
            <p active={location.pathname === '/login'}>Login</p>
          </Link>
          <Link to='/register'>
            <p active={location.pathname === '/register'}>Register</p>
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <Nav>
        <Link to='/'>
          <p active={this.props.location.pathname === '/'}>Home</p>
        </Link>
        { this.rightNavItems() }
      </Nav>
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

// STYLES 

const Nav = styled.p`
  display: flex
  justify-content: space-evenly
  align-items: center 
  height: 100px
  background-color: #f7f
`