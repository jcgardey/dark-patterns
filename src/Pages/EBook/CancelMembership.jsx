import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { finishTask } from '../../utils/dark_patterns';
import { FinishedTask } from '../../components/FinishedTask';

const RadioItem = ({ label, selected, onChange }) => (
  <div className="flex items-center my-3">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id={label.replaceAll(' ', '')}
      checked={selected == label.replaceAll(' ', '')}
      onChange={() => onChange(label.replaceAll(' ', ''))}
    />
    <label
      className="text-sm mx-1 text-gray-800"
      htmlFor={label.replaceAll(' ', '')}
    >
      {label}
    </label>
  </div>
);

export const CancelMembership = ({}) => {
  const navigate = useNavigate();

  const [option, setOption] = useState('');
  const [error, setError] = useState(false);
  const [membershipCancelled, setMembershipCancelled] = useState(false);

  const dark = localStorage.getItem('dark') === 'true';

  const onSubmit = (e) => {
    e.preventDefault();
    if (!dark) {
      setMembershipCancelled(true);
      finishTask('EBook');
    } else if (option !== '') {
      navigate('/ebook/books_offer');
    } else {
      setError(true);
    }
  };

  return (
    <div className="membership survey">
      <h1 className="text-3xl my-8">Antes de que te vayas...</h1>
      <form onSubmit={onSubmit}>
        <legend className="text-xl my-4">
          ¿Cuál de los siguientes motivos te llevó a cancelar tu membresía?
        </legend>
        {error && (
          <p className="text-red-500 font-medium my-2">
            Por favor, eliga una opcion
          </p>
        )}
        <RadioItem
          selected={option}
          onChange={setOption}
          label={'Tengo problemas técnicos'}
        />
        <RadioItem
          selected={option}
          onChange={setOption}
          label={'No uso ebookworld lo suficiente'}
        />
        <RadioItem
          selected={option}
          onChange={setOption}
          label={'Esta suscripción es demasiado cara'}
        />
        <RadioItem
          selected={option}
          onChange={setOption}
          label={'No puedo encontrar el contenido específico que quiero leer'}
        />
        <RadioItem
          selected={option}
          onChange={setOption}
          label={'Otros problemas'}
        />

        <div className="my-1 relative">
          <textarea
            className="w-full border border-gray-300 rounded py-8 px-2"
            id="floatingTextarea2"
          ></textarea>
          <label
            className="absolute top-0 left-0 p-2 text-sm text-gray-600"
            htmlFor="floatingTextarea2"
          >
            Por favor explicanos los motivos
          </label>
        </div>
        {dark ? (
          <button
            type="submit"
            className="my-2 underline text-sm text-fuchsia-500"
          >
            Enviar y continuar la cancelación
          </button>
        ) : (
          <button
            className="bg-fuchsia-500 text-lg text-white p-2 rounded"
            type="submit"
          >
            Cancelar membresía
          </button>
        )}
      </form>
      <FinishedTask show={membershipCancelled} />
    </div>
  );
};
