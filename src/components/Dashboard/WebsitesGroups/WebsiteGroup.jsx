import { Link } from 'react-router-dom';
import { deleteWebsiteGroup } from '../../../services/dashboard';
import { UserSessionItem } from './UserSessionItem';

export const WebsiteGroup = ({ group, onDelete }) => {
  const onDeleteClick = (groupId) => {
    deleteWebsiteGroup(groupId).then((response) => onDelete(groupId));
  };

  return (
    <div className="my-8 mx-auto">
      <div className="flex justify-between">
        <h2 className="font-medium text-xl">{group.name}</h2>
        <div className="flex gap-4 items-center">
          <Link
            className="underline text-blue-600 disabled:text-gray-400"
            to={`/dashboard/websites/${group.id}`}
          >
            Editar
          </Link>

          <button
            disabled={group.user_sessions.length > 0}
            onClick={() => onDeleteClick(group.id)}
            className="underline text-blue-600 disabled:text-gray-400"
          >
            Eliminar Variante
          </button>
        </div>
      </div>
      {group.user_sessions.map((session) => (
        <UserSessionItem key={session.id} session={session} />
      ))}
    </div>
  );
};
