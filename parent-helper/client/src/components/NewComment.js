import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';




class NewComment extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({

        })
    }

    // const useStyles = makeStyles(theme => ({
    //     container: {
    //       display: 'flex',
    //       flexWrap: 'wrap',
    //     },
    //     textField: {
    //       marginLeft: theme.spacing(1),
    //       marginRight: theme.spacing(1),
    //       width: 200,
    //     },
    //   }));

    render() {
        return (
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows="4"
                    defaultValue="Add a comment..."
                    className='comment-box'
                    margin="normal"
                    variant="outlined"
                />
                <div className='comment-buttons'>
                    <Button>
                        Submit
                    </Button>
                    <Button>
                        Cancel
                    </Button>
                </div>
            </div>
        )
    }
}

export default NewComment
