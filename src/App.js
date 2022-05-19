import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Reservations from "./pages/Reservations";
import Holidays from "./pages/Holidays";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Disponibilities from "./pages/Disponibilities";
import Hours from "./pages/Hours";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/reservations" exact element={<Reservations />} />
          <Route path="/holidays" exact element={<Holidays />} />
          <Route path="/disponibilities" exact element={<Disponibilities />} />
          <Route path="/hours" exact element={<Hours />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
