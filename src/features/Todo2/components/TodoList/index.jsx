import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onClickTodo: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onClickTodo: null
}

function TodoList(props) {
    const { todoList, onClickTodo } = props

    return (
        <ul>
            {todoList.map((todo, index) => {
                return <li key={todo.id} onClick={() => onClickTodo(todo, index)}>{todo.title}</li>
            })}
        </ul>
    );
}

export default TodoList;