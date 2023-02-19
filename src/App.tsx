import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo/NewTodo';
import { useApp } from './hooks';

const App: React.FC = () => {
  const {todos, todoAddHandler, todoDeleteHandler} = useApp();

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
