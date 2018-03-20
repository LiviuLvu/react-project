import React, { Component } from 'react';

export class AppClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      clickCount: 0
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  increaseCount() {
    this.setState((prevState) => ({
      clickCount: prevState.clickCount + 1 
    }));
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button class="btn btn-success" onClick={this.increaseCount}>Count {this.state.clickCount}</button>
      </div>
    );
  }
}