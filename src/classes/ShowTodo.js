import React from "react";

class ShowTodo extends React.Component {
    render() {
        var tasks = this.props.showTask;
        console.log(tasks.todos);
        // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        // BUG QUANDO SI CERCA DI CANCELLARE LA LISTA IN ORDINE, NON FUNZIONA
        return (
            <div>
                <ul className="table-view">
                    {tasks.todos.map(item => (
                        <li className="table-view-cell" key={item.id}>
                        {item.taskValue}
                        <button className="btn btn-negative" value={item.id} onClick={ remove => (this.props.removeTask(item.id))}>Remove</button>
                    </li>
                    ))}
                </ul>
            </div>
        );
      }
}
export default ShowTodo;
