import React from 'react';

class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      isRunning: false,
    };
  }

  handleStart = () => {
    console.log('clicked start');
    // reset time to 0
    this.setState({
      time: 0,
    });

    // increase time by 1 every single millisecond
    this.timer = setInterval(() => {
      // increase time by one
      this.setState({
        time: this.state.time + 1,
        isRunning: true,
      });
    }, 1)
  }

  handleStop = () => {
    // stop time change
    clearInterval(this.timer);

    this.setState({
      isRunning: false,
    })
  }

  render() {
    return (
      <div>
        {this.state.time}
        <button
          onClick={this.handleStart}
          disabled={this.state.isRunning}>start</button>
        <button onClick={this.handleStop}>stop</button>
      </div>
    )
  }
}

export default StopWatch;