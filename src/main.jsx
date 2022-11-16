import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import Landing from './Landing';
import Contact from './components/Contact';
import Videos from './components/Videos';
import './components/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename={import.meta.env.PUBLIC_URL}>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path='/videos' element={<Videos />} />
    </Routes>
  </HashRouter>
)
