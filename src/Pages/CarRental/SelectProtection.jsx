const ProtectionItem = ({ title, children }) => (
  <div className="p-2 w-1/4 shadow mx-2">
    <h4 className="text-center text-lg font-bold">{title}</h4>
    <div className="my-2">{children}</div>
  </div>
);

export const SelectProtection = () => {
  const reservation = JSON.parse(localStorage.getItem('reservation'));

  return (
    <div className="w-11/12 mx-auto py-4">
      <h2 className="text-2xl text-black font-semibold">
        Choose your protection
      </h2>
      <div className="my-4 flex">
        <ProtectionItem title={'Full Cover Protection'}>
          <p>Avoid paying for damage or theft of your rental vehicle.</p>
          <p>
            Protect yourself from third party accident or injury claims up to
            $1M.
          </p>
          <p>
            Free 24/7 roadside assistance for flat tires, lost keys and dead
            battery.
          </p>
        </ProtectionItem>
        <ProtectionItem title={'Standard Cover Protection'}>
          <p>Avoid paying for damage or theft of your rental vehicle.</p>
          <p>
            Protect yourself from third party accident or injury claims up to
            $1M.
          </p>
        </ProtectionItem>
        <ProtectionItem title={'Basic Cover Protection'}>
          <p>Avoid paying for damage or theft of your rental vehicle.</p>
        </ProtectionItem>
        <div className="p-2 shadow">
          <h4>{reservation.vehicle.name}</h4>
        </div>
      </div>
    </div>
  );
};

