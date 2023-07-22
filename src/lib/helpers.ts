export const formatDate = (date: string) => {
  const objectDate = new Date(date);
  return `${objectDate.getFullYear()}-${objectDate.getMonth()}-${objectDate.getDate()}`;
};
