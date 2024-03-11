import { deleteWebsiteGroup } from '../../../services/dashboard';
import { UserSessionItem } from './UserSessionItem';

export const WebsiteGroup = ({ group, onDelete }) => {
  const onDeleteClick = (groupId) => {
    deleteWebsiteGroup(groupId).then((response) => onDelete(groupId));
  };

  return (
    <div className="my-8 w-3/4 mx-auto">
      <div className="flex gap-4">
        <h2 className="font-medium text-xl">{group.name}</h2>
        <button
          disabled={group.user_sessions.length > 0}
          onClick={() => onDeleteClick(group.id)}
          className="underline text-blue-600 disabled:text-gray-400"
        >
          Eliminar Variante
        </button>
      </div>
      {group.user_sessions.map((session) => (
        <UserSessionItem key={session.id} session={session} />
      ))}
    </div>
  );
};
