
import React, { Component } from 'react'

import IconButton from '../template/iconButton'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td>
          {todo.description}
        </td>
        <td>
          <IconButton style='danger' icon='trash-o' onClick={() => this.props.handleRemove(todo)}>
          </IconButton>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Açoes</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}
