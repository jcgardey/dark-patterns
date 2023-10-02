import { useNavigate } from 'react-router-dom';

const RadioItem = ({ label }) => (
  <div className="flex items-center my-3">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id={label.trim()}
    />
    <label className="text-sm mx-1 text-gray-800" htmlFor={label.trim()}>
      {label}
    </label>
  </div>
);

export const CancelMembership = ({}) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/ebook/books_offer');
  };

  return (
    <div className="membership survey">
      <h1 className="text-3xl my-8">Antes de que te vayas...</h1>
      <form onSubmit={onSubmit}>
        <legend>
          ¿Cuál de los siguientes motivos te llevó a cancelar tu membresía?
        </legend>
        <RadioItem label={'Tengo problemas técnicos'} />
        <RadioItem label={'No uso ebookworld lo suficiente'} />
        <RadioItem label={'Esta suscripción es demasiado cara'} />
        <RadioItem
          label={'No puedo encontrar el contenido específico que quiero leer'}
        />
        <RadioItem label={'Otros problemas'} />

        <div className="my-1 relative">
          <textarea
            className="w-full border border-gray-300 rounded py-8 px-2"
            id="floatingTextarea2"
          ></textarea>
          <label
            className="absolute top-0 left-0 p-2 text-sm text-gray-600"
            for="floatingTextarea2"
          >
            Por favor explicanos los motivos
          </label>
        </div>
        <button
          type="submit"
          className="my-2 underline text-sm text-fuchsia-500"
        >
          Enviar y continuar la cancelación
        </button>
      </form>
    </div>
  );
};
