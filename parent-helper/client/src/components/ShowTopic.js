import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowTopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: {}
        }
    }

    async componentDidMount() {
        const idParams = this.props.match.params.id
        // console.log(this.props)

        if (this.props.currentTopic.id !== idParams) {
            console.log(this.props.match.params.id)
            const topicData = await axios(`http://localhost:3000/topics/${this.props.data.match.params.id}`)
            this.setState(this.state.topic = topicData.data)
        }

    }

    // getAllPosts = () => {
    //     const idParams = this.props.match.params.id
    //     console.log(idParams)
    //     axios(`http://localhost:3000/topics/${idParams}`)
    //   }

    render() {

        // console.log(this.state.topic)
        // const topic = this.state.topic
        // const posts = this.state.topic.posts

        console.log(this.state.topic.posts)
        // console.log(post[0])
        return (
            <div>
                <h1>{}</h1>
                {this.state.topic.posts && this.state.topic.posts.map(post => <h2 key={post.id}>{post.title}</h2>)}
            </div>
        )
    }
}

export default ShowTopic