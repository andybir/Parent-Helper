import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

function DeleteComment (props) {

    const handleDeleteComment = async () => {
        const idParams = props.data.match.params.id
        console.log(idParams)

        await axios.delete(`http://localhost:3000/posts/${idParams}/comment/`)
        props.handleDeleteComment(props.currentComment)
        props.history.push('/')
    }

    const alert = useAlert()


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
    console.log(props.data)
        return (
            
            <div className='delete-comment'>
                    <Button 
                        variant='outlined'
                        className='comment-delete-button'
                        type='submit' 
                        onClick={handleDeleteComment}
                        onClick={() => {alert.show('Comment deleted!')}}>
                        delete comment
                    </Button>
            </div>
        )
    
}

export default DeleteComment
