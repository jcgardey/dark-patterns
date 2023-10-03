import { NavBar } from '../../components/EBook/NavBar';
import './books.css';
import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-1/6 sidebar px-8">
          <ul>
            <li>
              <Link to="/ebook">
                <i className="fa-solid fa-sharp fa-house"></i> Inicio
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-sharp fa-bookmark"></i> Guardados
              </a>
            </li>
            <li className="separator"></li>
            <li>
              <a href="#">
                <i className="fa-solid fa-sharp fa-star"></i> Recomendados
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-sharp fa-book"></i> Libros
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-sharp fa-headphones"></i> Audiolibros
              </a>
            </li>
          </ul>
        </div>
        <div className="w-3/4 mx-auto main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};
