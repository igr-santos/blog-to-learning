import React from 'react'

import Home from './Home'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
      <div className="container">
        <h1>Blog to Learning</h1>
        <ul role="nav" className="nav nav-pills">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {this.props.children || <Home />}
      </div>
    )
  }
})
