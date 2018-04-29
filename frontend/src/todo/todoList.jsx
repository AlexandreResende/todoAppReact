
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
        <td className={todo.done ? 'markedAsDone' : ''}>
          {todo.description}
        </td>
        <td>
          <IconButton style='success' icon='check' onClick={() => this.props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
          <IconButton style='warning' icon='undo' onClick={() => this.props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
          <IconButton style='danger' icon='trash-o' onClick={() => this.props.handleRemove(todo)} hide={!todo.done}></IconButton>
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
