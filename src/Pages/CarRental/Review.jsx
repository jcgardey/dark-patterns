import { Link } from 'react-router-dom';
import { OrderItem } from '../../Components/CarRent/OrderItem';
import { TotalPrice } from '../../Components/CarRent/TotalPrice';
import { BackIcon } from '../../Components/Icons/BackIcon';
import { useTranslation } from 'react-i18next';
import { dateString } from '../../utils/date';
import { Modal } from '../../Components/Modal';
import { ReservationConfirmed } from '../../components/CarRent/ReservationConfirmed';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../components/CarRent/TextInput';
import { data } from 'autoprefixer';

const Reservation = () => {
  const reservation = JSON.parse(localStorage.getItem('reservation'));
  const { t, i18n } = useTranslation();

  return (
    <div className="shadow-lg p-4">
      <div className="flex border-b items-center">
        <p className="text-xl font-bold">{reservation.vehicle.name}</p>
        <img className="w-24 mx-auto" src={reservation.vehicle.img} />
      </div>
      <div className="border-b p-2">
        <p className="text-center font-semibold my-2">{reservation.location}</p>
        <p className="text-sm">
          {dateString(new Date(reservation.startDate), i18n.language)}
        </p>
        <p className="text-sm">
          {dateString(new Date(reservation.endDate), i18n.language)}
        </p>
      </div>
      {reservation.protection && (
        <div className="border-b">
          <OrderItem description={t('Rental.Review.Order.Unlimited')} />
          <OrderItem description={t('Rental.Review.Order.Tires')} />
          <OrderItem description={t('Rental.Review.Order.Rental')} />
          <OrderItem description={t('Rental.Review.Order.License')} />
          <OrderItem description={reservation.protection?.title} />
        </div>
      )}
      <TotalPrice price={reservation.total} />
    </div>
  );
};

export const Review = ({}) => {
  const { t } = useTranslation();
  const [confirmed, setConfirmed] = useState(false);
  const onSubmit = (data) => {
    setConfirmed(true);
  };

  useEffect(() => {
    document.title = t('Rental.Review.Title');
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const inputClass = 'w-full h-10 border-2 border-sky-800 rounded p-2';

  return (
    <div className="w-10/12 mx-auto py-4">
      <div className="flex items-center">
        <Link to="/car_rental/protection">
          <BackIcon />
        </Link>
        <h2 className="text-2xl text-black font-semibold">
          {t('Rental.Review.Title')}
        </h2>
      </div>
      <div className="flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-6 w-1/3">
            <h4 className="text-xl">{t('Rental.Review.Driver.Title')}</h4>
            <div className="my-4">
              <div className="my-3">
                <label className="">{t('Rental.Review.Driver.Name')}</label>
                <TextInput
                  name={'driver'}
                  className={inputClass}
                  register={register}
                  rules={{ required: true }}
                  errors={errors.driver}
                />
              </div>
              <div className="my-3">
                <label>{t('Rental.Review.Driver.Email')}</label>
                <TextInput
                  name={'email'}
                  className={inputClass}
                  register={register}
                  rules={{
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  }}
                  errors={errors.email}
                />
              </div>
            </div>
          </div>
          <div className="my-12">
            <h4 className="text-xl">{t('Rental.Review.Payment.Method')}</h4>
            <div className="flex my-2">
              <div className="mr-2">
                <label>{t('Rental.Review.Payment.Card.Number')}</label>
                <TextInput
                  name={'card.number'}
                  className={inputClass}
                  register={register}
                  rules={{
                    required: true,
                    pattern:
                      /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
                  }}
                  errors={errors.card?.number}
                />
              </div>
              <div className="mr-8">
                <label>{t('Rental.Review.Payment.Card.Holder')}</label>
                <TextInput
                  name={'card.holder'}
                  className={inputClass}
                  register={register}
                  rules={{ required: true }}
                  errors={errors.card?.holder}
                />
              </div>
            </div>
            <div className="flex my-4">
              <div className="mr-2 w-1/12">
                <label>{t('Rental.Review.Payment.Card.Month')}</label>
                <TextInput
                  name={'card.month'}
                  className={inputClass}
                  register={register}
                  rules={{ required: true }}
                  errors={errors.card?.month}
                />
              </div>
              <div className="mr-2 w-1/12">
                <label>{t('Rental.Review.Payment.Card.Year')}</label>
                <TextInput
                  name={'card.year'}
                  className={inputClass}
                  register={register}
                  rules={{ required: true }}
                  errors={errors.card?.year}
                />
              </div>
              <div className="mr-2 w-1/4">
                <label>{t('Rental.Review.Payment.Card.CVV')}</label>
                <TextInput
                  name={'card.cvv'}
                  className={inputClass}
                  register={register}
                  rules={{ required: true }}
                  errors={errors.card?.cvv}
                />
              </div>
            </div>
          </div>
          <button className="w-1/4 bg-sky-800 hover:bg-sky-700 text-white text-xl rounded p-2">
            {t('Rental.Review.Book')}
          </button>
        </form>
        <div className="w-1/3">
          <Reservation />
        </div>
      </div>
      {confirmed && (
        <Modal title={t('Rental.Review.Confirmation.Title')}>
          <ReservationConfirmed email={getValues('email')} />
        </Modal>
      )}
    </div>
  );
};
