import React from 'react';
import './App.css';
import PostFeature from './features/Post';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import { Route } from 'react-router-dom';
import { Link, NavLink, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div>
      <h1>Header</h1>
      <p><Link to='/todos'>Todos</Link> -  <Link to='/albums'>albums</Link> - <Link to='/posts'>posts</Link></p>
      <p>
        <NavLink to='/todos' activeClassName='active-menu'>Todos</NavLink> -  
        <NavLink to='/albums' activeClassName='active-menu'>albums</NavLink> - 
        <NavLink to='/posts' activeClassName='active-menu'>posts</NavLink>
      </p>

      <Switch>
        <Redirect from='/home' to='/albums' exact />

        <Route path='/albums' component={AlbumFeature} exact/>
        <Route path='/todos' component={TodoFeature} exact/>
        <Route path='/posts' component={PostFeature} exact/>
      </Switch>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
