import './App.css';
import Datalist from "./components/Datalist";
import Popup from './components/Popup';
// redux
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
// router
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
      <Provider store={ store }>
      <PersistGate persistor={ persistor }>
          <div className="App">
            <Switch>
              <Route exact path="/" component={ Datalist }/>
              <Route path="/popup" component={ Popup }/>
            </Switch>
          </div>
      </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
