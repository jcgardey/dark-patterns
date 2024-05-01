import { useForm } from 'react-hook-form';
import { createUserSession } from '../services/samples';
import { useNavigate } from 'react-router-dom';
import { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Label = ({ children }) => (
  <label className="font-semibold block">{children}</label>
);

const Input = forwardRef(({ type, name, value, onChange }, ref) => (
  <input
    className="w-full px-3 border h-12 rounded border-gray-500"
    ref={ref}
    type={type}
    name={name}
    value={value}
    onChange={onChange}
  />
));

export const StartPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState(
    localStorage.getItem('session_id')
  );

  const { t } = useTranslation();

  const onSubmit = async (data) => {
    const response = await createUserSession(data);
    localStorage.setItem('session_id', response.data.id);
    setSessionId(response.data.id);
  };

  useEffect(() => {
    if (sessionId) {
      navigate('/start');
    }
  }, [sessionId]);

  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const purchases = [
    { value: 'none', label: 'None' },
    { value: '1-3', label: '1-3' },
    { value: '4-6', label: '4-6' },
    { value: '>6', label: '>6' },
  ];

  return (
    <div className="w-1/2 mx-auto p-4">
      <h2 className="text-center text-2xl mb-4">{t('Start.Thanks')}</h2>
      <p className="mb-2">{t('Start.Briefing')}</p>
      <p>{t('Start.Briefing2')}</p>
      <p>{t('Start.Briefing3')}</p>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-8">
            <Label>{t('Start.Age')}</Label>
            <Input type="text" {...register('age', { required: true })} />
          </div>
          <div className="my-8">
            <Label>{t('Start.Gender')}</Label>
            {genders.map((gender) => (
              <div key={gender.value} className="my-3 flex gap-2">
                <label>
                  <input
                    {...register('gender', { required: true })}
                    type="radio"
                    value={gender.value}
                  /> 
                  &nbsp;
                  {t(`Start.Genders.${gender.label}`)}</label>
              </div>
            ))}
          </div>
          <div className="my-8">
            <Label>{t('Start.Purchases')}</Label>
            {purchases.map((p) => (
              <div key={p.value} className="my-3 flex gap-2">
                <label>
                  <input
                    {...register('purchases', { required: true })}
                    type="radio"
                    value={p.value}
                  />
                  &nbsp;
                  {t(`Start.PurchaseOptions.${p.label}`)}
                </label>
              </div>
            ))}
          </div>
          <div className="my-8">
            <Label>{t('Start.Country')}</Label>
            <select
              className="w-full border px-3 h-12 rounded border-gray-500 box-border"
              {...register('country', { required: true })}
            >
              <option>Argentina</option>
              <option>Deutschland</option>
              <option>España</option>
            </select>
          </div>
          <div className="my-8">
            <Label>{t('Start.Email')}</Label>
            <Input type="text" {...register('email')} />
          </div>
          <div className="my-8">
            <button
              className="bg-gray-800 rounded p-3 text-white px-8"
              type="submit"
            >
              {t('Start.Start')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
