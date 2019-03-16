import React from "react";

class ShowTodo extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>
                        {item.product} {item.num}
                        <button onClick={this.removeItem(item.id)}>Elimina</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
      }
}
export default ShowTodo;
