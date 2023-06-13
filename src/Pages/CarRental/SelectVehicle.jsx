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
import { useTranslation } from 'react-i18next';

const Vehicle = ({ vehicle, onSelect }) => {
  const { t } = useTranslation();

  return (
    <div
      onClick={() => onSelect(vehicle)}
      className="bg-white p-4 flex w-4/5 mx-auto my-3"
    >
      <div className="w-1/3">
        <h3 className="text-blue-800 text-2xl font-bold">{vehicle.name}</h3>
        <p className="my-1 text-grey-800 italic">
          {vehicle.description} {t('Rental.Vehicle.Similar')}
        </p>
        <div className="flex my-2">
          <div className="mx-2">
            <img className="w-7 mx-auto" src={people} />
            <span>
              {t('Rental.Vehicle.Seats', { count: vehicle.capacity })}
            </span>
          </div>
          <div className="mx-2">
            <img className="w-7 mx-auto bg-red" src={bag} />
            <span>{t('Rental.Vehicle.Bags', { count: vehicle.capacity })}</span>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <img src={vehicle.img} />
      </div>
      <div className="w-1/3">
        <p className="text-2xl text-center font-bold text-blue-500 my-2">
          &#36;{t('Rental.Vehicle.Price', { price: vehicle.price })}
        </p>
        <button className="w-full bg-blue-800 text-white py-2">
          {t('Rental.Vehicle.Select')}
        </button>
      </div>
    </div>
  );
};

export const SelectVehicle = ({}) => {
  const [reservation, setReservation] = useState({});

  const navigate = useNavigate();

  const vehicles = [
    {
      name: 'Standard SUV',
      description: 'Ford Edge',
      capacity: 5,
      price: 357.15,
      img: standard_suv,
    },
    {
      name: 'Standard',
      description: 'VW Jetta',
      capacity: 5,
      price: 357.35,
      img: standard,
    },
    {
      name: 'Convertible',
      description: 'Ford Mustang',
      capacity: 4,
      price: 357.65,
      img: convertible,
    },
    {
      name: 'Pickup',
      description: 'Ford F150',
      capacity: 4,
      price: 357.65,
      img: pickup,
    },
    {
      name: 'Sporty Car',
      description: 'Dodge Challenger',
      capacity: 4,
      price: 357.65,
      img: sporty,
    },
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

  const { t, i18n } = useTranslation();

  return (
    <div className="bg-blue-950 p-4">
      <div className="mx-auto w-2/5">
        <div className="bg-blue-900 flex justify-center text-white text-lg p-1">
          <p className="mx-2">{reservation.location}</p>
          <p className="mx-2">
            {dateString(new Date(reservation.startDate), i18n.language)} -{' '}
            {dateString(new Date(reservation.endDate), i18n.language)}
          </p>
        </div>
      </div>
      <h2 className="text-3xl my-2 text-white font-bold">
        {t('Rental.SelectVehicle')}
      </h2>
      <div className="flex my-4">
        <div className="w-1/5 border border-color-white rounded p-2">
          <h3 className="text-center text-2xl text-white font-medium">
            {t('Rental.Filters')}
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
