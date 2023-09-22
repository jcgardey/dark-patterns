import map from '../../assets/Roomio/map.jpg';
import { NavBar } from '../../components/Roomio/NavBar';
import { Room } from '../../components/Roomio/Room';

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
  return (
    <>
      <NavBar />
      <div className="w-11/12 mx-auto flex justify-between">
        <Sidebar />
        <div className="w-3/4 hotel_serp">
          <Room
            title={'Moderno Apartamento en Bernabéu by Exyca'}
            img={
              'https://cf.bstatic.com/xdata/images/hotel/square600/473214679.jpg?k=d842e30500d24cabd90f2ce4c623a36fbcbb9814c7d3b9fcac828cd1fc5c4fd4&amp;o='
            }
            fullPrice={81.348}
            price={74.839}
            taxes={20.55}
          >
            <p className="card-text">
              Chamart&#237;n, Madrid One-Bedroom Apartment Entire apartment
              &#8226; 1 bedroom &#8226; 1 living room &#8226; 1 bathroom &#8226;
              50m&#178; 2 beds (1 double, 1 sofa bed){' '}
              <span className="freeCancel">
                FREE cancellation You can cancel later, so lock in this great
                price today.
              </span>
              <span className="nights"> 4 nights, 2 adults</span>
            </p>

            <p className="card-text"></p>
          </Room>

          <Room
            title={'Dúplex en el Rastro, Centro de Madrid'}
            img={
              'https://cf.bstatic.com/xdata/images/hotel/square600/232417262.jpg?k=f971e80b6f44142abf790b172d2f3c915bf4243934df0026b355248015afc44a&amp;o='
            }
            fullPrice={161.697}
            price={148.762}
            taxes={30.43}
          >
            <p className="card-text">
              Two-Bedroom Apartment 3 beds (2 singles, 1 extra-large double)
              <span className="nights"> 4 nights, 2 adults</span>
            </p>

            <p className="card-text"></p>
          </Room>

          <Room
            title={'Coqueto Estudio en Malasaña'}
            img={
              'https://cf.bstatic.com/xdata/images/hotel/square600/378338174.jpg?k=8a169654ea9139391dd46851110d4a4b974461351ba5ad82010929f5c77f9632&amp;o='
            }
            fullPrice={83.138}
            price={76.486}
            taxes={22.783}
          >
            <p className="card-text">
              Exceptional 9.5 One-Bedroom Apartment 1 double bed{' '}
              <span className="freeCancel">
                FREE cancellation You can cancel later, so lock in this great
                price today.
              </span>
              <span className="nights"> 4 nights, 2 adults</span>
            </p>

            <p className="card-text"></p>
          </Room>

          <Room
            title={'Corazon de Malasaña'}
            img={
              'https://cf.bstatic.com/xdata/images/hotel/square600/140092546.jpg?k=214cfc5c360308ce827c4d1df70d67954cd0ae16173bb8df6fdf28bca39ef743&amp;o='
            }
            fullPrice={190.232}
            price={175.013}
            taxes={41.1}
          >
            <p className="card-text">
              8.0 Very good Three-Bedroom Apartment Entire apartment &#8226; 3
              bedrooms &#8226; 2 bathrooms &#8226; 1 kitchen &#8226; 70m&#178; 4
              beds (2 singles, 2 doubles){' '}
              <span className="freeCancel">
                FREE cancellation You can cancel later, so lock in this great
                price today.
              </span>
              <span className="nights"> 4 nights, 2 adults</span>
            </p>

            <p className="card-text"></p>
          </Room>

          <Room
            title={'Apartamento con encanto en Malasaña'}
            img={
              'https://cf.bstatic.com/xdata/images/hotel/square600/476781796.jpg?k=14cb04c001525eac0c8f0540cf3eef53d801003eae4e3f43197cb63230393338&amp;o='
            }
            fullPrice={150.307}
            price={138.282}
            taxes={29.45}
          >
            <p className="card-text">
              Two-Bedroom Apartment 2 double beds{' '}
              <span className="freeCancel">
                FREE cancellation You can cancel later, so lock in this great
                price today.{' '}
              </span>
              <span className="nights">4 nights, 2 adults</span>
            </p>

            <p className="card-text"></p>
          </Room>

          <Room
            title={'Arenal Suites Gran V&#237;a'}
            img={
              'https://cf.bstatic.com/xdata/images/hotel/square600/461125298.jpg?k=1609208a72ad94a87e5b7d6d3b3079c5cd8581b67963e35cf56e517ec65d786a&amp;o='
            }
            fullPrice={147.958}
            price={136.121}
            taxes={29.03}
          >
            <p className="card-text">
              Travel Sustainable Level 1 9.2 Superb Location 9.8 Apartment
              Entire apartment &#8226; 1 bedroom &#8226; 1 living room &#8226; 1
              bathroom &#8226; 1 kitchen &#8226; 45m&#178; 1 double bed Only 1
              left at this price on our site
              <span className="nights"> 4 nights, 2 adults</span>
            </p>

            <p className="card-text"></p>
          </Room>

          <Room
            title={'Cozy Bright - 1Bedroom 1 Bathroom - La Latina'}
            img={
              'https://cf.bstatic.com/xdata/images/hotel/square600/475397356.jpg?k=62c475bce9172de58a7d7de7255c41f8ccecf34b7f9fb39ef5c36caa786aae03&amp;o='
            }
            fullPrice={108.033}
            price={99.39}
            taxes={23.36}
          >
            <p className="card-text">
              One-Bedroom Apartment Entire apartment &#8226; 1 bedroom &#8226; 1
              bathroom &#8226; 1 kitchen &#8226; 55m&#178; 1 double bed{' '}
              <span className="freeCancel">
                FREE cancellation You can cancel later, so lock in this great
                price today.
              </span>
              <span className="nights"> 4 nights, 2 adults</span>
            </p>

            <p className="card-text"></p>
          </Room>

          <Room
            title={'Apartamento en el coraz&#243;n de Madrid'}
            img={
              'https://cf.bstatic.com/xdata/images/hotel/square600/473109863.jpg?k=9530ef8b3ab8838fc86a7ae01a1e478751e284855aefd3f42ee96870435abce7&amp;o='
            }
            fullPrice={93.942}
            price={86.426}
            taxes={24.9}
          >
            <p className="card-text">
              8.6 Fabulous Location 10 One-Bedroom Apartment Entire apartment
              &#8226; 1 bedroom &#8226; 1 bathroom &#8226; 1 kitchen 1 double
              bed
              <span className="freeCancel">
                FREE cancellation You can cancel later, so lock in this great
                price today.
              </span>
              <span className="nights"> 4 nights, 2 adults</span>
            </p>

            <p className="card-text"></p>
          </Room>
        </div>
      </div>
    </>
  );
};
