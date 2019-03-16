import React, { Component } from 'react';
import CreateTodo from "./CreateTodo";
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
    this.save();
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
        <h1>Simple reactJS todo list</h1>
        <CreateTodo
          createTask={this.createTask.bind(this)}
        />
      </div>
    );
  }
  createTask(){

  }
}

export default App;
