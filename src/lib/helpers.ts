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

export const collectImages = (dataset: AssetImage[]) => {
  let collection = [] as AssetImage[];
  // group unique images by size (orig is excluded)
  const groupBySize = dataset.reduce((acc, item) => {
    const linkParts = item.href.split("~");
    const identifier =
      linkParts[linkParts.length - 1].match(/large|medium|small/);

    if (!identifier) return acc;

    acc[identifier[0]] = acc[identifier[0]] ?? [];
    acc[identifier[0]].push(item);
    return acc;
  }, {} as { [key: string]: AssetImage[] });

  const size = Object.keys(groupBySize)[0];
  if (size && size.length > 0) {
    collection = groupBySize[size];
  }

  return collection;
};
