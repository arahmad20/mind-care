import "@/styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlanksLayout from "@/components/layouts/blanks-layout";
import HomeLayout from "@/components/layouts/home-layout";
import { useEffect } from "react";

const layouts = {
  Homelayout : HomeLayout,
  Blanklayout: BlanksLayout
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const Layout = layouts[Component.layout] || (({ children }) => <>{children}</>);

  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
