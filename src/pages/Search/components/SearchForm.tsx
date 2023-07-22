import Input from "@/components/Input";
import Button from "@/components/Button";
import clsx from "clsx";
import Paragraph from "@/components/Paragraph";
import { useEffect, useState } from "react";
import { buildSearchQuery } from "@/lib/helpers";
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [yearStartVal, setYearStartVal] = useState<string>("");
  const [yearEndVal, setYearEndVal] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchVal(searchParams.get("q") ?? "");
    setYearStartVal(searchParams.get("year_start") ?? "");
    setYearEndVal(searchParams.get("year_end") ?? "");
  }, [searchParams]);

  const onSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e?.target?.value);
    setFormError("");
  };

  const onYearStartValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearStartVal(e?.target?.value);
    setFormError("");
  };

  const onYearEndValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearEndVal(e?.target?.value);
    setFormError("");
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    if (searchParams.toString() === newSearchQuery) return;

    setSearchParams(newSearchQuery);
  };

  return (
    <div className="col-span-full mb-12">
      <form
        onSubmit={onFormSubmit}
        className={clsx(
          "grid gap-3 mb-8",
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
            id="year_start"
            name="year_start"
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
            id="year_end"
            name="year_end"
            min={1950}
            max={new Date().getFullYear()}
            step={1}
            placeholder="Year end"
            value={yearEndVal}
            onChange={onYearEndValChange}
          />
        </div>
        <Button type="submit">Search</Button>
      </form>
      {formError && (
        <div className="col-span-full">
          <Paragraph>
            <span className="text-red-500 font-bold">{formError}</span>
          </Paragraph>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
