import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { DateSelects } from '../../components/Form/DateSelects';
import { Input } from '../../components/Form/Input';
import { RadioSet } from '../../components/Form/RadioSet';
import { Select } from '../../components/Form/CustomSelect';
import { countries, countryNames, range } from '../../components/Form/utils';
import { PageTitle, PrimaryButton } from '../../components/Passenger/common';

import '../../components/Form/Form.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const PassengerInfo = ({}) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation();

  const nameRules = {
    required: true,
    minLength: {
      value: 2,
      message: 'Debe tener entre 2 y 29 caracteres',
    },
    maxLength: {
      value: 29,
      message: 'Debe tener entre 2 y 29 caracteres',
    },
  };

  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/check_in/seat');
  };

  const onError = () => {
    // do something
  };

  useEffect(() => {
    document.title = t('Checkin.Passenger.Title');
  }, []);

  return (
    <div className="w-100">
      
      <div className="w-11/12 mx-auto my-4">
        <div className="w-3/4">
          <PageTitle>{t('Checkin.Passenger.Title')}</PageTitle>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="flex">
              <div className="w-1/5 mr-10">
                <Input
                  name={'name'}
                  label={t('Checkin.Passenger.Code')}
                  register={register}
                  rules={nameRules}
                  errors={errors.name}
                />
              </div>
              <div className="w-1/5">
                <Input
                  name={'surname'}
                  label={t('Checkin.Passenger.Surname')}
                  register={register}
                  rules={nameRules}
                  errors={errors.name}
                />
              </div>
            </div>
  
            <div className="flex">
              <div className="w-1/3">
                <PrimaryButton type="submit">
                  {t('Checkin.Passenger.FindReservation')}
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <div className="flex bg-gray-200 px-12 pb-20 pt-5 mt-20">
        <div className="w-4/12 pt-10">
          <h1 className="text-2xl font-bold text-green-700">Subscribe now and get the best deals</h1>
          <p>Never miss a sale!</p>
        </div>
        
        <div className="w-4/12 pt-10 pl-10">
          <ul className="list-disc">
            <li>Learn about latest deals</li>
            <li>Be the first to get promotions</li>
            <li>Learn about new destinations</li>
          </ul>  
        </div>
    
        <div className="w-4/12">
          <Input
            name={'email'}
            label={t('Checkin.Passenger.Email')}
            register={register}
            rules={nameRules}
            errors={errors.name}
          />
          <PrimaryButton type="submit">
            {t('Checkin.Passenger.Subscribe')}
          </PrimaryButton>
        </div>
      </div>
        
    </div>
  );
};
