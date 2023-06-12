import { Link } from 'react-router-dom';

export const PageTitle = ({ children }) => (
  <p className="bg-sky-700 text-white font-bold p-1">{children}</p>
);

export const PrimaryButton = ({ children, type, disabled = false }) => (
  <button
    className="text-white bg-sky-700 hover:bg-sky-700 rounded w-full p-2"
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export const BackButton = ({ children, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-white text-center block bg-gray-700 hover:grey-800 rounded w-full p-2"
  >
    {children}
  </Link>
);
