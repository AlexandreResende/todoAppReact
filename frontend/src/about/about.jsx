
import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader name='About' small='Nós'></PageHeader>
        <h2>Nossa História</h2>
        <p>Lorem ispum dolor sit amet...</p>
        <h2>Missão e Visão</h2>
        <p>Lorem ispum dolor sit amet...</p>
        <h2>Imprensa</h2>
        <p>Lorem ispum dolor sit amet...</p>
      </div>
    );
  }
}