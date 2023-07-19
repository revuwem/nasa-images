type Props = {
  children: string;
};

const DateText: React.FC<Props> = ({ children }) => (
  <p className="text-base text-grey-light italic">{children}</p>
);

export default DateText;
