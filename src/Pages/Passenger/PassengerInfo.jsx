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
    <div className="w-11/12 mx-auto">
      <div className="w-3/4">
        <PageTitle>{t('Checkin.Passenger.Title')}</PageTitle>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="flex justify-between">
            <div className="w-2/5">
              <Input
                name={'name'}
                label={t('Checkin.Passenger.Name')}
                register={register}
                rules={nameRules}
                errors={errors.name}
              />
            </div>
            <div className="w-2/5">
              <Input
                name={'surname'}
                label={t('Checkin.Passenger.Surname')}
                register={register}
                rules={nameRules}
                errors={errors.surname}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-2/5">
              <DateSelects
                label={t('Checkin.Passenger.Birthdate')}
                name={'fecha_nacimiento'}
                years={range(1925, 2022).reverse()}
                control={control}
                rules={{ required: true }}
                errors={errors}
              />
            </div>
            <div className="w-2/5">
              <RadioSet
                label={t('Checkin.Passenger.Gender.Label')}
                name={'sex'}
                className={'passenger-radio'}
                inline={true}
                options={[
                  t('Checkin.Passenger.Gender.Male'),
                  t('Checkin.Passenger.Gender.Female'),
                ]}
                register={register}
                required={true}
                errors={errors.sex}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/4">
              <Select
                name={'id_type'}
                label={t('Checkin.Passenger.IdType')}
                disabled={true}
                defaultValue={t('Checkin.Passenger.Passport')}
                control={control}
                options={[t('Checkin.Passenger.Passport')]}
              />
            </div>
            <div className="w-1/4">
              <Input
                name={'id_number'}
                label={t('Checkin.Passenger.IdNumber')}
                register={register}
                rules={{
                  required: true,
                  pattern: {
                    value: /^(?!^0+$)[a-zA-Z0-9]{5,20}$/,
                    message: 'Ingrese un numero de document valido',
                  },
                }}
                errors={errors.id_number}
              />
            </div>
            <div className="w-1/4">
              <Select
                name={'id_country'}
                label={t('Checkin.Passenger.IssueCountry')}
                control={control}
                rules={{ required: true }}
                options={countryNames()}
                errors={errors.id_country}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3">
              <DateSelects
                label={t('Checkin.Passenger.DueDate')}
                name={'id_due_date'}
                years={range(2022, 2026)}
                control={control}
                rules={{ required: true }}
                errors={errors}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3">
              <Select
                name={'country'}
                label={t('Checkin.Passenger.Nationality')}
                control={control}
                rules={{ required: true }}
                options={countryNames()}
                errors={errors.country}
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="w-1/3">
              <PrimaryButton type="submit">
                {t('Checkin.Passenger.SelectSeat')}
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
