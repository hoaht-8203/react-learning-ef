import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature2.propTypes = {
    
};

const initTodoList = [
    {id: 1, title: 'I love Easy Frontend! 😍 '},
    {id: 2, title: 'We love Easy Frontend! 😘 '},
    {id: 3, title: 'They love Easy Frontend! 🥰 '},
]

function TodoFeature2(props) {
    const [ todoList, setTodoList ] = useState(initTodoList)

    const handleOnClickTodo = (todo, index) => {
        let newTodoList = todoList.filter((todo, idx) => {
            return idx !== index
        })
        setTodoList(newTodoList)
    }

    return (
        <div>
            <TodoList todoList={todoList} onClickTodo={handleOnClickTodo}/>
        </div>
    );
}

export default TodoFeature2;