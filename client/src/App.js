/** @format */

import Main from './components/main/main';
import Question from './components/question/question';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Goodbye from '../src/components/GameEnd/Goodbye'
function App() {
  const [privatPage, setPrivatPage] = useState();

  return (
    <>
      <Navbar privatPage={privatPage} />
      <Switch>
        <Route exact path='/'>
          <Login setPrivatPage={setPrivatPage} />
        </Route>
        <Route exact path='/game'>
          <Main />
        </Route>
        <Route exact path='/game/:id'>
          <Question />
        </Route>
        <Route exact path="/logout" component={Goodbye} />
      </Switch>
    </>
  );
}

export default App;
