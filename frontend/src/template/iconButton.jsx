
import React, { Component } from 'react'

export default class IconButton extends Component {
  render() {
    if (this.props.hide) {
      return null;
    }
    return (
      <button className={'btn btn-' + this.props.style} onClick={this.props.onClick}>
        <i className={'fa fa-' + this.props.icon}></i>
      </button>
    );
  }
}