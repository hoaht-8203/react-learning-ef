import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../components/TodoList';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

const initTodoList = [
    {
        id: 1,
        title: 'Eat',
        status: 'completed',
    },
    {
        id: 2,
        title: 'Sleep',
        status: 'new',
    },
    {
        id: 3,
        title: 'Code',
        status: 'new',
    },
];

function ListPage(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterTodoList, setFilterTodoList] = useState(() => {
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterTodoList(params.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, index) => {
        const newTodoList = [...todoList];

        console.log(todo, index);

        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };

        setTodoList(newTodoList);
    };

    const handleShowAll = () => {
        const queryParams = { status: 'all' };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowCompleted = () => {
        const queryParams = { status: 'completed' };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };

    const handleShowNew = () => {
        const queryParams = { status: 'new' };
        navigate({
            search: queryString.stringify(queryParams),
        });
    };

    const renderFilterTodoList = useMemo(() => {
        return todoList.filter((todo) => {
            if (filterTodoList === 'all') {
                return todo;
            } else {
                return filterTodoList === todo.status;
            }
        });
    }, [todoList, filterTodoList]);

    const handleTodoFormSubmit = (values) => {
        const lastTodo = todoList[todoList.length - 1];
        const newTodo = {
            id: lastTodo.id + 1,
            title: values.title,
            status: 'new',
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todoList={renderFilterTodoList} onClinkTodo={handleTodoClick} />
            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowCompleted}>Show Completed</button>
            <button onClick={handleShowNew}>Show New</button>
        </div>
    );
}

export default ListPage;
