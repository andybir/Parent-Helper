import React, { Component } from 'react'
import axios from 'axios'

class ShowPost extends Component {
    constructor() {
        super()
        this.state = {
            post: {}
        }
    }

    async componentDidMount() {
        const idParams = this.props.match.params.id
        console.log(idParams)
       

        const postData = await axios(`http://localhost:3000/posts/${this.props.data.match.params.id}`)
    }

    render () {
        return (
            <div>
                
            </div>
        )
    }
}

export default ShowPost
