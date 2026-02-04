
import { HomePage } from './Pages/HomePage'
import {Routes, Route} from 'react-router';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={ <HomePage />}> </Route>
       <Route path="checkout" element={<div> Test the checkout page</div>}></Route>
    </Routes>
  
  );
}

export default App
