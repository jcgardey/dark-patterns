export const Site = ({ site, enabled }) => {
  const isDone = site.status === 'done';

  const onClick = () => {
    window.open(
      `${window.location.href}#${site.path}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="my-10">
      <div className="flex items-center">
        <h3
          className={`w-1/6 text-xl font-medium ${
            isDone ? 'line-through' : ''
          }`}
        >
          {site.name}
        </h3>
        {!isDone && (
          <button
            onClick={onClick}
            disabled={!enabled}
            target="_blank"
            className={`mx-4 text-white rounded p-2 ${
              enabled ? 'bg-green-600' : 'bg-gray-300'
            }`}
            to={`${site.path}?enabled=false`}
          >
            Iniciar
          </button>
        )}
      </div>
      <p className={`text-slate-500 my-2 ${isDone ? 'line-through' : ''}`}>
        {site.instructions}
      </p>
    </div>
  );
};
