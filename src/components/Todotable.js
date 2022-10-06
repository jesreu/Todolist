import React from 'react';

function TodoTable(props) {

    return (
    <div>
        <table>
        <tr>
        <th>Description</th>
        <th>Date</th>
        </tr>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td><button onClick={() => props.deleteRow(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>  
    );
}

export default TodoTable;