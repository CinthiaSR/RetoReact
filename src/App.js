import { Routes,Route } from 'react-router-dom';
import { Main } from "./components/Home/Main/Main";
import { Articule } from "./components/Articule/Articule";
import Post from './components/Post/Post';
import Editpost from './components/Post/Editpost';
import './components/styles/styles.scss'

// FALTA REVISAR CON ALAN
function App() {
  return (
    <div className = "App">
   <Routes>    
      
       <Route path="/" element={<Main/>} />
       <Route path="/create-post" element={<Post/>} />
        {/*aqui va el edit post, falta esa ruta */}
       <Route path="/article/:id" element={<Articule/>} /> 
       <Route path="/editpost/:id" element={<Editpost/>}/>
  
    </Routes> 
  </div>
  );
}

export default App;


