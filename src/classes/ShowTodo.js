import React from "react";

class ShowTodo extends React.Component {
    render() {
        var tasks = this.props.showTask;
        console.log(this.props.listHeight);
        return (
            <div style={{overflow:"auto", height:this.props.listHeight+"px"}}>
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
