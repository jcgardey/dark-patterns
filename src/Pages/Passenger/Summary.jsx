import { useTranslation } from 'react-i18next';
import {
  BackButton,
  PageTitle,
  PrimaryButton,
} from '../../components/Passenger/common';
import { useEffect, useState } from 'react';
import { finishTask } from '../../utils/dark_patterns';
import { FinishedTask } from '../../components/FinishedTask';

export const Summary = () => {
  let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  
  const currencyFractionDigits = new Intl.NumberFormat('en-US',formatting_options).resolvedOptions().maximumFractionDigits;
  const total = (parseInt(localStorage.getItem('seat-price'))  + 1150 ).toLocaleString('en-US', {
      maximumFractionDigits: currencyFractionDigits 
  });
  const seatPrice = (localStorage.getItem('seat-price') ).toLocaleString('en-US', {
    maximumFractionDigits: currencyFractionDigits 
  });

  const { t } = useTranslation();
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    document.title = t('Checkin.Summary.Title');
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    finishTask('Air Somewhere');
    setFinished(true);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-3/4">
        <PageTitle>{t('Checkin.Summary.Title')}</PageTitle>
        <form onSubmit={onSubmit}>
          <div className="plane w-1/2 mx-auto">
            <div className="summary my-4">
              <div className="flex justify-between my-4">
                <p>Ticket</p>
                <p>USD 800</p>
              </div>
              <div className="flex justify-between my-4">
                <p>{t('Checkin.Summary.Taxes')}</p>
                <p>USD 350</p>
              </div>
              <div className="flex justify-between my-4">
                <p>{t('Checkin.Summary.Seat')}</p>
                <p id="seatPrice">USD {seatPrice}</p>
              </div>
              <div className="flex justify-between summary-total my-4 text-2xl">
                <p>Total</p>
                <p id="tktTotal">USD {total}</p>
              </div>
            </div>
          </div>
          <div className="flex my-8 buttons justify-center">
            <div className="w-1/3 mx-4">
              <BackButton to="/check_in/seat" className="passenger back-button">
                {t('Checkin.Summary.Back')}
              </BackButton>
            </div>
            <div className="w-1/4 mx-4">
              <PrimaryButton type="submit">
                {t('Checkin.Summary.Continue')}
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
      <FinishedTask show={finished} />
    </div>
  );
};
