export const formatCurrency = (number) => {
  const formatting_options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  };
  return new Intl.NumberFormat('en-US', formatting_options).format(number);
};
