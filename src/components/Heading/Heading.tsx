type Props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

const styleMap: { [Key in Props["as"]]: string } = {
  h1: "",
  h2: "text-xl lg:text-3xl text-grey-light font-bold",
  h3: "",
  h4: "",
  h5: "",
  h6: "",
};

const Heading: React.FC<Props> = ({ as, children }) => {
  const Component = as;
  return <Component className={styleMap[as]}>{children}</Component>;
};

export default Heading;
