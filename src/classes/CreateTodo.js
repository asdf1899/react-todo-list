import React from "react";

class CreateTodo extends React.Component {
    render () {
        return (
            <form style={{textAlign:"center"}} onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="Task" ref="task" autoFocus/>
                <button style={{width:"90%", display:"inline", outline:"none"}} className="btn btn-primary btn-block">Add</button>
                <button style={{width:"90%", display:"inline", outline:"none"}} onClick={this.props.removeAll} className="btn btn-negative btn-block btn-outlined">Clear All</button>
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