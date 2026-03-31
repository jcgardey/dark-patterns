import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarRental } from "./Pages/CarRental/CarRental";
import { SelectVehicle } from "./Pages/CarRental/SelectVehicle";
import { SelectProtection } from "./Pages/CarRental/SelectProtection";
import { Review } from "./Pages/CarRental/Review";
import { SeatSelection } from "./Pages/Passenger/SeatSelection";
import { Summary } from "./Pages/Passenger/Summary";
import { PassengerInfo } from "./Pages/Passenger/PassengerInfo";

import "./i18n/i18n";
import { Home } from "./Pages/Home";
import { Search } from "./Pages/Roomio/Search";
import { RoomioResults } from "./Pages/Roomio/RoomioResults";
import { RoomioSummary } from "./Pages/Roomio/RoomioSummary";

import { Home as EBookHome } from "./Pages/EBook/Home";
import { Membership } from "./Pages/EBook/Membership";
import { Account } from "./Pages/EBook/Account";
import { Books } from "./Pages/EBook/Books";
import { CancelMembership } from "./Pages/EBook/CancelMembership";
import { BooksOffer } from "./Pages/EBook/BooksOffer";

import { PassengerHome } from "./Pages/Passenger/PassengerHome";
import { PassengerIndex } from "./Pages/Passenger/PassengerIndex";

import { Home as CreativeBoxHome } from "./Pages/CreativeBox/Home.jsx";
import { Account as CreativeBoxAccount } from "./Pages/CreativeBox/Account.jsx";

import { Home as TeatrumHome } from "./Pages/Teatrum/Home.jsx";
import Event from "./Pages/Teatrum/Event.jsx";
import SelectPrice from "./Pages/Teatrum/SelectPrice.jsx";
import BuyTicket from "./Pages/Teatrum/BuyTicket.jsx";

import { Home as PetspaceHome } from "./Pages/Petspace/Home.jsx";
import { Product as PetProduct } from "./Pages/Petspace/Product.jsx";
import { BuyProduct as BuyPetProduct } from "./Pages/Petspace/BuyProduct.jsx";

import { Home as MoviemaxHome } from "./Pages/Moviemax/Home.jsx";

import { updateDarkPatternState } from "./utils/dark_patterns";
import { StartPage } from "./Pages/StartPage";
import { WebsitesGroups } from "./Pages/Dashboard/WebsitesGroups";
import { CreateWebsiteGroup } from "./Pages/Dashboard/CreateWebsiteGroup";
import { WebsitesPage } from "./Pages/Dashboard/WebsitesPage";
import { EditWebsiteGroup } from "./Pages/Dashboard/EditWebsiteGroup";
import MicroMetricLogger from "./MicroMetricLogger";
import { UserSessionsPage } from "./Pages/Dashboard/UserSessionsPage";
import Indications from "./Pages/Moviemax/Indications.jsx";
import PlanSelect from "./Pages/Moviemax/PlanSelect.jsx";
import Checkout from "./Pages/Moviemax/Checkout.jsx";

function App() {
  useEffect(() => {
    updateDarkPatternState();
  }, []);

  useEffect(() => {
    const website = localStorage.getItem("website")
      ? JSON.parse(localStorage.getItem("website"))
      : null;
    if (website?.ux_analyzer_token) {
      window.microMetricLogger = new MicroMetricLogger();
      window.microMetricLogger.startLogging();
      console.log("logging started");
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

          <Route path="/creativebox" element={<CreativeBoxHome />} />
          <Route path="/creativebox/account" element={<CreativeBoxAccount />} />

          <Route path="/teatrum" element={<TeatrumHome />} />
          <Route path="/teatrum/event/:id" element={<Event />} />
          <Route path="/teatrum/select-price/:id" element={<SelectPrice />} />
          <Route path="/teatrum/buy-ticket/:id" element={<BuyTicket />} />

          <Route path="/petspace" element={<PetspaceHome />} />
          <Route path="/petspace/product/:id" element={<PetProduct />} />
          <Route path="/petspace/buy" element={<BuyPetProduct />} />

          <Route path="/moviemax" element={<MoviemaxHome />} />
          <Route path="/moviemax/indications" element={<Indications />} />
          <Route path="/moviemax/plan-select" element={<PlanSelect />} />
          <Route path="/moviemax/checkout/:id" element={<Checkout />} />

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
