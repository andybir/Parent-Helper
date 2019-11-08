import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: [],
      currentTopic: {},
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


  render () {
    return (
      <Router>
        <div className="App">
          <Link exact='true' to='/'>
            Parent Helper
          </Link>
          <Switch>
            <Route exact path='/' render={() => (
              <AllTopics
              getAllTopics={this.getAllTopics}
              topics={this.setState.topics}
              topicsLoaded={this.state.topicsLoaded}
              setTopic={this.setTopic} />
            )} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
