'use client' // use client directive is required for React components that use state or effects
import React, { Component } from 'react'

export default class CounterClassComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Counter Class Component</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
      </div>
    )
  }
}
