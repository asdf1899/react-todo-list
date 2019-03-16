import React from "react";

class CreateTodo extends React.Component {
    render () {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="Task" ref="task" autoFocus/>
                <button>Add</button>
            </form>
        );
    }
    onSubmit (e) {
        // createTask è il prop chiamato in <CreateTodo createTask={this.createTask.bind(this)} />
        this.props.createTask(this.refs.task.value);
        // resetto l'input
        this.refs.task.value = "";
        e.preventDefault();
    }
}
export default CreateTodo;
