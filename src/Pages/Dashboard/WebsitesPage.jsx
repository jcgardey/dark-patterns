import { useEffect, useState } from 'react';
import { getAllWebsites } from '../../services/dashboard';
import { EditWebsiteModal } from '../../components/Dashboard/Websites/EditWebsiteModal';
import { Link } from 'react-router-dom';

export const WebsitesPage = () => {
  const [websites, setWebsites] = useState([]);

  const [selectedWebsite, setSelectedWebsite] = useState(null);

  useEffect(() => {
    getAllWebsites().then((data) => setWebsites(data));
  }, []);

  const onClose = () => {
    setSelectedWebsite(null);
  };

  const handleCreateWebsite = () => {
    setSelectedWebsite({
      name: '',
      url: '',
      instructions: '',
      ux_analyzer_token: '',
    });
  };

  return (
    <div className="w-1/2 mx-auto p-8">
      <h1 className="text-center text-3xl font-bold">Sitios</h1>
      <div className="my-4">
        <Link className="underline text-blue-600" to="/dashboard">
          Volver
        </Link>
        <button
          className="underline text-blue-600 mx-4"
          onClick={handleCreateWebsite}
        >
          Crear Sitio
        </button>
      </div>
      <div className="my-4">
        {websites.map((website) => (
          <div className="flex justify-between my-4" key={website.id}>
            <p>{website.name}</p>
            <p>{website.ux_analyzer_token}</p>
            <button
              className="p-2 bg-blue-600 text-white rounded"
              type="button"
              onClick={() => setSelectedWebsite(website)}
            >
              Editar
            </button>
          </div>
        ))}
      </div>
      {selectedWebsite && (
        <EditWebsiteModal website={selectedWebsite} onClose={onClose} />
      )}
    </div>
  );
};
