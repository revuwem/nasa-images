import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
  return (
    <input
      className={clsx(
        "inline-block w-full pl-4 pt-3 pr-3 pb-2.5",
        "text-grey-light",
        "bg-black border border-grey-dark rounded",
        "transition",
        "focus:outline-none focus:border-grey-light"
      )}
      {...props}
    />
  );
};

export default Input;
