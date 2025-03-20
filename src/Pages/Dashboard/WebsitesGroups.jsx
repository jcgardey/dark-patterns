import { useEffect, useState } from 'react';
import {
  downloadWebsiteSamples,
  getAllWebsitesGroups,
} from '../../services/dashboard';
import { WebsiteGroup } from '../../components/Dashboard/WebsitesGroups/WebsiteGroup';
import { Link } from 'react-router-dom';
import { saveFile } from '../../utils/file';
import { UserSessionModal } from '../../components/Dashboard/WebsitesGroups/UserSessionModal';

export const WebsitesGroups = () => {
  const [groups, setGroups] = useState([]);

  const [selectedSession, setSelectedSession] = useState(null);

  const handleShowUserSession = (session) => {
    setSelectedSession(session);
  };

  useEffect(() => {
    getAllWebsitesGroups().then((data) => setGroups(data));
  }, []);

  const onDelete = (groupId) => {
    setGroups(groups.filter((g) => g.id !== groupId));
  };

  const handleExportSamples = () => {
    downloadWebsiteSamples().then((blob) => {
      saveFile('muestras.csv', blob);
    });
  };

  return (
    <div className="w-3/4 mx-auto p-8">
      <h1 className="text-center text-3xl font-bold">Grupos</h1>
      <div className="my-4">
        <Link className="underline text-blue-600" to="/dashboard/groups/new">
          Crear Variante
        </Link>
        <Link className="underline text-blue-600 mx-4" to="/dashboard/websites">
          Sitios
        </Link>
        <Link
          className="underline text-blue-600 mx-4"
          to="/dashboard/user_sessions"
        >
          Usuarios
        </Link>
        <button
          className="underline text-blue-600"
          type="button"
          onClick={handleExportSamples}
        >
          Exportar muestras
        </button>
      </div>
      <div className="my-4">
        {groups.map((group) => (
          <WebsiteGroup
            key={group.id}
            group={group}
            onDelete={onDelete}
            onShowUserSession={handleShowUserSession}
          />
        ))}
      </div>
      {selectedSession && (
        <UserSessionModal
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
        />
      )}
    </div>
  );
};
