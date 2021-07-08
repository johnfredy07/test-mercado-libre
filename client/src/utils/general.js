export const currency = (value) => {
  const values = {
    ARS: '$', USD: 'US$', COP: '$', VEF: 'Bs', UYU: '$U', PEN: 'S/.', PYG: 'Gs', CUP: '₱', BRL: 'R$'
  };
  return values[value] || '$';
};
