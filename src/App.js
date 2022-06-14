import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Employee from './pages/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/booking" exact element={<Booking />} />
        <Route path="/employee" exact element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;