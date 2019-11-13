import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import AllTopics from './components/AllTopics'
import ShowTopic from './components/ShowTopic'
import ShowPost from './components/ShowPost'
import Nav from './components/Nav'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      currentTopic: {},
      posts: [],
      currentPost: {},
      topicLoaded: false
    }
  }

  getAllTopics = () => {
    axios('http://localhost:3000/topics').then(jsonRes => {
      this.setState({
        topics: jsonRes.data.topics,
        topicsLoaded: true
      })
    })
  }

  setTopic = (topic) => {
    this.setState({
      currentTopic: topic
    })
  }

  setPost = (post) => {
    console.log("checking for post: ", post)
    this.setState({
      currentPost: post
    })
  }

  render () {
    console.log(this.state.posts)

    return (
      <Router>
        <Nav />
        <div className="App">
          {/* <Link exact='true' to='/'>
            Parent Helper
          </Link> */}
          <Switch>
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
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
