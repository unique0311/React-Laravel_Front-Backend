require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Master from './components/Master';
import CreateItem from './components/CreateItem';

render(
  <Router>
    <Routes>
        <Route path='/' element={<Master />} />
        <Route path ='/add-item' element = {<CreateItem />} />
    </Routes>
  </Router>,
      document.getElementById('example')
);