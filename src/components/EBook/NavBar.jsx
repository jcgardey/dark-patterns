import { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="head px-12 py-8 text-gray-500 border-b-2 border-fuchsia-500">
      <div className="flex">
        <div className="w-1/3">
          <h1 className="logo">
            <i className="fa-solid fa-sharp fa-book-bookmark"></i> ebook
            <span>world</span>
          </h1>
        </div>
        <div className="w-1/3">
          <div className="flex w-full items-center">
            <input
              type="text"
              className="w-full p-1 px-2 border border-gray-300 placeholder-gray-400 rounded rounded-r-none"
              placeholder="Buscar"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button
              className="bg-fuchsia-500 border border-fuchsia-500 rounded-r text-white py-1 px-2"
              type="button"
            >
              <i className="fa-solid fa-sharp fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="w-1/3 flex justify-end relative">
          <div>
            <a
              className="flex justify-center items-center text-gray-600 hover:cursor-pointer"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setDropdown(!dropdown)}
            >
              <div className="w-10 h-10 mx-1 flex justify-center items-center rounded-full bg-gray-300">
                <i className="fa-solid fa-sharp fa-user"></i>
              </div>
              <i className="fa-solid fa-caret-down"></i>
            </a>
            {dropdown && (
              <ul className="absolute my-1 right-0 border border-gray-300 rounded p-2 bg-white text-gray-700">
                <li className="hover:bg-gray-100 my-1">
                  <a className="dropdown-item" href="#">
                    Información de Cuenta
                  </a>
                </li>
                <li className="hover:bg-gray-100 my-1">
                  <Link to="/ebook/membership" className="dropdown-item">
                    Membresía
                  </Link>
                </li>
                <li className="hover:bg-gray-100 my-1">
                  <a className="dropdown-item" href="#">
                    Salir
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};