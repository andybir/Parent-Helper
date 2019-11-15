import React from 'react'
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
        const res = await axios.post(`http://localhost:3000/posts/${props.currentPost}/comments`, {title: nameValue, content: formValue})

        

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
    
        return (
            <div>
            <div className='show-post'>
                <h1>{post.title}</h1>
                <h2>{post.content}</h2>
                
                {comment && comment.map(comment => (
                    <div className='comment' key={comment.id}>
                    <Link to={`/posts/${post.id}/comments/${comment.id}`}
                        onClick={() => this.props.setPost(post)}>
                    <h3>{`On ${comment.created_at}`}</h3>
                    <h3>{`${comment.title} wrote:`}</h3>
                    <p>{comment.content}</p>
                    </Link>
                    <button onClick={this.handleDelete}>delete comment</button>
                    </div>    
                ))}
                <NewComment
                currentPost={post.id} 
                 />
            </div>
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
