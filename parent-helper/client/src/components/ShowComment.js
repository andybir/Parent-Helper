import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

function ShowComment (props) {
    const [formValue, setFormValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    
    const alert = useAlert()

    const componentDidMount = async () => {
        
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        // alert("Comment submitted!")
        const res = await axios.post(`http://localhost:3000/posts/${props.currentPost}/comments/${props.currentComment}`, {title: nameValue, content: formValue})

        

        // const comment = res.data.comment
        // window.location = "http://www.google.com"
        // this.props.setComment(comment)
        // console.log(res.data)
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
    console.log(props)
        return (
            
            <div className='show-comment'>
                {/* <h1>{comment.title}</h1>
                <h2>{comment.content}</h2> */}
                
                
                    <Button 
                        variant='outlined'
                        className='comment-submit-button'
                        type='submit' 
                        onClick={() => {alert.show('Comment submitted!')}}>
                        Submit
                    </Button>
            </div>
        )
    
}

export default ShowComment
