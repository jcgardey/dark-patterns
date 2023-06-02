import { Link } from 'react-router-dom';
import { OrderItem } from '../../Components/CarRent/OrderItem';
import { TotalPrice } from '../../Components/CarRent/TotalPrice';
import { BackIcon } from '../../Components/Icons/BackIcon';

const Reservation = () => {
  const reservation = JSON.parse(localStorage.getItem('reservation'));

  const toLocalDate = (aString) =>
    new Date(aString).toLocaleDateString('en', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  return (
    <div className="shadow-lg p-4">
      <div className="flex border-b items-center">
        <p className="text-xl font-bold">{reservation.vehicle.name}</p>
        <img className="w-24 mx-auto" src={reservation.vehicle.img} />
      </div>
      <div className="border-b p-2">
        <p className="text-center font-semibold my-2">{reservation.location}</p>
        <p className="text-sm">{toLocalDate(reservation.startDate)}</p>
        <p className="text-sm">{toLocalDate(reservation.endDate)}</p>
      </div>
      {reservation.protection && (
        <div className="border-b">
          <OrderItem description={reservation.protection} />
        </div>
      )}
      <TotalPrice price={reservation.total} />
    </div>
  );
};

const Input = () => (
  <input
    className="w-full h-10 border-2 border-blue-800 rounded p-2"
    type="text"
  />
);

export const Review = ({}) => {
  return (
    <div className="w-10/12 mx-auto py-4">
      <div className="flex items-center">
        <Link to="/car_rental/protection">
          <BackIcon />
        </Link>
        <h2 className="text-2xl text-black font-semibold">Review and book</h2>
      </div>
      <div className="flex">
        <div>
          <div className="my-6 w-1/3">
            <h4 className="text-xl">Driver details</h4>
            <div className="my-4">
              <div className="my-3">
                <label className="">Name</label>
                <Input />
              </div>
              <div className="my-3">
                <label>Email</label>
                <Input />
              </div>
            </div>
          </div>
          <div className="my-12">
            <h4 className="text-xl">Payment method</h4>
            <div className="flex my-2">
              <div className="mr-2">
                <label>Card number</label>
                <Input />
              </div>
              <div className="mr-8">
                <label>Cardholder name</label>
                <Input />
              </div>
              <div className="mr-2 w-1/12">
                <label>Month</label>
                <Input />
              </div>
              <div className="mr-2 w-1/12">
                <label>Year</label>
                <Input />
              </div>
              <div className="mr-2 w-1/12">
                <label>CVV</label>
                <Input />
              </div>
            </div>
          </div>
          <button className="w-1/4 bg-blue-800 text-white text-xl rounded p-2">
            Pay and book
          </button>
        </div>
        <div className="w-1/3">
          <Reservation />
        </div>
      </div>
    </div>
  );
};
