import { Link } from 'react-router-dom';
import { PageTitle, PrimaryButton } from '../../components/Passenger/common';
import { useTranslation } from 'react-i18next';


export const Subscriber =({}) => {
  const { t } = useTranslation();
  return (
  <div className="flex bg-gray-200 px-12 pb-20 pt-5 mt-20">
  
    <div className="w-4/12 pt-10">
      <h1 className="text-2xl font-bold text-green-700">Subscribe now and get the best deals</h1>
      <p>Never miss a sale! </p>
    </div>
  
    <div className="w-4/12 pt-10 pl-10">
      <ul className="list-disc">
        <li>Learn about latest deals</li>
        <li>Be the first to get promotions</li>
        <li>Learn about new destinations</li>
      </ul>
    </div>
  
    <div className="w-4/12">
      <div className="form-field">
        <label className="form-label">Email</label>
        <input name="email" type="text" className="form-input" />
      </div>
      <PrimaryButton type="submit">{t('Checkin.Passenger.Subscribe')}</PrimaryButton>
    </div>
    
  </div>
  );
};