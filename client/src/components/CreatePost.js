import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

function CreatePost (props) {
    const [formValue, setFormValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    
    const alert = useAlert()

    const onSubmit = async (e) => {
        e.preventDefault()
        // alert("Comment submitted!")
        const res = await axios.post(`http://localhost:3000/topics/${props.currentTopic}/posts`, {user_id: props.currentUser, title: nameValue, content: formValue})

        

        // const comment = res.data.comment
        // window.location = "http://www.google.com"
        // this.props.setComment(comment)
        console.log(res.data)
    }

    const useStyles = makeStyles(theme => ({
        container: {
        //   display: 'flex',
        //   flexWrap: 'wrap',
        },
        textField: {
        //   marginLeft: theme.spacing(1),
        //   marginRight: theme.spacing(1),
        //   width: 200,
        },
    }));
    // console.log(props.currentUser)
    // console.log(props)
    
        return (
            <div className='create-post'>

                <h1>Create Post</h1>
                {/* <h2>{props.currentTopic.subject}</h2> */}
                <form onSubmit={onSubmit}>
                    <TextField
                        value={nameValue}
                        name='name'
                        onChange={(e) => setNameValue(e.target.value)}
                        label='Post Title'
                        placeholder='Enter text...'
                        className='name-box'
                        margin='normal'
                        variant='outlined'
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
                    />
                    <Button 
                        variant='outlined'
                        className='comment-submit-button'
                        type='submit' 
                        onClick={() => {alert.show('Post created!')}}>
                        Create
                    </Button>
                </form>
            </div>
        )
    
}

export default CreatePost
