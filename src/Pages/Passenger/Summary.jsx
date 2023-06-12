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

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-3/4">
        <PageTitle>Selección de Asiento</PageTitle>
        <form>
          <div className="plane w-1/2 mx-auto">
            <h2 className="text-2xl font-bold">Resumen</h2>
            <div className="summary my-4">
              <div className="flex justify-between my-4">
                <p>Ticket</p>
                <p>$160.000</p>
              </div>
              <div className="flex justify-between my-4">
                <p>Impuestos y tasas</p>
                <p>$80.000</p>
              </div>
              <div className="flex justify-between my-4">
                <p>Selección de asiento</p>
                <p id="seatPrice">{seatPrice}</p>
              </div>
              <div className="flex justify-between my-4">
                <p>Descuentos</p>
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
                Volver a la selección de asientos
              </BackButton>
            </div>
            <div className="w-1/4 mx-4">
              <PrimaryButton type="submit">Continuar</PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
