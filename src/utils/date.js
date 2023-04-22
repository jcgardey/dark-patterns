// returns a date in the form 'Mon Apr 17'
export const dateString = (aDate) => aDate.toDateString().slice(0, -5);

export const differenceInDays = (aDate, anotherDate) =>
  parseInt((aDate.getTime() - anotherDate.getTime()) / (1000 * 3600 * 24));
