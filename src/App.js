import React, { Component } from 'react';
import CreateTodo from "./CreateTodo";
import ShowTodo from "./ShowTodo";
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
    this.items.splice(id, 1);
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
        <h1>Simple ReactJS todo list</h1>
        <CreateTodo
          createTask={this.createTask.bind(this)}
        />
        <ShowTodo showTask={this.state} removeTask={this.removeTask.bind(this)}/>
      </div>
    );
  }
  createTask(taskValue){
    if (taskValue !== ""){
      var id = this.state.todos.length;
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
