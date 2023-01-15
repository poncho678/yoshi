export const returnYear = (date) => {
  let newDate = new Date(date).getFullYear();

  if (isNaN(newDate)) {
    return false;
  }
  return newDate;
};
