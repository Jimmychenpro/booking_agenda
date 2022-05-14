import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Employee from './pages/Employee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/booking" exact element={<Booking />} />
        <Route path="/employee" exact element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;