import { Link } from 'react-router-dom';
import { Site } from '../components/Home/Site';
import { useEffect, useState } from 'react';

import { Modal } from '../components/Modal';
import { Questionnaire } from '../components/Questionnaire/Questionnaire';

import { useTranslation } from 'react-i18next';

export const Home = () => {
  
  const { t } = useTranslation();
   
  const initialSites = [
    {
      name: 'Car Rental',
      instructions:'Common.TaskCar',
      path: '/car_rental',
      status: 'pending',
    },
    {
      name: 'Air Somewhere',
      instructions:'Common.TaskCheckin',
      path: '/check_in?enabled=true',
      status: 'pending',
    },
    {
      name: 'Roomio',
      instructions:'Common.TaskRoomio',
      path: '/roomio?enabled=true',
      status: 'pending',
    },
    {
      name: 'EBook',
      instructions: 'Common.TaskEBook',
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
      <h1 className="text-3xl">{t('Common.Thanks')}</h1>

      <div className="my-8 border-b border-gray-300">
        {pendingSites().length == 0 && (
          <div className="my-4 p-2 text-lg text-green-800 font-medium rounded bg-green-300 border border-green-500">
            <p>{t('TasksFinished')}</p>
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
