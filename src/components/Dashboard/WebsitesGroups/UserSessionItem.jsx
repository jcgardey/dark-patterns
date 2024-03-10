export const UserSessionItem = ({ session }) => {
  return (
    <div className="flex">
      <p>{session.email}</p>
      <button className="mx-1 underline text-blue-600">Ver</button>
      <button className="mx-2 underline text-blue-600">Eliminar</button>
    </div>
  );
};
