import React from "react";

class ShowTodo extends React.Component {
    render() {
        var tasks = this.props.showTask;
        console.log(this.props.listHeight);
        return (
            <div>
                <div>
                    <nav className="bar bar-tab">
                        <a className="tab-item active" href={"#"} onClick={this.props.removeAll} style={{color:"red"}}>
                            Clear all
                        </a>
                        <a className="tab-item" href={"https://github.com/asdf1899/react-todo-list"}>
                            Star
                        </a>
                        <a className="tab-item" href={"https://github.com/asdf1899/react-todo-list/fork"}>
                            Fork the project
                        </a>
                    </nav>
                </div>
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
            </div>
        );
      }
}
export default ShowTodo;
