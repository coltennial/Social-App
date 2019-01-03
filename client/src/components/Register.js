import React from 'react'
import { AuthConsumer } from '../providers/AuthProvider'

class Register extends React.Component { 
  state = { email: '', password: '', passwordConfirmation: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const {email, password, passwordConfirmation } = this.state
    const {auth: { handleRegister }, history } = this.props

    if (password === passwordConfirmation)
      handleRegister({email, password, passwordConfirmation}, history)
      else 
        alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  render() {
    const {email, password, passwordConfirmation} = this.state

    return(
      <>
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <input  
            label='email'
            required 
            autoFocus 
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
          <input  
            label='Password Confirmation'
            required 
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return(
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
