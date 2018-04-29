
import React, { Component } from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 9'>
          <input 
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            value={this.props.description}
            onChange={this.props.handleChange}/>
        </Grid>
        <Grid cols='12 3 3'>
          <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
          <IconButton style='info' icon='search' onClick={this.props.handleSearch}></IconButton>
        </Grid>
      </div>
    );
  }
}
