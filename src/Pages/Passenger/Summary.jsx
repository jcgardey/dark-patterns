import { useTranslation } from 'react-i18next';
import {
  BackButton,
  PageTitle,
  PrimaryButton,
} from '../../components/Passenger/common';

export const Summary = () => {
  let formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  };
  let dollarString = new Intl.NumberFormat('en-US', formatting_options);
  const seatPrice = dollarString.format(localStorage.getItem('seat-price'));
  const total = dollarString.format(
    parseInt(localStorage.getItem('seat-price')) + 240000
  );

  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('Checkin.Summary.Title');
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-3/4">
        <PageTitle>{t('Checkin.Seat.Title')}</PageTitle>
        <form>
          <div className="plane w-1/2 mx-auto">
            <h2 className="text-2xl font-bold">{t('Checkin.Summary.Title')}</h2>
            <div className="summary my-4">
              <div className="flex justify-between my-4">
                <p>Ticket</p>
                <p>$160.000</p>
              </div>
              <div className="flex justify-between my-4">
                <p>{t('Checkin.Summary.Taxes')}</p>
                <p>$80.000</p>
              </div>
              <div className="flex justify-between my-4">
                <p>{t('Checkin.Summary.Seat')}</p>
                <p id="seatPrice">{seatPrice}</p>
              </div>
              <div className="flex justify-between my-4">
                <p>{t('Checkin.Summary.Discount')}</p>
                <p>$0</p>
              </div>
              <div className="flex justify-between summary-total my-4 text-2xl">
                <p>Total</p>
                <p id="tktTotal">{total}</p>
              </div>
            </div>
          </div>
          <div className="flex my-8 buttons justify-center">
            <div className="w-1/4 mx-4">
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
    </div>
  );
};
