import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

function NewComment (props) {
    const [formValue, setFormValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    
    const alert = useAlert()

    const componentDidMount = async () => {
        
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        // alert("Comment submitted!")
        const res = await axios.post(`http://localhost:3000/posts/${props.currentPost}/comments`, {title: nameValue, content: formValue})

        

        // const comment = res.data.comment
        // window.location = "http://www.google.com"
        // this.props.setComment(comment)
        console.log(nameValue)
        console.log(formValue)
    }

    const useStyles = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
    }));
    
        return (
            <div className='comment-container'>
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
                        className='comment-submit-button'
                        type='submit' 
                        onClick={() => {alert.show('Comment submitted!')}}>
                        Submit
                    </Button>
                </form>
            </div>
        )
    
}

export default NewComment
