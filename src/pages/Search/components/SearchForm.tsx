import Input from "@/components/Input";
import Button from "@/components/Button";
import clsx from "clsx";

const SearchForm = () => {
  return (
    <div
      className={clsx(
        "col-span-full grid gap-3 mb-12",
        "md:col-span-4",
        "lg:col-span-full lg:grid-flow-col"
      )}
    >
      {/* Search query */}
      <Input type="text" id="q" name="q" placeholder="Search collections..." />
      {/* Year start */}
      <div className="contents sm:grid grid-flow-col gap-6 lg:gap-3">
        <Input
          type="number"
          id="yearStart"
          name="yearStart"
          min={1950}
          max={2022}
          step={1}
          placeholder="Year start"
        />
        {/* Year end */}
        <Input
          type="number"
          id="yearEnd"
          name="yearEnd"
          min={1950}
          max={2022}
          step={1}
          placeholder="Year end"
        />
      </div>
      <Button>Search</Button>
    </div>
  );
};

export default SearchForm;
