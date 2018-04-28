
import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
      </div>
    );
  }
}