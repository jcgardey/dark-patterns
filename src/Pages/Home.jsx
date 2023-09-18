import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="w-3/4 my-8 mx-auto">
    <h1 className="text-3xl">Sitios con dark patterns</h1>
    <div className="my-4">
      <ul className="list-none">
        <li className="my-2">
          <Link className="underline text-sky-700" to="/car_rental">
            Car Rental
          </Link>
        </li>
        <li className="my-2">
          <Link className="underline text-sky-700" to="/check_in">
            Check-in de pasajero
          </Link>
        </li>
      </ul>
    </div>
  </div>
);
