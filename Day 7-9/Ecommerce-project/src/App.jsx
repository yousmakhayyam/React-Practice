import axios from 'axios';
import { HomePage } from './Pages/HomePage'
import { Routes, Route } from 'react-router-dom'; 
import { CheckoutPage } from './Pages/CheckoutPage';
import { OrderPage } from './Pages/OrderPage';
import { TrackingPage } from './Pages/TrackingPage';
import './App.css'
import { useEffect,useState} from 'react';

function App() {
 const [cart, setCart] = useState([]);
 useEffect(()=>{
axios.get('/api/cart-items?expand=product')
      .then((response) =>{
        setCart(response.data);
      })
 });
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart}  />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>

  );
}

export default App
