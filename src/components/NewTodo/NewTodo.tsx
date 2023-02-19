import React from 'react';
import { useNewTodo } from './hooks';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props =>{
    const {textInputRef, todoSubmitHandler} = useNewTodo({onAddTodo: props.onAddTodo})
    return <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">todo内容</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <div>
            <button type="submit">TODO追加</button>
        </div>
    </form>
}

export default NewTodo;