import { useForm } from 'react-hook-form';
import { createUserSession } from '../services/samples';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Label = ({ children }) => (
  <label className="font-semibold block">{children}</label>
);

export const StartPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState(
    localStorage.getItem('session_id')
  );

  const onSubmit = async (data) => {
    const response = await createUserSession(data);
    localStorage.setItem('session_id', response.data.id);
    setSessionId(response.data.id);
  };

  useEffect(() => {
    if (sessionId) {
      navigate('/');
    }
  }, [sessionId]);

  return (
    <div className="w-1/3 mx-auto p-4">
      <h2 className="text-center text-2xl">Gracias por participar</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-8">
            <Label>Email</Label>
            <input
              className="w-full px-1 border-2 h-10 rounded border-sky-800"
              type="text"
              {...register('email', { required: true })}
            />
          </div>
          <div className="my-8">
            <Label>Pais</Label>
            <select
              className="w-full border-2 h-10 rounded border-sky-800"
              {...register('country', { required: true })}
            >
              <option>Argentina</option>
            </select>
          </div>
          <div className="my-8">
            <button
              className="bg-gray-700 rounded p-3 text-white"
              type="submit"
            >
              Comenzar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
