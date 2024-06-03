import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export const Site = ({ site, enabled }) => {
  const { t } = useTranslation();

  const onClick = () => {
    localStorage.setItem(
      'website',
      JSON.stringify({
        id: site.id,
        start: dayjs().format(),
        ux_analyzer_token: site.ux_analyzer_token,
      })
    );
    window.open(
      `${window.location.origin}${site.url}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="my-10">
      <p
        className={`text-slate-700 text-lg my-2 
          ${site.completed ? 'line-through' : ''}
          ${!enabled ? 'text-opacity-40' : ''}
          `}
      >
        <span
          className={`text-black mr-2 ${!enabled ? 'text-opacity-40' : ''}`}
        >
          {site.name}:
        </span>
        {t(site.instructions)}
      </p>
      {!site.completed && (
        <button
          onClick={onClick}
          disabled={!enabled}
          target="_blank"
          className={`mb-4 px-6 text-white rounded p-2 ${
            enabled ? 'bg-green-600' : 'bg-gray-300'
          }`}
        >
          {t('Common.Start')}
        </button>
      )}
      <p className={'text-green-900'}>{enabled ? t('Start.TabOpen') : ''}</p>
    </div>
  );
};
