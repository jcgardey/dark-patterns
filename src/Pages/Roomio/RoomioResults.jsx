import { useEffect } from 'react';
import map from '../../assets/Roomio/map.jpg';
import { NavBar } from '../../components/Roomio/NavBar';
import { Room } from '../../components/Roomio/Room';
import { rooms } from './rooms';
import dayjs from 'dayjs';

const Sidebar = () => (
  <div className="w-1/5 hotel_sidebar">
    <img src={map} width="100%" />
    <div className="filters">
      <h4>Filtros</h4>

      <label>
        <input type="checkbox" /> Cerca del centro
      </label>
      <label>
        <input type="checkbox" /> Pet friendly
      </label>
      <label>
        <input type="checkbox" /> Con piscina
      </label>
      <label>
        <input type="checkbox" /> Con sauna
      </label>
    </div>
  </div>
);

export const RoomioResults = () => {
  useEffect(() => {
    document.body.style.background = 'transparent';
  }, []);

  const nights = dayjs(localStorage.getItem('hotel-end')).diff(
    dayjs(localStorage.getItem('hotel-start')),
    'day'
  );

  const adults = localStorage.getItem('hotel-adults') ?? 0;

  return (
    <>
      <NavBar />
      <div className="w-11/12 mx-auto flex justify-between">
        <Sidebar />
        <div className="w-3/4 hotel_serp">
          {rooms.map((room, i) => (
            <Room
              key={i}
              title={room.title}
              img={room.img}
              description={room.description}
              fullPrice={room.fullPrice}
              price={room.price}
              taxes={room.taxes}
              freeCancellation={room.freeCancellation}
              nights={nights}
              adults={adults}
            />
          ))}
        </div>
      </div>
    </>
  );
};
