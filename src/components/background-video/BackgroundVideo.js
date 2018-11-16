import React from 'react';
import ReactPlayer from 'react-player';

import './style.scss';

export default class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    console.log(this.state.windowWidth);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    })
  }

  render(){
    const style = {
      width: this.state.windowWidth,
      height: this.state.windowHeight,
    }

    return(
      <ReactPlayer className="background-video absolute top" url={this.props.url} style={style}/>
    )
  }
}