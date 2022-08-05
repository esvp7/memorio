import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import "./App.css";

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
  <div>
  <Router>
    <Container maxWidth="xl" className="headerContainer">
    <div className='light x1'></div>
  <div className='light x2'></div>
  <div className='light x3'></div>
  <div className='light x4'></div>
  <div className='light x5'></div>
  <div className='light x6'></div>
  <div className='light x7'></div>
  <div className='light x8'></div>
  <div className='light x9'></div>
       <Navbar />
       <Routes>
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="/posts" element={<Home />}/>
          <Route path="/posts/search" element={<Home />}/>
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/creators/:name" element={<CreatorOrTag />} />
          <Route path="/tags/:name" element={<CreatorOrTag />} />
          <Route path="/auth" element={!user ? <Auth /> : <Navigate replace to="/posts" />} />
       </Routes>
    </Container>
  </Router>
</div>
      );
}

export default App;
