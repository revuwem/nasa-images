type Props = {
  children: string;
};

const Tag: React.FC<Props> = ({ children }) => {
  return <span className="text-sm text-grey-dark uppercase">{children}</span>;
};

export default Tag;
