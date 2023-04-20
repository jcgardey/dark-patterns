import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarRental } from './Pages/CarRental/CarRental';
import { SelectVehicle } from './Pages/CarRental/SelectVehicle';
import { SelectProtection } from './Pages/CarRental/SelectProtection';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/car_rental" element={<CarRental />} />
          <Route path="/car_rental/vehicle" element={<SelectVehicle />} />
          <Route path="/car_rental/protection" element={<SelectProtection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

