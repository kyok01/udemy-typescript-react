import React, {useRef} from 'react';

type useNewTodoProps = {
    onAddTodo: (text: string)=>void;
}

export const useNewTodo = (props: useNewTodoProps) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
        textInputRef.current!.value = "";
    }
    return {textInputRef, todoSubmitHandler}
}