import { Link } from 'react-router-dom';

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-75">
          <p className="passenger-section-title">Selección de Asiento</p>
          <form>
            <div className="row">
              <div className="plane summary-total col-md-6">
                <h2>Resumen</h2>
                <table className="summary">
                  <tr>
                    <td>Ticket</td>
                    <td>$160.000</td>
                  </tr>
                  <tr>
                    <td>Impuestos y tasas</td>
                    <td>$80.000</td>
                  </tr>
                  <tr>
                    <td>Selección de asiento</td>
                    <td id="seatPrice">{seatPrice}</td>
                  </tr>
                  <tr>
                    <td>Descuentos</td>
                    <td>$0</td>
                  </tr>
                  <tr className="summary-total">
                    <td>Total</td>
                    <td id="tktTotal">{total}</td>
                  </tr>
                </table>
              </div>
              <div className="legend col-50"></div>
            </div>
            <div className="row buttons justify-around">
              <div className="text-right">
                <Link to="/check_in/seat" className="passenger back-button">
                  Volver a la selección de asientos
                </Link>
              </div>
              <div className="col-30">
                <button className="passenger" type="submit">
                  Continuar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

