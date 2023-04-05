import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/Home';
import Example from './pages/Example';
import NotFound from './pages/NotFound';
import LoginView from './app/modules/auth/views/LoginView';

//components
import Navbar from "../src/common/components/Navar";

function App() {
  return (
    <div className='h-screen'>
      <BrowserRouter>
      <Navbar/>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/example' element={<Example/>}/>
              <Route path='/auth/login' element={<LoginView/>}/>
              <Route path='/auth/register' element={<LoginView/>}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
