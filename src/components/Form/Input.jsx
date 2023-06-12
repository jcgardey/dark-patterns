import React from 'react';
import { Field } from './Field';

export const Input = ({
  name,
  label,
  type = 'text',
  register,
  rules,
  errors,
}) => (
  <Field label={label} errors={errors}>
    <input
      name={name}
      type={type}
      onPaste={(e) => e.preventDefault()}
      className={`form-input${errors !== undefined ? ' error' : ''}`}
      {...register(name, rules)}
    />
  </Field>
);

