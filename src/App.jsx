import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarRental } from './Pages/CarRental/CarRental';
import { SelectVehicle } from './Pages/CarRental/SelectVehicle';
import { SelectProtection } from './Pages/CarRental/SelectProtection';
import { Review } from './Pages/CarRental/Review';
import { SeatSelection } from './Pages/Passenger/SeatSelection';
import { Summary } from './Pages/Passenger/Summary';
import { PassengerInfo } from './Pages/Passenger/PassengerInfo';

import './i18n/i18n';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    if (params.get('enabled') === 'true') {
      localStorage.setItem('dark', true);
    } else if (params.get('enabled') === 'false') {
      localStorage.removeItem('dark');
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/car_rental" element={<CarRental />} />
          <Route path="/car_rental/vehicle" element={<SelectVehicle />} />
          <Route path="/car_rental/protection" element={<SelectProtection />} />
          <Route path="/car_rental/review" element={<Review />} />

          <Route path="/check_in" element={<PassengerInfo />} />
          <Route path="/check_in/seat" element={<SeatSelection />} />
          <Route path="/check_in/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
