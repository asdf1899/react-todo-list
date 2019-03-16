import React from "react";

class ShowTodo extends React.Component {
    render() {
        var tasks = this.props.showTask;
        console.log(tasks.todos);
        // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        // BUG QUANDO SI CERCA DI CANCELLARE LA LISTA IN ORDINE, NON FUNZIONA
        return (
            <div>
                <ul>
                    {tasks.todos.map(item => (
                        <li key={item.id}>
                        {item.taskValue}
                        <button value={item.id} onClick={ remove => (this.props.removeTask(item.id))}>Elimina</button>
                    </li>
                    ))}
                </ul>
            </div>
        );
      }
}
export default ShowTodo;
