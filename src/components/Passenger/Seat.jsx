export const Seat = ({
  value,
  onSelect,
  isVIP,
  save = false,
  disabled = false,
}) => (
  <div className="seat">
    <input
      type="radio"
      disabled={disabled}
      name="seat"
      id={value}
      value={value}
      onChange={() => onSelect({ value, isVIP, save })}
    />
    <label
      htmlFor={value}
      className={`${save ? 'save' : ''} ${isVIP ? 'vip' : ''}`}
    >
      {disabled ? 'Ocuppied' : value}
    </label>
  </div>
);

