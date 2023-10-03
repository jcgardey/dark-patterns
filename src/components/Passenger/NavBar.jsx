import logo from '../../assets/Passenger/airlogo.svg';

export const NavBar = () => (
  <div className="head px-8 text-green-100 bg-green-600 py-2">
    <div className="flex">
      <div className="w-1/3">
        <h1 className="logo">
          <img src={logo} className="inline" /> air
          <span className="text-white">somewhere</span>
        </h1>
      </div>
    </div>
  </div>
);
