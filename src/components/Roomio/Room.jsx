export const Room = ({
  title,
  img,
  description,
  fullPrice,
  price,
  taxes,
  freeCancellation,
  nights,
  adults,
  onClick,
}) => {
  return (
    <div className="my-2 border border-gray-400 rounded">
      <div className="flex justify-between">
        <div className="w-1/4">
          <img src={img} className="img-fluid rounded-start" alt="..." />
        </div>

        <div className="w-1/2">
          <a
            className="underline font-medium text-xl text-teal-600"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="my-2">
            <p
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {freeCancellation && (
              <p className="font-bold text-md my-1">
                FREE cancellation You can cancel later, so lock in this great
                price today.
              </p>
            )}
            <p className="my-1 text-gray-500">
              {nights} nights, {adults} adults
            </p>
          </div>
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
