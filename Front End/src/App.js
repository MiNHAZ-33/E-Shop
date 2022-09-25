
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Home/Navbar';
import Home from './Home/Home';

function App() {
  return (
      <BrowserRouter>
         <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
     
  
  );
}

export default App;
