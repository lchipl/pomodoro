import { Header } from "./components/Header/Header";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Switch>
      <Route path="/" component={MainPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
