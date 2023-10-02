import { Link } from 'react-router-dom';

export const Membership = () => {
  return (
    <>
      <h1 className="text-2xl my-4 font-medium">
        Membresía y Detalles de Pago
      </h1>
      <div className="benefits">
        <h4>Lectura sin límites con tu membresía</h4>
        <ul>
          <li>
            <i className="fa-solid fa-sharp fa-book"></i>
            <p>Libros</p>
            <span>Lea bestsellers</span>
          </li>
          <li>
            <i className="fa-solid fa-sharp fa-headphones"></i>
            <p>Audiolibros</p>
            <span>Para escuchar estrenos</span>
          </li>
          <li>
            <i className="fa-solid fa-sharp fa-stopwatch"></i>
            <p>Snapshots</p>
            <span>Resúmenes de 15 minutos</span>
          </li>
          <li>
            <i className="fa-solid fa-sharp fa-file"></i>
            <p>Documentos</p>
            <span>Cargas de la comunidad</span>
          </li>
          <li>
            <i className="fa-solid fa-sharp fa-book-open"></i>
            <p>Revistas</p>
            <span>Últimas ediciones</span>
          </li>
          <li>
            <i className="fa-solid fa-sharp fa-music"></i>
            <p>Partituras</p>
            <span>Clásicos y éxitos nuevos</span>
          </li>
        </ul>
      </div>

      <div className="flex membership-options">
        <div className="w-1/5">
          <p>Plan de Membresía</p>
        </div>
        <div className="w-3/4">
          <p>
            Su plan se renovará automáticamente el 4/12/23, y se cobrarán
            USD9.99
          </p>
          <p className="my-4">
            <Link
              to="/ebook/cancel_membership"
              className="text-fuchsia-500 underline"
            >
              Cancelar mi membresía
            </Link>
          </p>
        </div>
      </div>

      <div className="flex membership-options">
        <div className="w-1/5">
          <p>Detalles de Pago</p>
        </div>
        <div className="w-3/4">
          <p>Tarjeta VISA finalizada en 9903</p>
          <p className="my-4">
            <a className="text-fuchsia-500 underline" href="#">
              Actualizar Medio de Pago
            </a>
          </p>
          <p className="my-4">
            <a className="text-fuchsia-500 underline" href="#">
              Ver Historial de Pagos
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
