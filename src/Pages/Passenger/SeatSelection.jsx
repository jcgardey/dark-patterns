import { Link, useNavigate } from 'react-router-dom';
import './SeatSelection.css';
import { Seat } from '../../components/Passenger/Seat';
import { SeatsRow } from '../../components/Passenger/SeatsRow';
import { useState } from 'react';
import { seatRows } from './seats';
import { PageTitle, PrimaryButton } from '../../components/Passenger/common';
import { useTranslation } from 'react-i18next';

export const SeatSelection = () => {
  const [seat, setSeat] = useState(localStorage.getItem('seat-id'));
  const navigate = useNavigate();

  const { t } = useTranslation();

  const dark = localStorage.getItem('dark') == 'true';

  const saveSeat = (e) => {
    e.preventDefault();
    if (dark && seat !== null) {
      let price = 10000;
      if (seat.isVIP) price = 30000;
      if (seat.save) price = 6000;
      localStorage.setItem('seat-price', price);
      localStorage.setItem('seat-id', seat.value);
      navigate('/check_in/summary');
    } else if (!dark) {
      skipSeat();
      navigate('/check_in/summary');
    }
  };

  const skipSeat = () => {
    localStorage.setItem('seat-price', 0);
    localStorage.setItem('seat-id', null);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-3/4">
        <PageTitle>{t('Checkin.Seat.Title')}</PageTitle>
        <form id="seatSelection" onSubmit={saveSeat}>
          <div className="flex">
            <div className="plane">
              <div className="exit exit--front fuselage"></div>
              <div className="cabin fuselage">
                {seatRows.map((row, i) => (
                  <SeatsRow
                    key={i}
                    number={i + 1}
                    isVIP={row.isVIP}
                    seats={row.seats}
                    onSelect={setSeat}
                    selected={seat}
                  />
                ))}
              </div>
              <div className="exit exit--back fuselage"></div>
            </div>
            <div className="legend w-1/2">
              <h2 className="font-bold text-2xl">{t('Checkin.Seat.Title')}</h2>
              <dl>
                <dt>
                  <Seat value={'NN'} isVIP={true} />
                </dt>
                <dd>
                  {t('Checkin.Seat.Preferential')}{' '}
                  <strong>(+ ARS 30.000)</strong>
                </dd>
                <dt>
                  <Seat value={'NN'} isVIP={false} />
                </dt>
                <dd>
                  {t('Checkin.Seat.Regular')} <strong>(+ ARS 10.000)</strong>
                </dd>
                <dt>
                  <Seat value={'NN'} isVIP={false} save={true} />
                </dt>
                <dd>
                  {t('Checkin.Seat.Cheap')} <strong>(+ ARS 6.000)</strong>
                </dd>
                <dt>
                  <div className="seat reference">
                    <input
                      type="radio"
                      name="seat"
                      disabled
                      id="10F"
                      value="10F"
                    />
                    <label htmlFor="10F">NN</label>
                  </div>
                </dt>
                <dd>{t('Checkin.Seat.Occupied')}</dd>
              </dl>
            </div>
          </div>
          <div className="my-6 flex buttons justify-around items-center">
            {dark && (
              <div className="w-1/2 skip">
                <Link to="/check_in/summary" onClick={skipSeat}>
                  {t('Checkin.Seat.NoSeat')}
                </Link>
              </div>
            )}
            <div className="w-1/3">
              <PrimaryButton
                className="passenger"
                disabled={dark && seat === null}
              >
                {t('Checkin.Seat.Continue')}
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
