import React from 'react'
import axios from 'axios'

class AllUsers extends React.Component {
  state = {users: []}

  componentDidMount() {
    axios.get(`/api/users`)
      .then( res => this.setState({users: res.data}))
  }

  render() {
    const {users} = this.state

    return(
      <div>
        { users.map(user =>
          <div key={user.id}>
            <p>{user.email}</p>
          </div>
        )}
      </div>
    )
  }
}

export default AllUsers
