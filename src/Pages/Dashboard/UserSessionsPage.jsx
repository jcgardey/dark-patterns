import { useEffect, useState } from 'react';
import {
  getAllUserSessions,
  getAllWebsitesGroups,
} from '../../services/dashboard';

export const UserSessionsPage = () => {
  const [sessions, setSessions] = useState([]);

  const [groups, setGroups] = useState([]);
  const [assigments, setAssignments] = useState([]);

  const updateAssignment = (user_session_id, follow_up_group_id) => {
    setAssignments([...assigments, { user_session_id, follow_up_group_id }]);
  };

  useEffect(() => {
    getAllUserSessions().then((data) => setSessions(data));
  }, []);

  useEffect(() => {
    getAllWebsitesGroups().then((data) => setGroups(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl">Usuarios</h1>
      <div className="flex my-4">
        <p className="w-1/3 font-bold">Email</p>
        <p className="w-1/3 font-bold">Grupo</p>
        <p className="w-1/3 font-bold">Follow up</p>
      </div>
      <form>
        {sessions.map((session) => (
          <div className="flex my-4" key={session.id}>
            {' '}
            <p className="w-1/3">{session.email}</p>{' '}
            <p className="w-1/3">{session.website_group.name}</p>{' '}
            <select
              value={session.follow_up_group?.id ?? ''}
              onChange={(e) => updateAssignment(session.id, e.target.value)}
            >
              <option value={''}>Seleccionar variante</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>
        ))}
        <div className="my-4">
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};
