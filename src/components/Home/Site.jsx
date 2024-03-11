import { useTranslation } from 'react-i18next';

export const Site = ({ site, enabled }) => {
  const { t } = useTranslation();

  const onClick = () => {
    localStorage.setItem('website_id', site.id);
    window.open(
      window.location.origin + site.url,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="my-10">
      <div className="flex items-center">
        <h3
          className={`w-1/6 text-xl font-medium ${
            site.completed ? 'line-through' : ''
          }`}
        >
          {site.name}
        </h3>
        {!site.completed && (
          <button
            onClick={onClick}
            disabled={!enabled}
            target="_blank"
            className={`mx-4 text-white rounded p-2 ${
              enabled ? 'bg-green-600' : 'bg-gray-300'
            }`}
          >
            Iniciar
          </button>
        )}
      </div>
      <p
        className={`text-slate-500 my-2 ${
          site.completed ? 'line-through' : ''
        }`}
      >
        {t(site.instructions)}
      </p>
    </div>
  );
};
