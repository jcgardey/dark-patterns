import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/Passenger/NavBar';

export const PassengerHome = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
