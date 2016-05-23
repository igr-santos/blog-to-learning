import React from 'react'

import App from './App'


export default React.createClass({
  render() {
    return (
      <div>
        <h2>{this.props.params.slug}</h2>
      </div>
    )
  }
})
