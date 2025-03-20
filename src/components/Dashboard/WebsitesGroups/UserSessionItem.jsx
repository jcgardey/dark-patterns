import { deleteUserSession } from '../../../services/dashboard';

export const UserSessionItem = ({ session, onShowUserSession }) => {
  const onDeleteClick = (sessionId) => {
    deleteUserSession(sessionId).then((response) => {
      //onDelete(sessionId);
      console.log('session deleted');
    });
  };

  return (
    <div className="flex my-4 items-center gap-1">
      <p>{session.email}</p>
      <div className="flex space-between">
        {session.samples.map((s) => (
          <div
            key={s.id}
            className="mx-1 rounded-3xl bg-green-700 p-1 text-white text-xs font-bold"
          >
            {s.website.name[0]} - {s.website.is_dark ? 'DP' : 'NDP'}
          </div>
        ))}
      </div>
      <button
        className="mx-1 underline text-blue-600"
        onClick={() => onShowUserSession(session)}
      >
        Ver
      </button>
    </div>
  );
};
