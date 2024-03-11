import { deleteUserSession } from '../../../services/dashboard';

export const UserSessionItem = ({ session }) => {
  const onDeleteClick = (sessionId) => {
    deleteUserSession(sessionId).then((response) => {
      //onDelete(sessionId);
      console.log('session deleted');
    });
  };

  return (
    <div className="flex">
      <p>{session.email}</p>
      <button className="mx-1 underline text-blue-600">Ver</button>
      <button
        className="mx-2 underline text-blue-600"
        onClick={() => onDeleteClick(session.id)}
      >
        Eliminar
      </button>
    </div>
  );
};
