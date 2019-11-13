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

        }
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
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
        //   className={classes.textField}
          margin="normal"
          variant="outlined"
        />
            </div>
        )
    }
}

export default NewComment
