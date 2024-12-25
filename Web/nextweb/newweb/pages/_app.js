import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps, router }) {
  const noNavbarRoutes = ["/login", "/register"];

  return (
    <div>
      {!noNavbarRoutes.includes(router.pathname) && <Navbar />}
      <Component {...pageProps} />
    </div>
  );
}
