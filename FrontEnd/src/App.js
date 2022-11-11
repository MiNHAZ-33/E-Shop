
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/cart/' element={<CartScreen />} />
          <Route path='/cart/:id' element={<CartScreen />} />
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/profile' element={<ProfileScreen/>}/>
          <Route path='/shipping' element={<ShippingScreen/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
