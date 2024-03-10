import { useEffect, useState } from 'react';
import { getAllWebsitesGroups } from '../../services/dashboard';
import { WebsiteGroup } from '../../components/Dashboard/WebsitesGroups/WebsiteGroup';

export const WebsitesGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    getAllWebsitesGroups().then((data) => setGroups(data));
  });

  return (
    <div className="m-8">
      <h1 className="text-center text-3xl font-bold">Grupos</h1>
      {groups.map((group) => (
        <WebsiteGroup key={group.id} group={group} />
      ))}
    </div>
  );
};
