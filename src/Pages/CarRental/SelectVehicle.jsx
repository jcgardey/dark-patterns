import convertible from '../../assets/CarRental/convertible.avif';
import pickup from '../../assets/CarRental/pickup.avif';
import sporty from '../../assets/CarRental/sporty.avif';
import standard_pickup from '../../assets/CarRental/standard_pickup.avif';
import standard from '../../assets/CarRental/standard.webp';
import standard_suv from '../../assets/CarRental/standard_suv.avif';

import people from '../../assets/CarRental/people.svg';
import bag from '../../assets/CarRental/bag.svg';
import { useEffect, useState } from 'react';
import { dateString } from '../../utils/date';
import { useNavigate } from 'react-router-dom';

const Vehicle = ({ vehicle, onSelect }) => (
  <div
    onClick={() => onSelect(vehicle)}
    className="bg-white p-4 flex w-4/5 mx-auto my-3"
  >
    <div className="w-1/3">
      <h3 className="text-blue-800 text-2xl font-bold">{vehicle.name}</h3>
      <p>Additional description</p>
      <div className="flex my-2">
        <div className="mx-2">
          <img className="w-7 mx-auto" src={people} />
          <span>{vehicle.capacity} seater</span>
        </div>
        <div className="mx-2">
          <img className="w-7 mx-auto bg-red" src={bag} />
          <span>{vehicle.capacity} bags</span>
        </div>
      </div>
    </div>
    <div className="w-1/3">
      <img src={vehicle.img} />
    </div>
    <div className="w-1/3">
      <p className="text-2xl text-center font-bold text-blue-500 my-2">
        &#36;{vehicle.price} / day
      </p>
      <button className="w-full bg-blue-800 text-white py-2">Select</button>
    </div>
  </div>
);

export const SelectVehicle = ({}) => {
  const [reservation, setReservation] = useState({});

  const navigate = useNavigate();

  const vehicles = [
    { name: 'Standard SUV', capacity: 5, price: 357.15, img: standard_suv },
    { name: 'Standard', capacity: 5, price: 357.35, img: standard },
    { name: 'Convertible', capacity: 4, price: 357.65, img: convertible },
    { name: 'Pickup', capacity: 4, price: 357.65, img: pickup },
    { name: 'Sporty Car', capacity: 4, price: 357.65, img: sporty },
    {
      name: 'Standard Pickup',
      capacity: 4,
      price: 357.65,
      img: standard_pickup,
    },
  ];

  useEffect(() => {
    document.title = 'Select a Vehicle';
    setReservation(JSON.parse(localStorage.getItem('reservation')));
  }, []);

  const onSelect = (vehicle) => {
    localStorage.setItem(
      'reservation',
      JSON.stringify({ ...reservation, vehicle })
    );
    navigate('/car_rental/protection');
  };

  return (
    <div className="bg-blue-950 p-4">
      <div className="mx-auto w-1/3">
        <div className="bg-blue-900 flex justify-center text-white text-lg p-1">
          <p className="mx-2">{reservation.location}</p>
          <p className="mx-2">
            {dateString(new Date(reservation.startDate))} -{' '}
            {dateString(new Date(reservation.endDate))}
          </p>
        </div>
      </div>
      <h2 className="text-3xl my-2 text-white font-bold">Select a Vehicle</h2>
      <div className="flex my-4">
        <div className="w-1/5 border border-color-white rounded p-2">
          <h3 className="text-center text-2xl text-white font-medium">
            Filters
          </h3>
        </div>
        <div className="w-4/5">
          {vehicles.map((vehicle, i) => (
            <Vehicle key={i} vehicle={vehicle} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </div>
  );
};

