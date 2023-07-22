import Input from "@/components/Input";
import Button from "@/components/Button";
import clsx from "clsx";
import Paragraph from "@/components/Paragraph";
import { useState } from "react";
import { buildSearchQuery } from "@/lib/helpers";

type Props = {
  searchQuery: string | null;
  setSearchQuery: (state: string) => void;
  setShouldFetch: (state: boolean) => void;
  setTotalResults: (state: number | null) => void;
};

const SearchForm: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  setShouldFetch,
  setTotalResults,
}) => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [yearStartVal, setYearStartVal] = useState<string>("");
  const [yearEndVal, setYearEndVal] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const onSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e?.target?.value);
  };

  const onYearStartValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearStartVal(e?.target?.value);
  };

  const onYearEndValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearEndVal(e?.target?.value);
  };

  const onSearchBtnClick = () => {
    if (
      yearStartVal &&
      yearEndVal &&
      Number(yearStartVal) > Number(yearEndVal)
    ) {
      setFormError("Year end should be equal or greater than year start");
      return;
    } else {
      setFormError("");
    }

    const newSearchQuery = buildSearchQuery({
      searchVal,
      yearStartVal,
      yearEndVal,
    });

    if (searchQuery === newSearchQuery) return;

    setSearchQuery(newSearchQuery);
    setTotalResults(null);
    setShouldFetch(true);
  };

  return (
    <div
      className={clsx(
        "col-span-full grid gap-3 mb-12",
        "md:col-span-4",
        "lg:col-span-full lg:grid-flow-col"
      )}
    >
      {/* Search query */}
      <Input
        type="text"
        id="q"
        name="q"
        placeholder="Search collections..."
        value={searchVal}
        onChange={onSearchQueryChange}
      />
      {/* Year start */}
      <div className="contents sm:grid grid-flow-col gap-6 lg:gap-3">
        <Input
          type="number"
          id="yearStart"
          name="yearStart"
          min={1950}
          max={new Date().getFullYear()}
          step={1}
          placeholder="Year start"
          value={yearStartVal}
          onChange={onYearStartValChange}
        />
        {/* Year end */}
        <Input
          type="number"
          id="yearEnd"
          name="yearEnd"
          min={1950}
          max={new Date().getFullYear()}
          step={1}
          placeholder="Year end"
          value={yearEndVal}
          onChange={onYearEndValChange}
        />
      </div>
      <Button onClick={onSearchBtnClick}>Search</Button>
      {formError && (
        <Paragraph>
          <span className="text-red-500 font-bold">{formError}</span>
        </Paragraph>
      )}
    </div>
  );
};

export default SearchForm;
