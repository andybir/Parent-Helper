import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AllTopics extends Component {

    componentDidMount() {
        if(!this.props.topicsLoaded) {
            this.props.getAllTopics()
        }
    }
    


    render () {
        console.log(this.props.topics)
        return this.props.topics.map(topic => (
            <div className='all-topics' key={topic.id}>
                <Link to={`/topics/${topic.id}`} 
                    onClick={() => this.props.setTopic(topic)}>
                    <div className='topic-click'>
                    <h2>{topic.subject}</h2>
                    <p>{topic.description}</p>
                    </div>
                </Link>

                {/* <hr /> */}
            </div>
        ))
    }
}

export default AllTopics
