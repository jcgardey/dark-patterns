import { useNavigate } from 'react-router-dom';
import { Site } from '../components/Home/Site';
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { getWebsitesStatus } from '../services/samples';

export const Home = () => {
  const { t } = useTranslation();

  const [sites, setSites] = useState([]);

  const navigate = useNavigate();
  const sessionId = localStorage.getItem('session_id');

  useEffect(() => {
    const updateStatus = () => {
      getWebsitesStatus(sessionId).then((data) => setSites(data));
    };

    if (sessionId) {
      updateStatus();
    } else {
      navigate('/');
    }

    window.addEventListener('focus', updateStatus);
    return () => window.removeEventListener('focus', updateStatus);
  }, []);

  const allCompleted = sites.every((site) => site.completed);

  return (
    <div className="w-1/2 my-8 mx-auto">
      <h1 className="text-3xl">{t('Common.Instructions')}</h1>
      <h3 className="text-xl mt-8">{t('Common.TaskGeneral')}</h3>

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
