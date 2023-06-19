import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ***** pages ******
import HomePage from './pages/Home';
import Example from './app/modules/exampleModule/views/Example';
import NotFound from './pages/NotFound';

//Game
import GamePage from './app/modules/codeGame/views/GamePage';
import NoPlayerView from './app/modules/codeGame/views/NoPlayerView';
import CreatePlayer from './app/modules/codeGame/views/CreatePlayer';
import Level1 from './app/modules/codeGame/views/Level1';

// auth
import LoginView from './app/modules/auth/views/LoginView';

//Grops managment
import GroupsManagmentPage from './app/modules/groupsManagment/views/GroupsManagmentPage';
import CreateGroup from './app/modules/groupsManagment/views/CreateGroup';
import Group from './app/modules/groupsManagment/views/GroupPage';

//**** layouts *****
import Auth from './common/layouts/auth';
import Index from './common/layouts';

//groups managment
import GroupsLayout from './app/modules/groupsManagment/layouts';
import GroupsManagmentLayout from './app/modules/groupsManagment/layouts/managment';
import NoGroupView from './app/modules/groupsManagment/views/NoGroupPage';

//code game
import GameLayout from './app/modules/codeGame/layouts/index'
import LevelLayout from './app/modules/codeGame/layouts/LevelLayout';

//routes validators
import PrivateRoute from './common/components/PrivateRoute';

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
              <Route element={<PrivateRoute element={<GroupsLayout/>}/>}>
                <Route path='/groups' element={<GroupsManagmentPage/>}/>
              </Route>

              <Route element={<PrivateRoute element = {<GroupsManagmentLayout/>}/>}>
                <Route path='/groups/add-group' element={<CreateGroup/>}/>
                <Route path='/groups/edit-group/:groupId' element={<CreateGroup/>}/>
                <Route path='/groups/list/' element={<NoGroupView/>}/>
                <Route path='/groups/list/:groupId' element={<Group/>}/>
              </Route>

              {/**Game routes */}
              <Route  element={<PrivateRoute element={<GameLayout/>}/>}>

                <Route path='/games' element={<NoPlayerView/>}/>
                <Route path='/games/add-player' element={<CreatePlayer/>}/>
                <Route path='/games/edit-player/:playerId' element={<CreatePlayer/>}/>
                <Route path='/game/:playerId' element={<GamePage/>}/>

              </Route>
              <Route  element={<PrivateRoute element={<LevelLayout/>}/>}>
                <Route path='/game/:playerId/level/1' element={<Level1/>}/>
              </Route>
              
              {/** Page 404 */}
              <Route path='*' element={<NotFound />}/>

            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
