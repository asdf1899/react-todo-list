import React, { Component } from 'react';
import CreateTodo from "./classes/CreateTodo";
import ShowTodo from "./classes/ShowTodo";
import './App.css';

const todos = {
  items: [],
  get(){
    return this.items;
  },
  add(obj){
    this.items.push(obj);
  },
  remove (id) {
    // cerca l'id del task tra l'array di array this.items
    for (var i=0; i < this.items.length;i++){
      // se lo trova, lo cancella
      if (this.items[i].id === id){
        this.items.splice(i, 1);
        return;
      }
    }
  },
  removeAll(){
    this.items = []
    return;
  }
};

class App extends Component {
  constructor (props) {
    super(props);
    this.listHeight = window.outerHeight - 300;
    // se il browser è compatibile con localstorage
    if (typeof(Storage) !== "undefined") {
      var localTodo = localStorage.getItem('1');
      if (localTodo !== null){
        todos.items = JSON.parse(localTodo);
      }
    }
    this.state = {
      todos: todos.items
    };
  }
  render() {
    return (
      <div>
        <CreateTodo
          // binding tra createTask e la funzione this.createTask
          createTask={this.createTask.bind(this)}
          // binding tra removeAll e la funzione this.removeAll
          removeAll={this.removeAll.bind(this)}
        />
        <ShowTodo showTask={this.state} removeTask={this.removeTask.bind(this)} listHeight={this.listHeight}/>
      </div>
    );
  }
  createTask(taskValue){
    if (taskValue !== ""){
      var id = this.state.todos.length + 1;
      todos.add({id, taskValue});
      this.setState({ todos: todos.get() });
      // se il browser è compatibile con il localstorage
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem('1', JSON.stringify(this.state.todos));
      }
      //console.log(this.state);
    }
  }
  removeTask(id){
    todos.remove(id);
    this.setState({ todos: todos.get() });
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('1', JSON.stringify(this.state.todos));
    }
    //console.log(this.state);
  }
  removeAll(){
    todos.removeAll();
    this.setState({ todos: todos.get() });
    if (typeof(Storage) !== "undefined") {
      localStorage.clear();
    }
  }
}

export default App;
