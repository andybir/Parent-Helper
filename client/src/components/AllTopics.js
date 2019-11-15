import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AllTopics extends Component {

    componentDidMount() {
        if(!this.props.topicsLoaded) {
            this.props.getAllTopics()
        }
    }
    


    render () {
        // console.log(this.props.topics)
        return( 
        <div className='all-topics'>
            <h1>Topics</h1>
            {this.props.topics.map(topic => (
            <div  key={topic.id}>
                <Link to={`/topics/${topic.id}`} 
                    onClick={() => this.props.setTopic(topic)}>
                    <div className='topic-click'>
                    <h2>{topic.subject}</h2>
                    <p>{topic.description}</p>
                    </div>
                    
                </Link>

            </div>
        ))}
        </div>
        )
    }
}

export default AllTopics
