import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = React.PropsWithChildren;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black grid grid-rows-layout gap-12 px-6 sm:px-12 lg:px-16 ">
      <Header />
      <main className="grid grid-cols-5 gap-x-6 md:grid-cols-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
