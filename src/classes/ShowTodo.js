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
                            <p style={{width:"90%", overflow:"auto", maxheight:"300px", lineheight:"100px", overflowwrap: "break-word"}}>{item.taskValue}</p>
                            <button className="btn btn-negative" value={item.id} onClick={ remove => (this.props.removeTask(item.id))}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
      }
}
export default ShowTodo;
