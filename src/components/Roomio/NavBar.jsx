import { Link } from 'react-router-dom';

export const NavBar = () => (
  <div className="bg-teal-600 px-12 py-10 text-white">
    <Link className="font-medium text-2xl" to="/roomio">
      Roomio.com
    </Link>
  </div>
);
