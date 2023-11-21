import { useTranslation } from 'react-i18next';
import confirmation from '../assets/CarRental/confirmation.png';

export const Confirmation = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full mx-auto">
      <img className="w-48 mx-auto my-4" src={confirmation} />
      <p className="italic my-2 text-center text-lg">
        {t('Rental.Review.Confirmation.Close')}
      </p>
    </div>
  );
};
