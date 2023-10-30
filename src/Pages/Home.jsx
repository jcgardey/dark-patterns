import { Link } from 'react-router-dom';
import { Site } from '../components/Home/Site';
import { useEffect, useState } from 'react';

export const Home = () => {
  const initialSites = [
    {
      name: 'Car Rental',
      instructions:
        'Alquilar un auto en la ciudad de Madrid el 10 de marzo de 2024, con fecha de devolución el 2 de abril del mismo año.',
      path: '/car_rental',
      status: 'pending',
    },
    {
      name: 'Air Somewhere',
      instructions:
        'Completar el check-in para un vuelo determinado. El código de la reserva es NNNN.',
      path: '/check_in',
      status: 'pending',
    },
    {
      name: 'Roomio',
      instructions:
        'Reservar un alojamiento en la ciudad de CIUDAD entre el 10 y 20 de mayo de 2024. Para la reserva, dispone de un máximo de $USD 1000.',
      path: '/roomio',
      status: 'pending',
    },
    {
      name: 'EBook',
      instructions: 'Desuscribirse de un servicio de libros electrónicos.',
      path: '/ebook',
      status: 'pending',
    },
  ];

  const [sites, setSites] = useState(initialSites);

  useEffect(() => {
    const updateStatus = () => {
      if (localStorage.getItem('sites')) {
        setSites(JSON.parse(localStorage.getItem('sites')));
      } else {
        localStorage.setItem('sites', JSON.stringify(sites));
      }
    };
    updateStatus();
    window.addEventListener('focus', updateStatus);
    return () => window.removeEventListener('focus', updateStatus);
  }, []);

  const pendingSites = () => sites.filter((site) => site.status !== 'done');
  const doneSites = () => sites.filter((site) => site.status === 'done');

  return (
    <div className="w-3/4 my-8 mx-auto">
      <h1 className="text-3xl">Gracias por participar</h1>

      <div className="my-8 border-b border-gray-300">
        {pendingSites().length == 0 && (
          <div className="my-4 p-2 text-lg text-green-800 font-medium rounded bg-green-300 border border-green-500">
            <p>Todas las tareas fueron completadas correctamente</p>
          </div>
        )}
        {pendingSites().map((site, i) => (
          <Site
            key={site.path}
            site={site}
            enabled={
              site.status === 'pending' &&
              pendingSites()[i - 1]?.status !== 'pending'
            }
          />
        ))}
      </div>
      {doneSites().length > 0 && (
        <div>
          <h2 className="text-2xl">Tareas completadas:</h2>
          {doneSites().map((site) => (
            <Site key={site.path} site={site} enabled={false} />
          ))}
        </div>
      )}
    </div>
  );
};
