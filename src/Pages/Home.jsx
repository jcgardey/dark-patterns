import { Link } from 'react-router-dom';

export const Home = () => {
  const sites = [
    { name: 'Car Rental', path: '/car_rental' },
    { name: 'Check-in de pasajero', path: '/check_in' },
    { name: 'Roomio', path: '/roomio' },
  ];
  return (
    <div className="w-3/4 my-8 mx-auto">
      <h1 className="text-3xl">Sitios con dark patterns</h1>
      <div className="my-4">
        <ul className="list-none">
          {sites.map((site, i) => (
            <li className="my-2">
              <Link className="underline text-sky-700" to={site.path}>
                {site.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
