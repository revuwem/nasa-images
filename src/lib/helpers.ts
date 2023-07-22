export const formatDate = (date: string) => {
  const objectDate = new Date(date);
  return `${objectDate.getFullYear()}-${objectDate.getMonth()}-${objectDate.getDate()}`;
};

type BuildSearchQueryProps = {
  searchVal: string;
  yearStartVal: string;
  yearEndVal: string;
};

export const buildSearchQuery = ({
  searchVal,
  yearStartVal,
  yearEndVal,
}: BuildSearchQueryProps) => {
  const q = `${searchVal ? "q=" + searchVal : ""}`;
  const yearStart = `${yearStartVal ? "&year_start=" + yearStartVal : ""}`;
  const yearEnd = `${yearEndVal ? "&year_end=" + yearEndVal : ""}`;

  const query = q + yearStart + yearEnd;

  return query;
};
