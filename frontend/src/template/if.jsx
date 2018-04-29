
import React, { Component } from 'react'

export default class If extends Component {
  conditional () {
    if (this.props.test) {
      return this.props.children;
    } else {
      return false;
    }
  }

  render() {
    const conditionalResult = this.conditional();

    return conditionalResult;
  }
}