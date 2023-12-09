import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/ListPage/index,';
import DetailPage from './pages/DetailPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch()

    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact/>
                <Route path={`${match.path}/:todoId`} component={DetailPage}/>
            </Switch>
        </div>
    );
}

export default TodoFeature;