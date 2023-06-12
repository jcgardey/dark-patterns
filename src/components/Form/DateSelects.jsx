import React from 'react';
import { range } from './utils';
import { Field } from './Field';
import { SelectInput } from './CustomSelect';

export const DateSelects = ({ name, label, years, control, errors, rules }) => {
  const dateError =
    errors[`${name}_dia`] || errors[`${name}_mes`] || errors[`${name}_anio`]
      ? { type: 'required', message: '' }
      : {};

  return (
    <Field label={label} errors={dateError}>
      <div className="inline-input">
        <SelectInput
          name={`${name}_dia`}
          groupName={name}
          label="Dia"
          widgetType={'date-select'}
          style={{ width: '20%' }}
          options={range(1, 31)}
          control={control}
          rules={rules}
          errors={errors[`${name}_dia`]}
        />
        <SelectInput
          name={`${name}_mes`}
          groupName={name}
          label="Mes"
          widgetType={'date-select'}
          style={{ width: '40%' }}
          options={[
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
          ]}
          control={control}
          rules={rules}
          errors={errors[`${name}_mes`]}
        />
        <SelectInput
          name={`${name}_anio`}
          groupName={name}
          label="Año"
          widgetType={'date-select'}
          style={{ width: '20%' }}
          options={years}
          control={control}
          rules={rules}
          errors={errors[`${name}_anio`]}
        />
      </div>
    </Field>
  );
};
