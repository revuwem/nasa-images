type Props = {
  children: string;
};

const DateText: React.FC<Props> = ({ children }) => (
  <p className="text-base text-grey-light italic">
    <span className="text-grey-dark">Date: </span>
    {children}
  </p>
);

export default DateText;
