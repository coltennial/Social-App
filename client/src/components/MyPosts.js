import React from 'react'
import axios from 'axios'

class MyPosts extends React.Component {
  state = {posts: []}

  componentDidMount() {
    axios.get(`/api/my_posts`)
      .then( res => this.setState({posts: res.data}))
  }

  render() {
    const {posts} = this.state

    return(
      <div>
        { posts.map(post =>
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        )}
      </div>
    )
  }
}

export default MyPosts