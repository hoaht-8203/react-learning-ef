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
    const [filterTodoList, setFilterTodoList] = useState('all')

    const handleTodoClick = (todo, index) => {
        const newTodoList = [...todoList]

        console.log(todo, index)

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        }

        setTodoList(newTodoList)
    }

    const handleShowAll = () => {
        setFilterTodoList('all')
    }

    const handleShowCompleted = () => {
        setFilterTodoList('completed')
    }

    const handleShowNew = () => {
        setFilterTodoList('new')
    }

    const renderFilterTodoList = todoList.filter((todo) => {
        if (filterTodoList === 'all') {
            return todo;
        } else {
            return filterTodoList === todo.status
        }
    })

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderFilterTodoList} onClinkTodo={handleTodoClick}/>
            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowCompleted}>Show Completed</button>
            <button onClick={handleShowNew}>Show New</button>
        </div>
    );
}

export default TodoFeature;