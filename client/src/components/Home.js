import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = { posts: []}

  componentDidMount() {
    axios.get('api/posts')
      .then( res => this.setState({posts: res.data}))
  }

  sample = () => {
    const {posts} = this.state 
    if (posts.length) {
      const index = Math.floor(Math.random() * posts.length)
      return posts[index]
    } else {
      return null
    }
  }

  downVote = (id) => {
    const {posts} = this.state 
    this.setState({ posts: posts.filter( p => p.id !== id)})
  }

  upVote = (id) => {
    const {posts} = this.state 
    axios.put(`/api/posts/${id}`)
      .then( () => this.setState({posts: posts.filter( p => p.id !== id)}))
  } 

  render() {
    const post = this.sample()
    if (post) {
      return( 
        <div>
          <h1> MyPosts </h1>
          <div key={post.id}>
            <h6>{post.title}</h6>
            <p>{post.description}</p>
          </div>
          <div>
            <button onClick={() => this.upVote(post.id)}>Like</button>
            <button onClick={() => this.downVote(post.id)}>Dislike</button>
          </div>
          <Link to='/my_posts'>
            <button>My Posts</button>
          </Link>
        </div>
      )
    } else {
      return <p>No More Cats</p>
    }
  }
}

export default Home

