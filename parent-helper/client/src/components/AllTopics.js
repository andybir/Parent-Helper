import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

class AllTopics extends Component {

    componentDidMount() {
        if(!this.props.topicsLoaded) {
            this.props.getAllTopics()
        }
    }

    render () {
        return this.props.topics.map(topic => (
            <div key={topic.id}>
                <Link to={`/topics/${topic.id}`} onClick={() => this.props.setTopic(topic)}>Browse Topics</Link>
                <hr />
            </div>
        ))
    }
}

export default AllTopics
