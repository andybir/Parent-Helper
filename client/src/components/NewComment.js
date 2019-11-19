import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'

function NewComment (props) {
    const [formValue, setFormValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    
    const alert = useAlert()

    const componentDidMount = async () => {
        
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        // alert("Comment submitted!")
        const res = await axios.post(`/posts/${props.currentPost}/comments`, {title: nameValue, content: formValue})

    }
    
    return (
        <div className='comment-container'>
            <h2>Add comment</h2>
            <form onSubmit={onSubmit}>
                <TextField
                    value={nameValue}
                    name='name'
                    onChange={(e) => setNameValue(e.target.value)}
                    label='Name'
                    placeholder='Name'
                    className='name-box'
                    margin='normal'
                    variant='outlined'
                />
                <TextField
                    value={formValue}
                    name='comment'
                    onChange={(e) => setFormValue(e.target.value)}
                    label="Comment"
                    multiline
                    rows="4"
                    placeholder="Add a comment..."
                    className='comment-box'
                    margin="normal"
                    variant="outlined"
                />
                <Button 
                    variant='outlined'
                    className='comment-submit-button'
                    type='submit' 
                    onClick={() => {alert.show('Comment submitted!')}}>
                    Submit
                </Button>
                <Link to='/topics'><Button variant='outlined'>back to topics</Button></Link>
            </form>
        </div>
    )
    
}

export default NewComment
