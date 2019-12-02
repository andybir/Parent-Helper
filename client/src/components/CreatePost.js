import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'

function CreatePost (props) {
    const [formValue, setFormValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    
    const alert = useAlert()

    const onSubmit = async (e) => {
        // e.preventDefault()
        const res = await axios.post(`http://localhost:3000/topics/${props.currentTopic}/posts`, {user_id: props.currentUser, title: nameValue, content: formValue})

        // const comment = res.data.comment
        // window.location = "http://www.google.com"
        // this.props.setComment(comment)
    }
    
    return (
        <div className='create-post'>
            <h1>Create Post</h1>
            <form onSubmit={onSubmit}>
                <TextField
                    value={nameValue}
                    name='name'
                    onChange={(e) => setNameValue(e.target.value)}
                    label='Subject'
                    placeholder='Enter text...'
                    className='name-box'
                    margin='normal'
                    variant='outlined'
                    inputProps={{
                        autoComplete: 'disabled', // disable autocomplete and autofill
                    }}
                />
                <TextField
                    value={formValue}
                    name='comment'
                    onChange={(e) => setFormValue(e.target.value)}
                    label="Post Description"
                    multiline
                    rows="4"
                    placeholder="Enter text..."
                    className='comment-box'
                    margin="normal"
                    variant="outlined"
                    inputProps={{
                        autoComplete: 'disabled', // disable autocomplete and autofill
                    }}
                />
                <Button 
                    variant='outlined'
                    className='comment-submit-button'
                    type='submit' 
                    onClick={() => {
                        alert.show('Post created!')
                    }}>
                    Create
                </Button>
                <Link to='/topics'>
                    <Button 
                    variant='outlined'
                    className='comment-submit-button'
                    type='submit'>
                    Back to Topics
                    </Button>
                </Link>
            </form>
        </div>
    )
}

export default CreatePost
