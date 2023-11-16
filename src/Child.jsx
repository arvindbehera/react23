/* eslint-disable */

import { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child</h1>
        <h3>{this.props.name}</h3>
        <h3>{this.props.counter}</h3>
        <button onClick={this.props.handleChange}>Add</button>
      </div>
    );
  }
}

export default Child;
