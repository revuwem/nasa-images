import Logo from "@/components/Logo";
import Paragraph from "@/components/Paragraph";

const Footer = () => {
  return (
    <footer className="pt-8 pb-12 flex flex-wrap gap-6 justify-between items-center border-t border-grey-dark">
      <Logo />
      <Paragraph>
        Made with 💟 by{" "}
        <a
          href="https://github.com/revuwem"
          target="_blank"
          className="text-grey-light hover:text-grey-dark"
        >
          revuwem
        </a>
      </Paragraph>
    </footer>
  );
};

export default Footer;
