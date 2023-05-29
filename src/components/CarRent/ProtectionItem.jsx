export const ProtectionItem = ({
  title,
  items,
  price,
  setProtection,
  protection,
}) => {
  const changeProtection = () => {
    protection?.title !== title
      ? setProtection({ title, price })
      : setProtection(null);
  };

  return (
    <div
      className={`p-2 shadow m-4 cursor-pointer${
        protection?.title === title ? ' border-2 border-blue-950' : ''
      }`}
      onClick={changeProtection}
    >
      <h4 className="text-center text-lg font-bold">{title}</h4>
      <div className="my-4">
        {items.map((item, i) => (
          <p key={i} className="my-2">
            {item}
          </p>
        ))}
      </div>
      <div className="my-2">
        <p className="text-center font-bold text-blue-500">${price} / day</p>
      </div>
    </div>
  );
};
