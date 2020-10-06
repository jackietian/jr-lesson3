import React from 'react';

class ActionLink extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e);
    // prevent default DOM actions, e.g action="someURl" in form element
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <button type="submit" onClick={this.handleClick}>click</button>
      </form>
    )
  }
}

export default ActionLink;