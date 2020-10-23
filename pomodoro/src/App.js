import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Pomodoro} from './pages/pomodoro/pomodoro';
import {Navbar} from './components/nav';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar />
       <Switch>
       <Route exact path='/' component={Pomodoro} />
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
