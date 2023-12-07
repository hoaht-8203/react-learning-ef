import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList'

TodoFeature.propTypes = {
    
};

const todoList = [
    {
        id: 1,
        title: 'Eat'
    },
    {
        id: 2,
        title: 'Sleep'
    },
    {
        id: 3,
        title: 'Code'
    }
]

function TodoFeature(props) {


    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;