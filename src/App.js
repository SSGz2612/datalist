import './App.css';
import Datalist from "./components/Datalist";
import Popup from './components/Popup';
// redux
import { Provider } from 'react-redux';
import store from './redux/store';
// router
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
      <Provider store={ store }>
          <div className="App">
            <Switch>
              <Route exact path="/" component={ Datalist }/>
              <Route path="/popup" component={ Popup }/>
            </Switch>
          </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
