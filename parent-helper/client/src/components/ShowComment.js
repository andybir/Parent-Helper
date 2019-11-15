import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

function ShowComment (props) {

    const handleDeleteComment = async () => {
        const idParams = props.match.params.id

        const deleted = await axios.delete(`http://localhost:3000/comments/${idParams}/`)
        // props.handleDeleteComment(props.currentComment)
        // props.history.push('/')
        console.log(deleted)
        alert.show('Comment deleted!')

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
    console.log(props.match.params.id)
        return (
            
            <div className='delete-comment'>
                <p>comment</p>
                    <Button 
                        variant='outlined'
                        className='comment-delete-button'
                        type='submit' 
                        onClick={() => {
                            handleDeleteComment() }}>
                        delete comment
                    </Button>
            </div>
        )
    
}

export default ShowComment
