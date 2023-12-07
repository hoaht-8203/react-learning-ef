import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const { todoList } = props
    
    return (
        <div>
            <ul>
                {
                    todoList.map((todo) => {
                        return (
                            <li key={todo.id}>{todo.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;