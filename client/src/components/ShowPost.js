import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewComment from './NewComment'
import DeleteComment from './DeleteComment'

class ShowPost extends Component {
    constructor() {
        super()
        this.state = {
            topic: {},
            comments: [],
            currentComment: {}
        }
    }

    setComment = (comment) => {
        this.setState({
          currentComment: comment
        })
      }

    async componentDidMount() {
        const idParams = this.props.data.match.params.id
        // console.log(this.props)
       
        if (this.props.currentTopic.id !== idParams) {
            // console.log(this.props)
            const topicData = await axios(`http://localhost:3000/topics/${idParams}`)
            this.setState(this.state.topic = topicData.data)
            // console.log(this.props.data.match.params.id)
            
        }
    }
    
    

    render () {
        const post = this.props.currentPost
        const comment = this.props.currentPost.comments
        // const posts = this.state.topic.posts
        console.log(this.props)
        return (
            <div className='show-post'>
                <h1>{post.title}</h1>
                <h2>{post.content}</h2>
                
                {comment && comment.map(comment => (
                    <div className='comment' key={comment.id}>
                    <Link to={`/posts/${post.id}/comments/${comment.id}`}
                        onClick={() => this.setComment(comment)}>
                    <h3>{`On ${comment.created_at}`}</h3>
                    <h3>{`${comment.title} wrote:`}</h3>
                    <p>{comment.content}</p>
                    {/* <DeleteComment 
                        data={this.props}
                        currentComment={this.currentComment}
                    /> */}
                    </Link>
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
