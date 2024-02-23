import { Link, useNavigate } from 'react-router-dom';
import { Site } from '../components/Home/Site';
import { useEffect, useState } from 'react';

import { Questionnaire } from '../components/Questionnaire/Questionnaire';

import { useTranslation } from 'react-i18next';
import { getWebsitesStatus } from '../services/samples';

export const Home = () => {
  const { t } = useTranslation();

  const initialSites = [
    {
      name: 'Car Rental',
      instructions: 'Common.TaskCar',
      path: '/car_rental',
      status: 'pending',
    },
    {
      name: 'Air Somewhere',
      instructions: 'Common.TaskCheckin',
      path: '/check_in?enabled=true',
      status: 'pending',
    },
    {
      name: 'Roomio',
      instructions: 'Common.TaskRoomio',
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

  const [sites, setSites] = useState([]);
  const navigate = useNavigate();

  const sessionId = localStorage.getItem('session_id');
  if (!sessionId) {
    navigate('/start');
  }

  useEffect(() => {
    const updateStatus = () => {
      getWebsitesStatus(localStorage.getItem('session_id')).then((data) =>
        setSites(data)
      );
    };
    updateStatus();
    window.addEventListener('focus', updateStatus);
    return () => window.removeEventListener('focus', updateStatus);
  }, []);

  const allCompleted = sites.every((site) => site.completed);

  return (
    <div className="w-3/4 my-8 mx-auto">
      <h1 className="text-3xl">{t('Common.Thanks')}</h1>

      <div className="my-8 border-b border-gray-300">
        {allCompleted && (
          <div className="my-4 p-2 text-lg text-green-800 font-medium rounded bg-green-300 border border-green-500">
            <p>{t('Common.TasksFinished')}</p>
          </div>
        )}
        {sites.map((site, i) => (
          <Site
            key={site.path}
            site={site}
            enabled={
              !site.completed &&
              (sites[i - 1] === undefined || sites[i - 1].completed)
            }
          />
        ))}
      </div>
    </div>
  );
};
