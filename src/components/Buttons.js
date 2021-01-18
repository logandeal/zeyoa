import React, { Component } from 'react'

class Buttons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      start: false,
      browse: false,
      content: {}
    }
  }

  clickStart = () => {
    this.setState({
      start: true,
      browse: false
    })
  }

  clickBrowse = () => {
    this.setState({
      start: false,
      browse: true
    })
  }

  render(){
    this.state.content = 
      <div className="contentPlaceholder">
        <p>Click a button above!</p>
      </div>
    
    if (this.state.start) {
      this.state.content = 
      <div className="aForm">
        <p>Enter your campaign details to get started:</p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSecRS01dqPTjal6mFPXERSTOZ49Sm9s-JiUoBbDDCr0r77n7g/viewform?embedded=true" width="640" height="663" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    }

    if (this.state.browse) {
      this.state.content = 
      <div className="aForm">
        <p>Browse a campaign:</p>
        <p>Example campaign 1</p>
        <img src="/BackerPicture.png" alt="Image" width="1000" height="434"/>
      </div>
    }

    return(
      <div className="main-content">
        Are you...
        <div className="inner">
          <button onClick={this.clickStart}>Starting a campaign</button><button onClick={this.clickBrowse}>Looking for a campaign</button>
        </div>
        <div className="expanded-content">
          {this.state.content}
        </div>
      </div>
    )
  }
}

export default Buttons;