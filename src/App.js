import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/Home';
import Example from './app/modules/exampleModule/views/Example';
import NotFound from './pages/NotFound';

//Game
import GamePage from './app/modules/codeGame/views/GamePage';

// auth
import LoginView from './app/modules/auth/views/LoginView';

//Grops managment
import GroupsManagmentPage from './app/modules/groupsManagment/views/GroupsManagmentPage';
import CreateGroup from './app/modules/groupsManagment/views/CreateGroup';
import Group from './app/modules/groupsManagment/views/GroupPage';

//layouts
import Auth from './common/layouts/auth';
import Index from './common/layouts';

//groups managment
import GroupsLayout from './app/modules/groupsManagment/layouts';
import GroupsManagmentLayout from './app/modules/groupsManagment/layouts/managment';

//code game
import GameLayout from './app/modules/codeGame/layouts/index'

function App() {
  return (
    <div className='h-screen'>
      <BrowserRouter>
            <Routes>
              {/** Routes with default layout */}
              <Route  element={<Index/>}> 
                <Route path='/' element={<HomePage/>}/>
                <Route path='/example' element={<Example/>}/>
              </Route>

               {/** Auth routes */}
              <Route  element={<Auth/>}>
                <Route path='/auth/login' element={<LoginView/>}/>
                <Route path='/auth/register' element={<LoginView/>}/>
              </Route>

              {/**Group torutes */}
              <Route element={<GroupsLayout/>}>
                <Route path='/groups' element={<GroupsManagmentPage/>}/>
              </Route>

              <Route element={<GroupsManagmentLayout/>}>
                <Route path='/groups/add-group' element={<CreateGroup/>}/> 
                <Route path='/groups/list' element={<Group/>}/>
              </Route>

              {/**Game routes */}
              <Route  element={<GameLayout/>}>
                <Route path='/games' element={<GamePage/>}/>
              </Route>
              
              {/** Page 404 */}
              <Route path='*' element={<NotFound />}/>

            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
