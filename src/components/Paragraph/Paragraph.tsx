type Props = {
  children: React.ReactNode;
};

const Paragraph: React.FC<Props> = ({ children }) => (
  <p className="text-base text-grey-dark">{children}</p>
);

export default Paragraph;
