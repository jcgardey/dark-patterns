import { useEffect, useState } from 'react';
import './Roomio.css';
import DatePicker from 'react-datepicker';

import background from '../../assets/Roomio/bg.jpg';
import { NavBar } from '../../components/Roomio/NavBar';

export const Search = ({}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.body.style.background = `url(${background})`;
  }, []);

  return (
    <>
      <NavBar />
      <form
        className="w-11/12 mx-auto flex justify-evenly bg-white/[.3] rounded-lg p-10 mt-32"
        onSubmit={onSubmit}
      >
        <input
          className="p-2 text-lg rounded mx-2"
          type="text"
          placeholder="Destino"
          name="destination"
        />
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
        >
          <option selected>Nro de Personas</option>
          <option value="1">1 adulto</option>
          <option value="2" selected>
            2 adultos
          </option>
          <option value="3">3 adultos</option>
          <option value="3">4 adultos</option>
          <option value="3">5+ adultos</option>
        </select>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 p-2 rounded text-white text-lg"
        >
          Buscar
        </button>
      </form>
    </>
  );
};
