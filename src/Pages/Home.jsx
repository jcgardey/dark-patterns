import { Link } from 'react-router-dom';

export const Home = () => {
  const sites = [
    { name: 'Car Rental', path: '/car_rental' },
    { name: 'Air Somewhere', path: '/check_in' },
    { name: 'Roomio', path: '/roomio' },
    { name: 'EBook', path: '/ebook' },
  ];
  return (
    <div className="w-3/4 my-8 mx-auto">
      <h1 className="text-3xl">Sitios con dark patterns</h1>
      <div className="my-8">
        {sites.map((site, i) => (
          <div key={i} className="flex my-2">
            <h3 className="w-1/4 text-lg font-medium">{site.name}</h3>
            <Link
              className="mx-4 text-black bg-gray-100 rounded p-2"
              to={`${site.path}?enabled=false`}
            >
              White
            </Link>
            <Link
              className="mx-4 text-white bg-gray-900 rounded p-2"
              to={`${site.path}?enabled=true`}
            >
              Dark
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
