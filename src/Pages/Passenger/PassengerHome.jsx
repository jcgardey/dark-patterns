import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/Passenger/NavBar';
import './pasajero.css';

export const PassengerHome = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
