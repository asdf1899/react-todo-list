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
  }
};

class App extends Component {
  constructor (props) {
      super(props);
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
        />
        <ShowTodo showTask={this.state} removeTask={this.removeTask.bind(this)}/>
      </div>
    );
  }
  createTask(taskValue){
    if (taskValue !== ""){
      var id = this.state.todos.length + 1;
      todos.add({id, taskValue});
      this.setState({ todos: todos.get() });
      //console.log(this.state);
    }
  }
  removeTask(id){
    todos.remove(id);
    this.setState({ todos: todos.get() });
    //console.log(this.state);
  }
}

export default App;
