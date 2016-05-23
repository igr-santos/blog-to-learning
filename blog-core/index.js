import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import Posts from './modules/Posts'
import Post from './modules/Post'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Home} />

      <Route path="/posts" component={Posts}>
        <Route path="/posts/:slug" component={Post} />
      </Route>

      <Route path="/about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'))
