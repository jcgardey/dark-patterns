import { Link } from 'react-router-dom';

export const Account = () => {
  return (
    <>
      <h1 className="text-2xl my-4 font-medium">
        Información de Cuenta
      </h1>

      <div className="flex membership-options">
        <div className="w-1/5">
          <p>Email</p>
        </div>
        <div className="w-3/4">
          <p>
            jhernandez@gmail.com
          </p>
        </div>
        
        <div className="w-1/5">
          <p>Tipo de Cuebnta</p>
        </div>
        <div className="w-3/4">
          <p>
            Personal
          </p>
        </div>
      </div>

      <div className="flex membership-options">
        <div className="w-1/5">
          <p>Contraseña</p>
        </div>
        <div className="w-3/4">
          <p>********</p>
        </div>
      </div>
    </>
  );
};
