import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowTopic extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const idParams = this.props.match.params.id
        if (this.props.currentTopic.id !== idParams) {
            const topicData = await axios(`http://localhost:3000/topics/${idParams}`)
            this.props.setTopic(topicData.data.topic)
            console.log(topicData)

        }

    }

    render() {
        const topic = this.props.currentTopic
        console.log(this.props.topic)
        return (
            <div>
                <h1>{topic.subject}</h1>
            </div>
        )
    }
}

export default ShowTopic