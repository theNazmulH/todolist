import React, { useState } from 'react';
import { GoCheckCircle, GoCircle, GoPencil, GoX } from "react-icons/go";
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div className="todo-left">
                {todo.isComplete ? <GoCheckCircle /> : <GoCircle />}
                <div className='todoSingle' key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>

            </div>

            <div className='icons todo-right'>

                <GoPencil
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
                <GoX
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;