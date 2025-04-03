import { useEffect, useState } from 'react';
import {
  assignFollowUpGroups,
  downloadUserSessions,
  getAllUserSessions,
  getAllWebsitesGroups,
} from '../../services/dashboard';
import { saveFile } from '../../utils/file';
import { Link } from 'react-router-dom';

export const UserSessionsPage = () => {
  const [sessions, setSessions] = useState([]);

  const [groups, setGroups] = useState([]);

  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    follow_up_group: '',
    repeated: true,
  });

  const updateAssignment = (user_session_id, follow_up_group_id) => {
    const newAssignments = assignments.filter(
      (assignment) => assignment.user_session_id !== user_session_id
    );
    newAssignments.push({ user_session_id, follow_up_group_id });
    setAssignments(newAssignments);
  };

  useEffect(() => {
    getAllUserSessions(filters).then((data) => setSessions(data));
  }, [filters]);

  useEffect(() => {
    getAllWebsitesGroups().then((data) => setGroups(data));
  }, []);

  const handleExport = () => {
    downloadUserSessions(filters).then((blob) => {
      saveFile('usuarios.csv', blob);
    });
  };

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

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl">Usuarios</h1>
      <div className="my-4">
        <Link className="underline text-blue-600" to="/dashboard">
          Volver
        </Link>
      </div>
      <h3 className="text-2xl font-bold">Filtros</h3>
      <div className="my-4 flex items-center">
        <select
          value={filters.follow_up_group}
          onChange={(e) =>
            handleFilterChange('follow_up_group', e.target.value)
          }
          className="border border-gray-500 rounded p-1 mx-4"
        >
          <option value="">Todos</option>
          <option value="assigned">Asignados</option>
          <option value="not_assigned">No asignados</option>
          <option value="completed">Completados</option>
          <option value="not_completed">No completados</option>
        </select>
        <div>
          <input
            type="checkbox"
            className="mx-1"
            checked={filters.repeated}
            onChange={(e) => handleFilterChange('repeated', e.target.checked)}
          />
          <label>Repetidos</label>
        </div>
        <button className="underline text-blue-600 mx-4" onClick={handleExport}>
          Exportar
        </button>
      </div>

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
            <div
              className={`h-4 w-4 rounded-xl ${
                session.is_follow_up_group_completed
                  ? 'bg-green-500'
                  : 'bg-yellow-500'
              } `}
            />
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
