import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  countDown() {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <button onClick={ this.countUp }>Count Up</button>
        <button onClick={ this.countDown }>Count Down</button>
        <p>{ this.state.count }</p>
      </div>
    );
  }
}

export default MyComponent;
