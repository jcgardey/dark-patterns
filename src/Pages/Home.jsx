import { Link } from 'react-router-dom';
import { Site } from '../components/Home/Site';
import { useEffect, useState } from 'react';

import { Modal } from '../components/Modal';
import { Questionnaire } from '../components/Questionnaire/Questionnaire';

export const Home = () => {
  const initialSites = [
    {
      name: 'Car Rental',
      instructions:
        'Vas a estar en Madrid de vacaciones, con un presupuesto muy acotado. Necesitás alquilar un auto por 4 días, de viernes a lunes de la semana que viene.',
      path: '/car_rental',
      status: 'pending',
    },
    {
      name: 'Air Somewhere',
      instructions:
        'Estás por hacer un viaje de negocios con presupuesto limitado. Tu vuelo ya está reservado, solamente tenés que hacer el checkin online con el código de reserva AAA123',
      path: '/check_in?enabled=true',
      status: 'pending',
    },
    {
      name: 'Roomio',
      instructions:
        'Sos un estudiante viajando por Europa con poco dinero, y tenés pensado ir a Madrid por el fin de semana y necesitás una habitación entre viernes y domingo. Tu idea es gastar menos de USD 200. ',
      path: '/roomio?enabled=true',
      status: 'pending',
    },
    {
      name: 'EBook',
      instructions: 'Llevas un tiempo suscrito a un servicio de Ebooks por el que pagas mensualmente. Últimamente ha estado sobrecargado de trabajo y no ha podido utilizar el servicio. Un amigo te ha recomendado una opción mejor en la que sólo pagas por uso cuando descargas algo, así que quieres cancelar tu suscripción actual a la tienda de Ebooks.',
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

  return (
    <div className="w-3/4 my-8 mx-auto">
      <h1 className="text-3xl">Gracias por participar</h1>

      <div className="my-8 border-b border-gray-300">
        {pendingSites().length == 0 && (
          <div className="my-4 p-2 text-lg text-green-800 font-medium rounded bg-green-300 border border-green-500">
            <p>Todas las tareas fueron completadas correctamente</p>
          </div>
        )}
        {sites.map((site, i) => (
          <Site
            key={site.path}
            site={site}
            enabled={
              site.status === 'pending' && sites[i - 1]?.status !== 'pending'
            }
          />
        ))}
      </div>
    </div>
  );
};
