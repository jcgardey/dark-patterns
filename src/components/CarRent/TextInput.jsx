export const TextInput = ({
  name,
  type = 'text',
  register,
  rules,
  errors,
  className = '',
  ...props
}) => (
  <input
    name={name}
    type={type}
    onPaste={(e) => e.preventDefault()}
    style={errors !== undefined ? { borderColor: 'red' } : {}}
    className={className}
    {...register(name, rules)}
    {...props}
  />
);
