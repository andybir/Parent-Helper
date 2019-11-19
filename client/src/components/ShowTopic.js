import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatePost from './CreatePost'

class ShowTopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: {}
        }
    }

    async componentDidMount() {
        const idParams = this.props.match.params.id

        if (this.props.currentTopic.id !== idParams) {
            const topicId = this.props.data.match.params.id
            const topicData = await axios(`/topics/${topicId}`)
            this.setState(this.state.topic = topicData.data)
        }

    }

    render() {
        const topic = this.state.topic
        const posts = this.state.topic.posts
        const user = this.props.currentUser
        return (
            <div className='show-topic'>
                <div className='topic-nav'>
                    <h1>{topic.subject}</h1>
                </div>
                {posts && posts.map(post => (
                <div className='post-click' key={post.id}>
                    <Link to={`/topics/${topic.id}/posts/${post.id}`}
                        onClick={() => this.props.setPost(post)}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p> 
                    </Link>
                </div>
                ))}
                <CreatePost
                    currentTopic={topic.id} 
                    currentUser={user.id}
                />
            </div>
        )
    }
}

export default ShowTopic