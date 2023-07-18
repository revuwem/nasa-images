import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className={clsx(
        "inline-block w-full pt-3 pb-2.5",
        "text-center text-black font-bold",
        "bg-grey-light rounded",
        "transition",
        "hover:bg-grey-dark",
        "focus:outline-none focus:bg-grey-dark"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
