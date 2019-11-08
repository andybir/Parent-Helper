import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowTopic extends Component {
    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        const idParams = this.props.match.params.id
        console.log(this.props)

        if (this.props.currentTopic.id !== idParams) {
            const topicData = await axios(`http://localhost:3000/topics/${idParams}`)
            console.log(topicData)
            this.props.setTopic(topicData.data)

        }

    }

    // getAllPosts = () => {
    //     const idParams = this.props.match.params.id
    //     console.log(idParams)
    //     axios(`http://localhost:3000/topics/${idParams}`)
    //   }

    render() {
        const topic = this.props.currentTopic
        console.log(topic)
        return (
            <div>
                <h1>{topic.subject}</h1>
                {/* map through posts here */}
                <h2>{topic.description}</h2>
            </div>
        )
    }
}

export default ShowTopic