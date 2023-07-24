export const Modal = ({ title, children, onClose }) => (
  <div className="w-full h-full top-0 left-0 fixed z-50 bg-gray-900/80">
    <div className="w-1/2 mx-auto my-24 p-4 bg-white drop-shadow rounded">
      {!!onClose && (
        <div className="absolute top-1.5 right-1.5">
          <button onClick={onClose}>X</button>
        </div>
      )}
      <div>
        <h2 className="text-center text-2xl">{title}</h2>
      </div>
      <div className="mx-auto my-4">{children}</div>
    </div>
  </div>
);
