import { useEffect, useState } from 'react';
import './Roomio.css';
import DatePicker from 'react-datepicker';

import background from '../../assets/Roomio/bg.jpg';
import { NavBar } from '../../components/Roomio/NavBar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { updateDarkPatternState } from '../../utils/dark_patterns';
import { Autocomplete } from '../../components/Form/Autocomplete';
import cities from '../../utils/cities.json';

export const Search = ({}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [city, setCity] = useState('');

  const navigate = useNavigate();

  const { t } = useTranslation();

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('hotel-start', startDate.toISOString().split('T')[0]);
    localStorage.setItem('hotel-end', endDate.toISOString().split('T')[0]);
    localStorage.setItem('hotel-adults', adults);
    localStorage.setItem('hotel-city', city);
    navigate('/roomio/results');
  };

  useEffect(() => {
    updateDarkPatternState();
  }, []);

  return (
    <div style={{ background: `url(${background})`, minHeight: '100vh' }}>
      <NavBar />
      <form
        className="w-11/12 mx-auto flex justify-evenly bg-white/[.3] rounded-lg p-10 mt-32"
        onSubmit={onSubmit}
      >
        <div className="relative w-1/4">
          <Autocomplete
            inputClassName="p-2 text-lg rounded w-full"
            optionClassName="hover:bg-teal-600"
            placeholder={t('Roomio.Search.Destination')}
            name="destination"
            value={city}
            onChange={(newValue) => setCity(newValue)}
            suggestedValues={cities.map((c) => `${c.nombre}, ${c.pais}`)}
          />
        </div>
        <div>
          <DatePicker
            className="p-2 text-lg rounded mx-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <DatePicker
            className="p-2 text-lg rounded mx-2"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <select
          className="p-2 text-lg rounded mx-2"
          aria-label="Default select example"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
        >
          <option value="">{t('Roomio.Search.People')}</option>
          <option value="1">{t('Roomio.Search.Adult', { count: 1 })}</option>
          <option value="2">{t('Roomio.Search.Adult', { count: 2 })}</option>
          <option value="3">{t('Roomio.Search.Adult', { count: 3 })}</option>
          <option value="4">{t('Roomio.Search.Adult', { count: 4 })}</option>
          <option value="5">{t('Roomio.Search.Adult', { count: 5 })}</option>
        </select>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 p-2 rounded text-white text-lg"
        >
          {t('Roomio.Search.Search')}
        </button>
      </form>
    </div>
  );
};
