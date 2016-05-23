import React from 'react'

import App from './App'
import NavLink from './NavLink'


export default React.createClass({
  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          <li><NavLink to='/posts/lorem-ipsum-dolor'>Lorem ipsum dolor</NavLink></li>
          <li><NavLink to='/posts/calou-dolor-loi'>Calou dolor loi</NavLink></li>
        </ul>
        {/* will render `Repo.js` when at /post/:slug */}
        {this.props.children}
      </div>
    )
  }
})
