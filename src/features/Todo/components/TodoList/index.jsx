import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './styles.css'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onClinkTodo: PropTypes.func,
    displayType: PropTypes.string,
};

TodoList.defaultProps = {
    todoList: [],
    onClinkTodo: null,
    displayType: 'all',
}

function TodoList(props) {
    const { todoList, onClinkTodo } = props
    
    const handleTodoClick = (todo, index) => {
        onClinkTodo(todo, index)
    }

    return (
        <div>
            <ul>
                {todoList.map((todo, index) => {
                    return (
                        <li 
                            key={todo.id}
                            className={classnames({
                                'todo-item': true,
                                completed: todo.status === 'completed'
                            })}
                            onClick={() => handleTodoClick(todo, index)}
                        >
                            {todo.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoList;