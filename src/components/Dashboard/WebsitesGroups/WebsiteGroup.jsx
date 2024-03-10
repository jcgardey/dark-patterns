import { UserSessionItem } from './UserSessionItem';

export const WebsiteGroup = ({ group }) => {
  return (
    <div className="my-8 w-3/4 mx-auto">
      <h2 className="font-medium text-xl">{group.name}</h2>
      {group.user_sessions.map((session) => (
        <UserSessionItem key={session.id} session={session} />
      ))}
    </div>
  );
};
