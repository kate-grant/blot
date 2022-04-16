import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {

  const taskList = props.tasks?.map(task => (
    <Todo 
      id={task.id} 
      name={task.name}
      completed={task.completed}
      key={task.id}
      />));

  return (
    <div className="todoapp stack-large">
      <h1>Blot</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      
    </div>
  );
}

export default App;
