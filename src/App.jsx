import { useEffect } from 'react';
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
import { Account } from './Pages/EBook/Account';
import { Books } from './Pages/EBook/Books';
import { CancelMembership } from './Pages/EBook/CancelMembership';
import { BooksOffer } from './Pages/EBook/BooksOffer';
import { PassengerHome } from './Pages/Passenger/PassengerHome';
import { PassengerIndex } from './Pages/Passenger/PassengerIndex';
import { updateDarkPatternState } from './utils/dark_patterns';
import { StartPage } from './Pages/StartPage';
import { WebsitesGroups } from './Pages/Dashboard/WebsitesGroups';
import { CreateWebsiteGroup } from './Pages/Dashboard/CreateWebsiteGroup';
import { WebsitesPage } from './Pages/Dashboard/WebsitesPage';
import { EditWebsiteGroup } from './Pages/Dashboard/EditWebsiteGroup';
import MicroMetricLogger from './MicroMetricLogger';
import { UserSessionsPage } from './Pages/Dashboard/UserSessionsPage';

function App() {
  useEffect(() => {
    updateDarkPatternState();
  }, []);

  useEffect(() => {
    const website = localStorage.getItem('website')
      ? JSON.parse(localStorage.getItem('website'))
      : null;
    if (website?.ux_analyzer_token) {
      window.microMetricLogger = new MicroMetricLogger();
      window.microMetricLogger.startLogging();
      console.log('logging started');
      let observer = new MutationObserver(() =>
        window.microMetricLogger.setUpMicroMetrics()
      );
      observer.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true,
      });
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/start" element={<Home />} />

          <Route path="/car_rental" element={<CarRental />} />
          <Route path="/car_rental/vehicle" element={<SelectVehicle />} />
          <Route path="/car_rental/protection" element={<SelectProtection />} />
          <Route path="/car_rental/review" element={<Review />} />

          <Route path="/check_in" element={<PassengerHome />}>
            <Route path="" element={<PassengerIndex />} />
            <Route path="/check_in/info" element={<PassengerInfo />} />
            <Route path="/check_in/seat" element={<SeatSelection />} />
            <Route path="/check_in/summary" element={<Summary />} />
          </Route>

          <Route path="/roomio" element={<Search />} />
          <Route path="/roomio/results" element={<RoomioResults />} />
          <Route path="/roomio/summary" element={<RoomioSummary />} />

          <Route path="/ebook" element={<EBookHome />}>
            <Route path="" element={<Books />} />
            <Route path="/ebook/membership" element={<Membership />} />
            <Route path="/ebook/account" element={<Account />} />
            <Route
              path="/ebook/cancel_membership"
              element={<CancelMembership />}
            />
            <Route path="/ebook/books_offer" element={<BooksOffer />} />
          </Route>

          <Route path="/dashboard" element={<WebsitesGroups />} />
          <Route
            path="/dashboard/groups/new"
            element={<CreateWebsiteGroup />}
          />
          <Route path="/dashboard/websites" element={<WebsitesPage />} />
          <Route
            path="/dashboard/websites/:groupId"
            element={<EditWebsiteGroup />}
          />
          <Route
            path="/dashboard/user_sessions"
            element={<UserSessionsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
