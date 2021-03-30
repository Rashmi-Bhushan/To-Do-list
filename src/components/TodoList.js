import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, status, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list"></ul>
      {filteredTodos.map((todo, index) => {
        // if(status=="uncompleted" && todo.completed===false)
        // {
        //     console.log('inside if');
        //     console.log(status);
        //    console.log('--->',todo);
        // }
        return (
          <Todo
            key={index}
            text={todo.text}
            todo={todo}
            // filteredTodos={filteredTodos}
            todos={todos}
            setTodos={setTodos}
            status={status}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
