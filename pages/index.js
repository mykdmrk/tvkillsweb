import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Head from "next/head";
import { Title } from "@material-ui/icons";

// import { BrowserRouter } from "react-router-dom"; //Can use HashRouter or MemoryRouter as well
// import { HashScroll } from "react-hash-scroll";
export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="./TV Kills full color logos 1-01.PNG" />
        <title>tvkills</title>
      </Head>

      <Navigation />
      <Banner />
      <Gallery />
      <Roadmap />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}
