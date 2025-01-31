import ButtonGradient from "./assets/svg/ButtonGradient";
import AFooter from "./components/AFooter";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Team from "./components/Team";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services /> {/* ABOUT US */}
        <Benefits />
        <Collaboration />
        <Team />
        <Pricing />
        {/* <Roadmap /> */}
        <Contact />
        <Footer />
        <AFooter />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
