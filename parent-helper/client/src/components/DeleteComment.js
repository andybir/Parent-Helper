import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

function DeleteComment (props) {

    const handleDelete = async () => {
        const idParams = this.props.data.match.params.id

        await axios.delete(`http://localhost3000/topics/${idParams}/comment/${idParams}`)
        this.props.handleDeleteTeacher(this.props.currentTeacher)
        this.props.history.push('/')
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
                        onClick={handleDelete}

                        onClick={() => {alert.show('Comment submitted!')}}>
                        delete comment
                    </Button>
            </div>
        )
    
}

export default DeleteComment
