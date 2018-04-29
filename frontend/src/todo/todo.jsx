
import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000/api/todos';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      list: [],
    };
    //binding
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

    this.refresh();
  }

  handleAdd() {
    const description = this.state.description;

    axios
      .post(URL, { description })
      .then((res) => {
        this.refresh();
        console.log('Funcionou');
        console.log(res);
      });
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      description: e.target.value,
    });
  }

  refresh() {
    axios
      .get(`${URL}?sort=-createdAt`)
      .then((res) => {
        this.setState({
          ...this.state,
          description: '',
          list: res.data,
        })
      });
  }

  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then((res) => {
        this.refresh();
      });
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((res) => {
        this.refresh();
      });
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((res) => {
        this.refresh();
      });
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          description={this.state.description}>
        </TodoForm>
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        ></TodoList>
      </div>
    );
  }
}