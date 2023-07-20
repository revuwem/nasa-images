type Props = {
  children: string;
};

const SearchTotal: React.FC<Props> = ({ children }) => (
  <div className="col-span-full">
    <p className="text-grey-dark mb-4">Total found: {children}</p>
  </div>
);

export default SearchTotal;
