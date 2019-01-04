import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class MyPosts extends React.Component {
  state = {posts: []}

  componentDidMount() {
    axios.get(`/api/users`)
      .then( res => this.setState({posts: res.data}))
  }

  render() {
    const {posts} = this.state

    return(
      <div>
        { posts.map(post =>
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.description}</p>
          </div>
        )}
      </div>
    )
  }
}

export default MyPosts

// STYLES 

