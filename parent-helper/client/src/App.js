import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import AllTopics from './components/AllTopics'
import ShowTopic from './components/ShowTopic'
import ShowPost from './components/ShowPost'
import CreatePost from './components/CreatePost'
import ShowComment from './components/ShowComment'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      currentTopic: {},
      posts: [],
      currentPost: {},
      topicLoaded: false,
      currentComment: {},
      users: [],
      currentUser: {},
      user: {}

    }
  }

async componentDidMount () {
  const userData = await axios(`http://localhost:3000/users/1`)
  this.setState(this.state.user = userData.data)
}
  getAllTopics = () => {
    axios('http://localhost:3000/topics').then(jsonRes => {
      this.setState({
        topics: jsonRes.data.topics,
        topicsLoaded: true
      })
    })
  }
  getUser = () => {
    axios('http://localhost:3000/users/1').then(jsonRes => {
      this.setState({
        users: jsonRes.data.users,
        usersLoaded: true
      })
    })
  }


  setTopic = (topic) => {
    this.setState({
      currentTopic: topic
    })
  }

  setPost = (post) => {
    this.setState({
      currentPost: post
    })
  }

  setComment = (comment) => {
    this.setState({
      currentComment: comment
    })
  }
  setUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  

  render () {
    // console.log(this.state.user)
    
    return (

      <Router>

        <Nav />
        <div className="App">
          {/* <Link exact='true' to='/'>
            Parent Helper
          </Link> */}
          <Switch>
          <main>
            <Route exact path='/' component={Home} />
            <Route exact path='/topics' render={() => (
              <AllTopics
                getAllTopics={this.getAllTopics}
                topics={this.state.topics}
                topicsLoaded={this.state.topicsLoaded}
                setTopic={this.setTopic} />
            )} />
            <Route exact path = '/topics/:id' render={(props) => {
            return <ShowTopic
              data={props}
              getAllTopics={this.getAllTopics}
              topics={this.state.topics}
              currentTopic={this.state.currentTopic}
              setTopic={this.setTopic}
              setPost={this.setPost}
              posts={this.state.posts}
              currentUser={this.state.user}
              {...props} />
            }}/>
            <Route exact path='/topics/:id/posts/:id' render={(props) => {
              return <ShowPost
              data={props}
              getAllTopics={this.getAllTopics}
              topics={this.state.topics}
              currentTopic={this.state.currentTopic}
              currentPost={this.state.currentPost}
              setTopic={this.setTopic}
              setPost={this.setPost}
              posts={this.state.posts}
              currentComment={this.currentComment}
              {...props}
                // data={props}
                // getAllTopics={this.getAllTopics}
                // topics={this.state.topics}
                // currentTopic={this.state.currentTopic}
                // setTopic={this.setTopic}
                // setPost={this.setPost}
                // posts={this.state.posts}
                // currentPost={currentPost}
                // {...props} 
                />
            }} />
            <Route exact path='/topics/:id/create-post'
              component={CreatePost}
              currentTopic={this.state.currentTopic}
              currentUser={this.state.currentUser}
            />
            <Route exact path='/posts/:id/comments/:id'
              data={this.props}
              component={ShowComment}
              currentPost={this.currentPost}
              currentComment={this.currentComment}
            />
            </main>
          </Switch>
        </div>
            <Footer />
      </Router>

    )
  }
}

export default App;
