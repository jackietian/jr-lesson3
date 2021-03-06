import React from 'react';

class Greeting extends React.Component {
  constructor() {
    // Unlike base class constructors, derived constructors have no initial this binding
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    super()
    this.handleGreeting = this.handleGreeting.bind(this);
  }

  handleGreeting () {
    alert('Welcome');
  }

  render() {
    return (<button onClick={this.handleGreeting}>Greeting</button>)
  }
}

export default Greeting;
