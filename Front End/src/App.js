
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
