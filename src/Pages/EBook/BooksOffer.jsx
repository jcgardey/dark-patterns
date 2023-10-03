import { useState } from 'react';
import { Modal } from '../../Components/Modal';
import { MembershipCancelled } from '../../components/EBook/MembershipCancelled';

export const BooksOffer = () => {
  const [membershipCancelled, setMembershipCancelled] = useState(false);

  return (
    <div className="membership offer">
      <h3 className="text-3xl my-8">Antes de que te vayas...</h3>
      <div className="flex justify-center">
        <div className="w-2/5 item">
          <i className="fa-solid fa-sharp fa-calendar-days"></i>
          <h6>Extender el Período Gratuito</h6>
          <p className="text-sm text-gray-500">
            Quedate con nosotros y ampliaremos tu prueba gratuita 30 días
            adicionales.
          </p>
          <button
            type="button"
            className="bg-fuchsia-500 rounded p-2 text-lg text-white hover:bg-fuchsia-600 border border-fuchsia-600"
          >
            Obtener 30 días más
          </button>
        </div>
        <div className="w-2/5 item">
          <i className="fa-solid fa-sharp fa-medal"></i>
          <h6>Probar Ebookworld Lite por $4.99/Mes</h6>
          <p className="text-sm text-gray-500">
            Conservarás el acceso a una selección limitada de libros y
            audiolibros, junto con acceso ilimitado a Instantáneas, documentos,
            noticias, revistas y partituras.
          </p>
          <button
            type="button"
            className="bg-fuchsia-500 rounded p-2 text-lg text-white hover:bg-fuchsia-600 border border-fuchsia-600"
          >
            Probar Ebookworld Lite
          </button>
        </div>
      </div>
      <p className="cancel">
        ¿Aún prefieres cancelar?{' '}
        <button
          className="underline text-fuchsia-500"
          onClick={() => setMembershipCancelled(true)}
        >
          Finalizar cancelación
        </button>
      </p>
      {membershipCancelled && (
        <Modal title="Membresia cancelada">
          <MembershipCancelled />
        </Modal>
      )}
    </div>
  );
};
