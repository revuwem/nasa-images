import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="group">
      <div className="flex gap-1 items-center">
        <img src="/nasa.svg" alt="" className="w-14 h-14" />
        <h1 className="text-grey-light font-bold text-xl transition group-hover:text-grey-dark">
          NASA Images
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
