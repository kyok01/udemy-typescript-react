import {useState} from 'react';
import { Todo } from '../todo.model';

export const useApp = ()=> {
    const [todos, setTodos] = useState<Todo[]>([]);
    const todoAddHandler = (text: string) => {
      setTodos(prev => [...prev,{id: Math.random().toString(), text: text}])
    }
  
    const todoDeleteHandler = (todoId: string) => {
      setTodos(prev=> prev.filter(ele=> ele.id !== todoId))
    }

    return {
        todos, todoAddHandler, todoDeleteHandler
    }
}