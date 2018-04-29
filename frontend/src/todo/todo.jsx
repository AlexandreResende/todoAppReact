
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
    this.handleSearch = this.handleSearch.bind(this);

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

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : '';
    axios
      .get(`${URL}?sort=-createdAt${search}`)
      .then((res) => {
        this.setState({
          ...this.state,
          description,
          list: res.data,
        })
      });
  }

  handleRemove(todo) {
    axios
      .delete(`${URL}/${todo._id}`)
      .then((res) => {
        this.refresh(this.state.description);
      });
  }

  handleMarkAsDone(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((res) => {
        this.refresh(this.state.description);
      });
  }

  handleMarkAsPending(todo) {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((res) => {
        this.refresh(this.state.description);
      });
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
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