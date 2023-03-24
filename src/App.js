// import logo from './logo.svg';
// import './App.css';
// import './components/styles/styles.css'
import { BrowserRouter, Switch, Routes,Route } from 'react-router-dom';
import { Main } from "./components/Home/Main/Main";

import Articule from "./components/Articule/Articule";
import Post from "./components/Post/Post";
// FALTA REVISAR CON ALAN
function App() {
  return (
  <div className = "App">
    <Post/>
   {/*comentado <Routes>
      
      <Switch>
       <Route path="/" element={Main} />
       <Route path="/create-post" element={Post} />
       <Route path="/edit-post/:id" exact Component={Edit_post} /> 
       <Route path="/articles/:id" element={Articule} />

      </Switch> 
    
  
    </Routes> */}
  </div>
  );
}

export default App;
