export const Room = ({
  title,
  img,
  children,
  fullPrice,
  price,
  taxes,
  onClick,
}) => {
  return (
    <div className="my-2 border border-gray-400 rounded">
      <div className="flex justify-between">
        <div className="w-1/4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>

        <div className="w-1/2">
          <a className="underline font-medium text-xl text-teal-600">{title}</a>
          <div className="my-2">{children}</div>
        </div>

        <div className="w-1/5 py-4">
          <h5 className="text-xl my-1 line-through text-gray-500">
            $ {fullPrice}
          </h5>
          <h5 className="text-xl my-1 font-medium">$ {price}</h5>

          <p className="text-sm text-gray-500 my-2">
            +$ {taxes} impuestos y tasas
          </p>
          <a
            href="hotel_rooms_co.html"
            onClick={onClick}
            className="bg-teal-600 text-xl hover:bg-teal-700 p-2 my-2 inline-block rounded text-white"
          >
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
};
