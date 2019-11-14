import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { useAlert } from 'react-alert'

// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel'
// import Input from '@material-ui/core/Input'
// import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { makeStyles } from '@material-ui/core/styles';




class NewComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            open: false,
            setOpen: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            setOpen: true

        })
      };
    
    handleClose = () => {
        this.setState({
            setOpen:false

        })
      };

    handleChange = (e) => {
        this.setState({
            postId: this.props.currentPost,
            content: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault()
        alert("Comment submitted!")
        const res = await axios.post(`http://localhost:3000/posts/${this.props.currentPost}/comments`, this.state)

        const comment = res.data.comment
        // window.location = "http://www.google.com"
        

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
                        placeholder="Add a comment..."
                        className='comment-box'
                        margin="normal"
                        variant="outlined"
                    />
                    <div className='comment-buttons'>
                        <Button type='submit' onSubmit={this.handleClickOpen}>
                            Submit
                        </Button>
                        {/* <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default NewComment
