import React, { Component } from 'react'
import axios from 'axios'
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
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            postId: this.props.currentPost,
            content: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()
        console.log("Trying to submit comment..")
        const res = await axios.post(`http://localhost:3000/posts/${this.props.currentPost}/comments`, this.state)

        const comment = res.data.comment
        

        // this.props.setComment(comment)
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
                <form onSubmit={this.onSubmit}>
                    {/* <textarea 
                        value={this.state.content}
                        onChange={this.handleChange}
                        className='comment-box'
                    /> */}
                    <TextField
                        value={this.state.content}
                        onChange={this.handleChange}
                        id="outlined-multiline-static"
                        label="Comment"
                        multiline
                        rows="4"
                        // defaultValue="Add a comment..."
                        className='comment-box'
                        margin="normal"
                        variant="outlined"
                    />
                    <div className='comment-buttons'>
                        <button>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewComment
