import React from 'react';

export const Field = ({ label, className, errors, children, style }) => (
  <div
    className={`form-field${className ? ` ${className}` : ''}`}
    style={style}
  >
    <label className="form-label">{label}</label>
    {children}
    {errors?.message && <span className="field-error">{errors.message}</span>}
    {errors?.message === '' && errors?.type === 'required' && (
      <span className="field-error">{label} es requerido</span>
    )}
  </div>
);

