import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import car_illustration from '../../assets/CarRental/car_illustration.avif';
import { NavBar } from '../../components/CarRent/NavBar';
import { updateDarkPatternState } from '../../utils/dark_patterns';

const Input = ({ name, value, onChange }) => (
  <input
    type="text"
    widget-type="text"
    name={name}
    value={value}
    onChange={onChange}
    className="w-full rounded px-2 h-9"
  />
);

const Label = ({ children }) => (
  <label className="text-white text-lg">{children}</label>
);

export function CarRental() {
  useEffect(() => {
    document.title = t('Rental.Title');
    updateDarkPatternState();

    const params = new URLSearchParams(document.location.search);
    localStorage.setItem('ux-analyzer-token', params.get('token'));
  }, []);

  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [cities, setCities] = useState([]);
  const [showCities, setShowCities] = useState(false);

  const getCities = (prefix) => {
    fetch(
      `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${prefix}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((response) => response.json())
      .then((res) =>
        setCities(res.data.map((city) => `${city.name}, ${city.country}`))
      );
  };

  const refreshCities = (value) => {
    if (value.length > 3) {
      getCities(value);
      setShowCities(true);
    } else {
      setCities([]);
    }
  };

  const saveCity = (city) => {
    setLocation(city);
    setShowCities(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (location !== '' && startDate !== '' && endDate !== '') {
      localStorage.setItem(
        'reservation',
        JSON.stringify({ location, startDate, endDate })
      );
      navigate('/car_rental/vehicle');
    }
  };

  const { t } = useTranslation();

  const Card = ({ title, description, className }) => (
    <div className={`p-4 bg-white box-shadow ${className}`}>
      <h4 className="font-bold text-slate-800 text-xl my-2">{title}</h4>
      <p className="text-slate-800 font-medium">{description}</p>
    </div>
  );

  return (
    <>
      <NavBar />
      <div className="bg-slate-500 p-4">
        <h2 className="text-2xl text-white font-semibold">
          {t('Rental.Start')}
        </h2>
        <form onSubmit={onSubmit}>
          <div className="my-4 flex items-end">
            <div className="mx-3 w-1/4 relative">
              <Label>{t('Rental.Location')}</Label>
              <Input
                name={'location'}
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  refreshCities(e.target.value);
                }}
              />
              {showCities && cities.length > 0 && (
                <div className="absolute my-1 w-full bg-white border border-gray-100 rounded p-2">
                  {cities.map((city, i) => (
                    <p
                      key={i}
                      onClick={() => saveCity(city)}
                      className="my-1 text-lg cursor-pointer hover:bg-gray-700 hover:text-white"
                    >
                      {city}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className="mx-3 w-1/5">
              <Label>{t('Rental.StartDate')}</Label>
              <DatePicker
                className="w-full rounded px-2 h-9"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="mx-3 w-1/5">
              <Label>{t('Rental.EndDate')}</Label>
              <DatePicker
                className="w-full rounded px-2 h-9"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-yellow-300 hover:bg-yellow-400 p-4 rounded-lg text-xl font-semibold"
              >
                {t('Rental.Search')}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="h-screen bg-slate-600 p-8">
        <img className="w-1/2 mx-auto" src={car_illustration} />
        <div className="w-3/4 mx-auto my-4">
          <h2 className="text-white font-bold text-3xl border-b p-2">
            {t('Rental.Featured.Title')}
          </h2>
          <div className="flex justify-between my-4">
            <Card
              title={t('Rental.Featured.Last_Minute.Title')}
              description={t('Rental.Featured.Last_Minute.Description')}
              className="w-1/3"
            />
            <Card
              title={t('Rental.Featured.Plan_Ahead.Title')}
              description={t('Rental.Featured.Plan_Ahead.Description')}
              className="w-1/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
