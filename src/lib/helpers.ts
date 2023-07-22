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
}: BuildSearchQueryProps) =>
  `${searchVal ? "q=" + searchVal : ""}${
    yearStartVal ? "&year_start=" + yearStartVal : ""
  }${yearEndVal ? "&year_end=" + yearEndVal : ""}`;
