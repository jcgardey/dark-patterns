import dayjs from 'dayjs';
import { Modal } from '../../Modal';

export const UserSessionModal = ({ session, onClose }) => {
  return (
    <Modal title="Sesión de usuario" onClose={onClose}>
      <div className="flex flex-col gap-2">
        <p className="w-1/3">Email: {session.email}</p>
        <p className="w-1/3">Edad: {session.age}</p>
        <p className="w-1/3">G&eacute;nero: {session.gender}</p>
        <p className="w-1/3">Pa&iacute;s: {session.country}</p>
        <p className="w-1/3">Compras mensuales: {session.purchases}</p>
      </div>
      <div className="my-4">
        <div className="flex items-center">
          <p className="font-bold w-1/3">Sitio</p>
          <p className="font-bold w-1/3">Fecha</p>
          <p className="font-bold w-1/3">Duraci&oacute;n</p>
        </div>
        {session.samples.map((s) => (
          <div key={s.id} className="my-4 flex items-center">
            <p className="w-1/3">
              {s.website.name} - {s.website.is_dark ? 'DP' : 'NDP'}
            </p>
            <p className="w-1/3">
              {dayjs(s.start).format('DD/MM/YYYY HH:mm:ss')}
            </p>
            <p className="w-1/3">
              {`${dayjs(s.end).diff(dayjs(s.start), 'minutes')}:${
                dayjs(s.end).diff(dayjs(s.start), 'seconds') % 60
              }`}
            </p>
          </div>
        ))}
      </div>
    </Modal>
  );
};
