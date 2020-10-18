import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Pomodoro} from './pages/pomodoro/pomodoro';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Switch>
       <Route exact path='/' component={Pomodoro} />
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
