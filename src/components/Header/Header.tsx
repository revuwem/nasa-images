import GithubMark from "@/assets/github-mark.svg";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="min-h-16 pt-4 flex justify-between items-center">
      <Logo />
      <a
        href="https://github.com/revuwem/nasa-images"
        target="_blank"
        className="text-grey-light hover:text-grey-dark transition"
      >
        <div className="h-8">
          <GithubMark />
        </div>
        <span className="sr-only">Link to GitHub site repo</span>
      </a>
    </header>
  );
};

export default Header;
