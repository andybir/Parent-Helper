import React, { Component } from 'react'
import axios from 'axios'
import NewComment from './NewComment'

class ShowPost extends Component {
    constructor() {
        super()
        this.state = {
            topic: {}
        }
    }

    async componentDidMount() {
        const idParams = this.props.match.params.id
        // console.log(this.props)
       
        if (this.props.currentTopic.id !== idParams) {
            // console.log(this.props)
            const topicData = await axios(`http://localhost:3000/topics/${this.props.data.match.params.id}`)
            this.setState(this.state.topic = topicData.data)
            // console.log(this.props.data.match.params.id)
        }
    }

    render () {
        const post = this.props.currentPost
        const comment = this.props.currentPost.comments
        // const posts = this.state.topic.posts
        console.log(comment)
        return (
            <div className='show-post'>
                <h1>{post.title}</h1>
                <h2>{post.content}</h2>
                {comment.map(comment => (
                    <div key={comment.id}>
                    <h3>{comment.title}</h3>
                    <p>{comment.content}</p>
                    </div>    
                ))}
                <NewComment
                currentPost={post.id} 
                 />
            </div>
        )
    }
}

export default ShowPost
