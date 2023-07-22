type Props = {
  children: string;
};

const Location: React.FC<Props> = ({ children }) => (
  <p className="text-base text-grey-light">
    <span className="text-grey-dark">Location: </span>
    {children}
  </p>
);

export default Location;
