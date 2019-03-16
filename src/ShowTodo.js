import React from "react";

class ShowTodo extends React.Component {
    render() {
        var tasks = this.props.showTask;
        console.log(tasks);
        return (
            <div>
                <ul>
                    {tasks.todos.map(item => (
                        <li key={item.id}>
                        {item.taskValue}
                        <button onClick={ asdf => (this.props.removeTask(item.id))}>Elimina</button>
                    </li>
                    ))}
                </ul>
            </div>
        );
      }
}
export default ShowTodo;
