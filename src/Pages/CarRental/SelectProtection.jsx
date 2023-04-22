import { useState } from 'react';
import { CheckIcon } from './CheckIcon';
import { differenceInDays } from '../../utils/date';

const ProtectionItem = ({ title, items, price, setProtection, protection }) => {
  const changeProtection = () => {
    protection?.title !== title
      ? setProtection({ title, price })
      : setProtection(null);
  };

  return (
    <div
      className={`p-2 shadow m-4 cursor-pointer${
        protection?.title === title ? ' border-2 border-blue-950' : ''
      }`}
      onClick={changeProtection}
    >
      <h4 className="text-center text-lg font-bold">{title}</h4>
      <div className="my-4">
        {items.map((item, i) => (
          <p key={i} className="my-2">
            {item}
          </p>
        ))}
      </div>
      <div className="my-2">
        <p className="text-center font-bold text-blue-500">${price} / day</p>
      </div>
    </div>
  );
};

const OrderItem = ({ description }) => (
  <div className="flex justify-between my-2">
    <CheckIcon />
    <p className="w-3/4">{description}</p>
  </div>
);

export const SelectProtection = () => {
  const reservation = JSON.parse(localStorage.getItem('reservation'));

  const [protection, setProtection] = useState(null);

  const totalPrice = () =>
    differenceInDays(
      new Date(reservation.endDate),
      new Date(reservation.startDate)
    ) *
    (reservation.vehicle.price + (protection?.price || 0));

  return (
    <div className="w-4/5 mx-auto py-4">
      <h2 className="text-2xl text-black font-semibold">
        Choose your protection
      </h2>
      <div className="flex justify-between">
        <div className="my-4 w-1/2">
          <ProtectionItem
            title={'Basic Cover Protection'}
            protection={protection}
            setProtection={setProtection}
            items={['Avoid paying for damage or theft of your rental vehicle.']}
            price={1.39}
          />

          <ProtectionItem
            title={'Standard Cover Protection'}
            protection={protection}
            setProtection={setProtection}
            items={[
              'Avoid paying for damage or theft of your rental vehicle.',
              'Protect yourself from third party accident or injury claims up to $1M.',
            ]}
            price={16.99}
          />

          <ProtectionItem
            title={'Full Cover Protection'}
            protection={protection}
            setProtection={setProtection}
            items={[
              'Avoid paying for damage or theft of your rental vehicle.',
              'Protect yourself from third party accident or injury claims up to $1M.',
              'Free 24/7 roadside assistance for flat tires, lost keys and dead battery.',
            ]}
            price={23.29}
          />
        </div>
        <div className="w-1/4">
          <div className="shadow p-2">
            <div className="border-b p-1 my-2">
              <h4 className="text-center font-medium text-xl">
                {reservation.vehicle.name}
              </h4>
              <p className="my-1 italic text-md">
                {reservation.vehicle.description}
              </p>
            </div>
            <div className="border-b p-1 my-2">
              <OrderItem description="Unlimited miles" />
              <OrderItem description="Tire and Battery Fee" />
              <OrderItem description="Rental surcharge" />
              <OrderItem description="Vehicle License Fee" />
              {protection !== null && (
                <OrderItem description={protection.title} />
              )}
            </div>
            <div className="mx-2 my-4 flex justify-between font-bold text-lg">
              <p>Total</p>
              <p className="font-bold text-blue-500">
                ${totalPrice().toFixed(2)}
              </p>
            </div>
            <button className="w-full bg-blue-900 text-white p-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

