import { useEffect, useState } from 'react';
import { getAllWebsitesGroups } from '../../services/dashboard';
import { WebsiteGroup } from '../../components/Dashboard/WebsitesGroups/WebsiteGroup';
import { Link } from 'react-router-dom';

export const WebsitesGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllWebsitesGroups().then((data) => setGroups(data));
  }, []);

  const onDelete = (groupId) => {
    setGroups(groups.filter((g) => g.id !== groupId));
  };

  return (
    <div className="w-1/2 mx-auto p-8">
      <h1 className="text-center text-3xl font-bold">Grupos</h1>
      <div className="my-4">
        <Link className="underline text-blue-600" to="/dashboard/websites/new">
          Crear Variante
        </Link>
      </div>
      <div className="my-4">
        {groups.map((group) => (
          <WebsiteGroup key={group.id} group={group} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
