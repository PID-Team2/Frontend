import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/Home';
import Example from './pages/Example';
import NotFound from './pages/NotFound';
import GamePage from './app/modules/codeGame/views/GamePage';
import LoginView from './app/modules/auth/views/LoginView';
import Tracing from './app/modules/tracing-rating/project';
import Questions from './app/modules/tracing-rating/Questions';
import Answer from './app/modules/tracing-rating/Answers';

//layouts
import Auth from './common/layouts/auth';
import Index from './common/layouts';

function App() {
  return (
    <div className='h-screen'>
      <BrowserRouter>
            <Routes>

              {/** Routes with layouts */}
              <Route  element={<Index/>}> 
                <Route path='/' element={<HomePage/>}/>
                <Route path='/example' element={<Example/>}/>
                <Route path='/games' element={<GamePage/>}/>
                <Route path='/tracing-project' element={<Tracing/>}/>
                  <Route path='/list-questions' element={<Questions/>}/>
                  <Route path='/answare' element={<Answer/>}/>

              </Route>

              <Route  element={<Auth/>}>
                <Route path='/auth/login' element={<LoginView/>}/>
                <Route path='/auth/register' element={<LoginView/>}/>
              </Route>

              {/** Page 404 */}
              <Route path='*' element={<NotFound />}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
