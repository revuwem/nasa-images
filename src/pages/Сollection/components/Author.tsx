type Props = {
  children: string;
};

const Author: React.FC<Props> = ({ children }) => (
  <p className="text-base text-grey-light">
    <span className="text-grey-dark">Photographer: </span>
    {children}
  </p>
);

export default Author;
