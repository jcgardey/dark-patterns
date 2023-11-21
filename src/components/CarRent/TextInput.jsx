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
    style={errors !== undefined ? { borderColor: 'red' } : {}}
    className={className}
    {...register(name, rules)}
    {...props}
  />
);
