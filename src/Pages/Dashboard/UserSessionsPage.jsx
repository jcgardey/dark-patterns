import { useEffect, useState } from 'react';
import {
  assignFollowUpGroups,
  getAllUserSessions,
  getAllWebsitesGroups,
} from '../../services/dashboard';

export const UserSessionsPage = () => {
  const [sessions, setSessions] = useState([]);

  const [groups, setGroups] = useState([]);

  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateAssignment = (user_session_id, follow_up_group_id) => {
    const newAssignments = assignments.filter(
      (assignment) => assignment.user_session_id !== user_session_id
    );
    newAssignments.push({ user_session_id, follow_up_group_id });
    setAssignments(newAssignments);
  };

  useEffect(() => {
    getAllUserSessions().then((data) => setSessions(data));
  }, []);

  useEffect(() => {
    getAllWebsitesGroups().then((data) => setGroups(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    assignFollowUpGroups(assignments).then(() => {
      setLoading(false);
    });
  };

  const getAssignmentForSession = (session) => {
    const assigned_follow_up = assignments.find(
      (assignment) => assignment.user_session_id === session.id
    )?.follow_up_group_id;
    return assigned_follow_up !== undefined
      ? assigned_follow_up
      : session.follow_up_group?.id;
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl">Usuarios</h1>s
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
              className="border border-gray-500 rounded p-1"
              value={getAssignmentForSession(session) ?? ''}
              onChange={(e) =>
                updateAssignment(
                  session.id,
                  e.target.value !== '' ? parseInt(e.target.value) : null
                )
              }
            >
              <option value={''}>No asignado</option>
              {groups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
            <a
              className="mx-4 underline"
              href={`/start?sessionId=${session.id}`}
            >
              Link
            </a>
          </div>
        ))}
        <div className="my-4">
          <button
            disabled={loading}
            className="rounded bg-sky-700 text-white p-2 disabled:opacity-70"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
