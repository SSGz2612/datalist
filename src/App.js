import './App.css';
import Datalist from "./components/Datalist";
// redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App(){
  return (
    <Provider store={ store }>
      <div className="App">
        <Datalist />
      </div>
    </Provider>
  );
}

export default App;
