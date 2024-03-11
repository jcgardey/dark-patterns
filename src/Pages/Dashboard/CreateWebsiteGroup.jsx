import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const CreateWebsiteGroup = () => {
  const { register, handleSubmit } = useForm();
  const [websites, setWebsites] = useState([]);

  const websitesData = {
    car_rental: {
      name: 'Car Rental',
      url: '/car_rental',
      instructions: 'Common.TaskCar',
    },
    ebook: {
      name: 'EBook',
      url: '/ebook',
      instructions: 'Common.TaskEBook',
    },
    roomio: {
      name: 'Roomio',
      url: '/roomio',
      instructions: 'Common.TaskRoomio',
    },
    air: {
      name: 'Air Somewhere',
      url: '/check_in',
      instructions: 'Common.TaskCheckin',
    },
  };

  const [newWebsite, setNewWebsite] = useState(null);

  const onNewWebsiteChange = (siteKey) => {
    setNewWebsite({ ...websitesData[siteKey] });
  };

  const addNewWebsite = () => {
    setWebsites([...websites, newWebsite]);
    setNewWebsite(null);
  };

  const onSubmit = (data) => {
    console.log({ ...data, websites });
  };

  const onDeleteWebsite = (name) => {
    setWebsites(websites.filter((w) => w.name !== name));
  };

  const labelClasses = 'block font-medium';
  const inputClasses = 'border border-gray-500 rounded w-full h-10 p-1';

  return (
    <div className="my-8 w-1/3 mx-auto">
      <Link className="underline text-blue-600" to="/dashboard">
        Dashboard
      </Link>
      <h1 className="text-center text-3xl font-medium">Crear Variante</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <label className={labelClasses}>Nombre</label>
          <input
            className={inputClasses}
            type="text"
            {...register('name', { required: true })}
          />
        </div>
        <div className="my-4">
          <label className={labelClasses}>Orden en el round robin</label>
          <select
            className={inputClasses}
            {...register('order', { required: true })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="my-8">
          <h3 className="text-lg font-medium">Agregar Sitio</h3>
          <div className="my-4">
            <select
              className={inputClasses}
              type="text"
              name="website_name"
              onChange={(e) => onNewWebsiteChange(e.target.value)}
            >
              <option value="">Elegir Sitio</option>
              <option value="air">Air Somewhere</option>
              <option value="car_rental">Car Rental</option>
              <option value="ebook">Ebook</option>
              <option value="roomio">Roomio</option>
            </select>
          </div>
          <div className="my-4">
            <button
              type="button"
              className="rounded bg-gray-700 text-white p-2"
              onClick={addNewWebsite}
            >
              Agregar sitio
            </button>
          </div>
        </div>
        <div className="my-8">
          <h3 className="text-lg font-medium">Sitios agregados</h3>
          <ol>
            {websites.map((website, i) => (
              <li className="flex w-full justify-between my-2" key={i}>
                <p className="font-light">{website.name}</p>
                <button
                  onClick={() => onDeleteWebsite(website.name)}
                  className="mx-2 underline text-blue-600"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ol>
        </div>
        <div className="my-12">
          <button
            disabled={websites.length === 0}
            className="rounded bg-sky-700 text-white p-2 disabled:opacity-70"
            type="submit"
          >
            Crear variante
          </button>
        </div>
      </form>
    </div>
  );
};
