type Props = {
  children: string;
};

const Author: React.FC<Props> = ({ children }) => (
  <p className="text-base text-grey-light">{children}</p>
);

export default Author;
