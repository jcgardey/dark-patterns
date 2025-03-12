import { useEffect, useState } from 'react';
import {
  assignFollowUpGroups,
  getAllUserSessions,
  getAllWebsitesGroups,
} from '../../services/dashboard';

export const UserSessionsPage = () => {
  const [sessions, setSessions] = useState([]);

  const [groups, setGroups] = useState([]);
  
  const updateAssignment = (session, follow_up_group_id) => {
    session.follow_up_group = { id: follow_up_group_id };
    setSessions([...sessions]);
  };

  useEffect(() => {
    getAllUserSessions().then((data) => setSessions(data));
  }, []);

  useEffect(() => {
    getAllWebsitesGroups().then((data) => setGroups(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    assignFollowUpGroups(sessions.map(session => ({ user_session_id: session.id, follow_up_group_id: session.follow_up_group?.id })))
  }

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl">Usuarios</h1>
      <div className="flex my-4">
        <p className="w-1/3 font-bold">Email</p>
        <p className="w-1/3 font-bold">Grupo</p>
        <p className="w-1/3 font-bold">Follow up</p>
      </div>
      <form onSubmit={handleSubmit}>
        {sessions.map((session) => (
          <div className="flex my-4 items-center" key={session.id}>
            {' '}
            <p className="w-1/3">{session.email}</p>{' '}
            <p className="w-1/3">{session.website_group.name}</p>{' '}
            <select
              className='border border-gray-500 rounded p-1'
              value={session.follow_up_group?.id ?? ''}
              onChange={(e) => updateAssignment(session, parseInt(e.target.value))}
            >
              <option value={''}>Seleccionar variante</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
            <a className="mx-4 underline" href={`/start?sessionId=${session.id}`}>Link</a>
          </div>
        ))}
        <div className="my-4">
          <button className="rounded bg-sky-700 text-white p-2 disabled:opacity-70">
                  Guardar</button>
        </div>
      </form>
    </div>
  );
};
