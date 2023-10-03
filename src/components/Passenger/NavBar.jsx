import logo from '../../assets/Passenger/airlogo.svg';

export const NavBar = () => (
  <div className="head">
    <div className="flex">
      <div className="w-1/3">
        <h1 className="logo">
          <img src={logo} /> air<span>somewhere</span>
        </h1>
      </div>
    </div>
  </div>
);
