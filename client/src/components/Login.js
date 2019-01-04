import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'


class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password} = this.state 
    const {auth: {handleLogin}, history} = this.props
    debugger
    handleLogin({email, password}, history)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state

    return(
      <>
        <h1> Login </h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            label='Email'
            autoFocus
            required 
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <input 
            label='Password'
            required 
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return(
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
