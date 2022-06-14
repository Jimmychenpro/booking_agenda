import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';
import Employee from './pages/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/booking" exact element={<Booking />} />
        <Route path="/" exact element={<Employee />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;