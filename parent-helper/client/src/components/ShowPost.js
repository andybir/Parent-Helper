import React, { Component } from 'react'
import axios from 'axios'

class ShowPost extends Component {
    constructor() {
        super()
        this.state = {
            topic: {}
        }
    }

    async componentDidMount() {
        // const idParams = this.props.match.params.id
        // console.log(this.props)
       
        // if (this.props.currentPost.id !== idParams) {
            console.log(this.props)
            const topicData = await axios(`http://localhost:3000/topics/${this.props.data.match.params.id}`)
            this.setState(this.state.topic = topicData.data)
        // }
    }

    render () {
        const topics = this.state.topic
        const posts = this.state.topic.posts
        console.log(posts)
        return (
            <div>
                <h1>{topics.title}</h1>
            </div>
        )
    }
}

export default ShowPost
