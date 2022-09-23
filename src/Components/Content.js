import React, { Component } from 'react'

export class Content extends Component {
    constructor(){
        super()
    }
    showMessenge(e) {
        e.target.style.color = "red";
    }
  render() {
    const {title, detail, author, time} = this.props;
    return (
      <>
      <h3>Author: {author}</h3>
      {
        time
      }
      <div dangerouslySetInnerHTML={{__html:detail}}></div>
      <button type='button' onClick={this.showMessenge}>Click Me</button>
      </>
    )
  }
}

export default Content