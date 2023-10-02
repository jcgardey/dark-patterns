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
import { Home } from './Pages/Home';
import { Search } from './Pages/Roomio/Search';
import { RoomioResults } from './Pages/Roomio/RoomioResults';
import { RoomioSummary } from './Pages/Roomio/RoomioSummary';

import { Home as EBookHome } from './Pages/EBook/Home';
import { Membership } from './Pages/EBook/Membership';
import { Books } from './Pages/EBook/Books';

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
          <Route path="/" element={<Home />} />

          <Route path="/car_rental" element={<CarRental />} />
          <Route path="/car_rental/vehicle" element={<SelectVehicle />} />
          <Route path="/car_rental/protection" element={<SelectProtection />} />
          <Route path="/car_rental/review" element={<Review />} />

          <Route path="/check_in" element={<PassengerInfo />} />
          <Route path="/check_in/seat" element={<SeatSelection />} />
          <Route path="/check_in/summary" element={<Summary />} />

          <Route path="/roomio" element={<Search />} />
          <Route path="/roomio/results" element={<RoomioResults />} />
          <Route path="/roomio/summary" element={<RoomioSummary />} />

          <Route path="/ebook" element={<EBookHome />}>
            <Route path="" element={<Books />} />
            <Route path="/ebook/membership" element={<Membership />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
