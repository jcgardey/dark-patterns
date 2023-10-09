import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/Passenger/NavBar';
import { useEffect } from 'react';
import { updateDarkPatternState } from '../../utils/dark_patterns';

export const PassengerHome = () => {
  useEffect(() => {
    updateDarkPatternState();
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
