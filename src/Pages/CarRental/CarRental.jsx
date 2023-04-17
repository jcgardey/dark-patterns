import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Input = ({ name, onChange }) => (
  <input
    type="text"
    name={name}
    onChange={onChange}
    className="w-full rounded px-2 h-9"
  />
);

const Label = ({ children }) => (
  <label className="text-white text-lg">{children}</label>
);

export function CarRental() {
  useEffect(() => {
    document.title = 'Rent a Car';
  }, []);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <div className="bg-blue-900 p-4">
        <h2 className="text-2xl text-white font-semibold">
          Start a Reservation
        </h2>
        <div className="my-4 flex items-end">
          <div className="mx-3 w-1/4">
            <Label>Location</Label>
            <Input name={'location'} />
          </div>
          <div className="mx-3 w-1/5">
            <Label>Pick-up Date</Label>
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
            <Label>Return Date</Label>
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
            <button className="bg-yellow-300 hover:bg-yellow-400 p-4 rounded-lg text-xl font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

