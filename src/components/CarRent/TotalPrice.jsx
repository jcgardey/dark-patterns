export const TotalPrice = ({ price }) => (
  <div className="mx-2 my-4 flex justify-between font-bold text-lg">
    <p>Total</p>
    <p className="font-bold text-blue-500">${price}</p>
  </div>
);
