
import { HomePage } from './Pages/HomePage'
import { Routes, Route } from 'react-router-dom'; 
import { CheckoutPage } from './Pages/CheckoutPage';
import { OrderPage } from './Pages/OrderPage';
import { TrackingPage } from './Pages/TrackingPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>

  );
}

export default App
