import { Link, useNavigate } from 'react-router-dom';
import './SeatSelection.css';
import { Seat } from '../../components/Passenger/Seat';
import { SeatsRow } from '../../components/Passenger/SeatsRow';
import { useState } from 'react';
import { seatRows } from './seats';

export const SeatSelection = () => {
  const [seat, setSeat] = useState(localStorage.getItem('seat-id'));
  const navigate = useNavigate();

  const saveSeat = (e) => {
    e.preventDefault();
    if (seat !== null) {
      let price = 10000;
      if (seat.isVIP) price = 30000;
      if (seat.save) price = 6000;
      localStorage.setItem('seat-price', price);
      localStorage.setItem('seat-id', seat.value);
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
        <p className="bg-sky-700 text-white font-bold p-1">
          Selección de Asiento
        </p>
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
              <h2 className="font-bold text-2xl">Selección de Asiento</h2>
              <dl>
                <dt>
                  <Seat value={'NN'} isVIP={true} />
                </dt>
                <dd>
                  Asiento preferencial <strong>(+ ARS 30.000)</strong>
                </dd>
                <dt>
                  <Seat value={'NN'} isVIP={false} />
                </dt>
                <dd>
                  Asiento regular <strong>(+ ARS 10.000)</strong>
                </dd>
                <dt>
                  <Seat value={'NN'} isVIP={false} save={true} />
                </dt>
                <dd>
                  Tarifa con descuento <strong>(+ ARS 6.000)</strong>
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
                <dd>Asiento ocupado</dd>
              </dl>
            </div>
          </div>
          <div className="my-6 flex buttons justify-around items-center">
            <div className="w-1/2 skip">
              <Link to="/check_in/summary" onClick={skipSeat}>
                No deseo elegir mi asiento
              </Link>
            </div>
            <div className="w-1/3">
              <button
                id="seatSubmit"
                className="text-white bg-sky-700 hover:bg-sky-700 rounded w-full p-2"
                type="submit"
                disabled={seat === null}
              >
                Continuar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
