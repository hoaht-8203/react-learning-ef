import React from 'react';
import ListPage from './pages/ListPage/index,';
import DetailPage from './pages/DetailPage';
import { Route, Routes } from 'react-router';
import NotFound from '../../components/NotFound';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    return (
        <div>
            <h2>Todo share UI</h2>
            <Routes>
                <Route path='/' element={<ListPage/>}/>
                <Route path='/:todoId' element={<DetailPage />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default TodoFeature;