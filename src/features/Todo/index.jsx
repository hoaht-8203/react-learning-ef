import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList'

TodoFeature.propTypes = {
    
};

const initTodoList = [
    {
        id: 1,
        title: 'Eat',
        status: 'completed'
    },
    {
        id: 2,
        title: 'Sleep',
        status: 'new'
    },
    {
        id: 3,
        title: 'Code',
        status: 'new'
    }
]

function TodoFeature(props) {
    const [todoList, setTodoList] = useState(initTodoList)

    const handleTodoclick = (todo, index) => {
        const newTodoList = [...todoList]

        console.log(todo, index)

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        }

        setTodoList(newTodoList)
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onClinkTodo={handleTodoclick}/>
        </div>
    );
}

export default TodoFeature;