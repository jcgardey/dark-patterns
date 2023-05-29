import { useState } from 'react';
import { CheckIcon } from './CheckIcon';
import { differenceInDays } from '../../utils/date';
import { ProtectionItem } from '../../Components/CarRent/ProtectionItem';
import { ProtectionModal } from '../../Components/CarRent/ProtectionModal';

const OrderItem = ({ description }) => (
  <div className="flex justify-between my-2">
    <CheckIcon />
    <p className="w-3/4">{description}</p>
  </div>
);

export const SelectProtection = () => {
  const reservation = JSON.parse(localStorage.getItem('reservation'));

  const [protection, setProtection] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const totalPrice = () =>
    differenceInDays(
      new Date(reservation.endDate),
      new Date(reservation.startDate)
    ) *
    (reservation.vehicle.price + (protection?.price || 0));

  const onNext = () => {
    setShowModal(protection === null);
  };

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
            <button
              className="w-full bg-blue-900 text-white p-2"
              onClick={onNext}
            >
              Next
            </button>
            {showModal && (
              <ProtectionModal onClose={() => setShowModal(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
