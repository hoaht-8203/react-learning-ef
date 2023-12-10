import React from 'react';
import './App.css';
import PostFeature from './features/Post';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import ColorBox from './components/ColorBox'
import NotFound from './components/NotFound'
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Header</h1>
      <p>
        <NavLink to='/todos' className={(nav) => (nav.isActive ? 'active-menu' : '')}>Todos</NavLink> -  
        <NavLink to='/albums' className={(nav) => (nav.isActive ? 'active-menu' : '')}>albums</NavLink> - 
        <NavLink to='/posts' className={(nav) => (nav.isActive ? 'active-menu' : '')}>posts</NavLink>
      </p>

      <Routes>
        <Route path='/' element={<Navigate to='/todos'/>}/>
        <Route path='/todos/*' element={<TodoFeature/>}/>
        <Route path='/albums' element={<AlbumFeature/>}/>
        <Route path='/posts' element={<PostFeature/>}/>
        <Route path='/colorbox' element={<ColorBox/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
