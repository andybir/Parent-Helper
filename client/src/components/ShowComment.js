import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'

function ShowComment (props) {

    const handleDeleteComment = async () => {
        const idParams = props.match.params.id

        const deleted = await axios.delete(`/comments/${idParams}/`)
        // props.handleDeleteComment(props.currentComment)
        // props.history.push('/')
        console.log(deleted)
        alert.show('Comment deleted!')

    }

    const componentDidMount = async () => {
        const idParams = props.match.params.id

        const currentComment = await axios(`/comments/${idParams}/`)
        console.log(currentComment)

    }

    const alert = useAlert()

    return (
        
        <div className='delete-comment'>
            <p>Delete comment?</p>
                <Button 
                    variant='outlined'
                    className='comment-delete-button'
                    type='submit' 
                    onClick={() => {
                        handleDeleteComment() }}>
                    Yes
                </Button>
                <Link to='/topics'><Button variant='outlined'>back to topics</Button></Link>
        </div>
    )
    
}

export default ShowComment
