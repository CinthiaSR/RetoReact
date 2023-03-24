// import logo from './logo.svg';
// import './App.css';
// import './components/styles/styles.css'
import { Main } from "./components/Home/Main/Main";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Main/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
